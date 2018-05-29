const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongojs = require('mongojs');
const db = mongojs('mongodb://Gennadii:1q2w120195@ds239097.mlab.com:39097/sensors', ['solarInput', 'sensors', 'users']);

// Currently not used routes
const index = require('./routes/index');
const tasks = require('./routes/tasks');

const app = express();

//View engine folder
app.set('views', path.join(__dirname, 'views'));

// Specify your engine
app.set('view engine', 'ejs');

//render html files
app.engine('html', require('ejs').renderFile);

//Set static folder for Angular
const staticPath = path.normalize(__dirname + '/../dist');
app.use(express.static(staticPath));

// Catch all other routes and return the index file
app.get('/', function (req, res) {
  res.sendFile(staticPath + '/index.html');
});

//Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// This two pages currently not used
//Home page route
app.use('/index', index);

//Tasks page route
app.use('/api', tasks);

function getTime() {
  const today = new Date();
  return today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
}

function getDay() {
  const today = new Date();
  return today.getDate();
}

/*
Handling data incoming from nodeMCU
Data pattern:
http request: {"data":{"light":["1072","1099","1084","1118","1154","1166","1127","1094"],
                       "temp":["1085.3","1092.3","1086.2","1121.9","1058.5","1084.7","1100.9","1125.6"]},
                       "voltage":"7.25","current":"0.26"}
DB model: {'Volts': 4.33, 'Current': 3, 'Time': '21:53:0', 'Day': 14, 'sessionID': 1, 'index': 1}
store sensors data in DB
*/
function rightSensors(msg) {
  console.log(msg);
  db.sensors.update({_id: mongojs.ObjectId('5af489d1f36d28074502ec0a')}, {
    $set: {
      light: msg.light,
      temp: msg.temp,
      bv: msg.bv,
      bc: msg.bc
    }
  }, function () {
    console.log('Done');
  });
}

// monitoring session status
let session = {
  'sessionStatus': false,
  'sessionID': 0,
  'newReq': false,
  'index': 0
};
let dataToDB = 0;

// Showing that data, and sending it back
app.get('/data', function (req, res) {
  db.solarInput.find(function (err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
});


// test api

let testVar  = 1;
app.get('/test', function (req, res) {
  res.json(testVar);
});

app.post('/test', function (req, res) {
  testVar = req.body;
  res.json(testVar);
});

app.set('port', process.env.PORT || 8080);

const server = app.listen(process.env.PORT || 8080, function () {
  let port = server.address().port;
  console.log('App now running on port', port);
});

const io = require('socket.io')(server);
//Socket connection
io.on('connection', (socket) => {
  console.log('New connection made');

  // Test events to check sockets working properly
  socket.on('Client_asking', (data) => {
    console.log(data.msg);
  });

  //Emit a message when we load the browser window
  socket.emit('Server_asking', {
    msg: 'Server to client, do u read me? Over.'
  });

  socket.on('Client_response', (data) => {
    console.log(data.msg);
    socket.emit('Server_response', {
      msg: 'Loud and clear'
    })
  });

  // Event that clears all data in DB
  socket.on('Set_session', (data) => {
    // db.solarInput.remove({sessionID: session.sessionID});
    session.sessionStatus = data.msg.sessionStatus;
    session.sessionID = data.msg.sessionID;
    session.index = 0;
    // console.log('Set session');
  });
  // Stops current session
  socket.on('Stop_session', () => {
    // console.log('Stop session');
    session.sessionStatus = false;
  });

  app.post('/data', function (req, res) {
    session.newReq = true;
    // Store data into DB in separate function
    rightSensors(req.body.data);
    // If users turned on session flag, data will be stored in the DB
    if (session.sessionStatus) {
      dataToDB = {
        'Volts': req.body.data.bv,
        'Current': req.body.data.bc,
        'Time': getTime(),
        'Day': getDay(),
        'sessionID': session.sessionID,
        'index': ++session.index
      };
      // Every time server receive post request, it sends this data to client via socket
      io.sockets.emit('Update_session', {
        msg: dataToDB
      });
      // Save received data to DB
      db.solarInput.save(dataToDB, function (err, data) {
        if (err) {
          res.send(err);
        }
        res.json(data);
      });
    } else {
      res.json(req.body.data);
    }
  });

  // Starting data transfer
  socket.on('Init_data', (data) => {
    setInterval(function () {
      // Refreshing data on client side only when there in a new post request
      if (session.newReq) {
        db.sensors.findOne(function (err, docs) {
          socket.emit('Sensors_data', {
            msg: {'temp': docs.temp, 'light': docs.light, 'bv': docs.bv, 'bc': docs.bc}
          });
        });
      }
    }, 500);
  });

  // Clear DB on event
  socket.on('Clear_DB', (data) => {
    db.solarInput.remove();
  });

  socket.on('Choose_session', (data) => {
    session.sessionID = data.msg;
    db.solarInput.find({sessionID: session.sessionID}, function (err, docs) {
      return socket.emit('View_session', {
        msg: docs
      });
    });
  });

  socket.on('users_data', (data) => {
    db.users.findOne(function (err, docs) {
      socket.emit('receive_users', {
        msg: docs
      })
    });
    console.log(data.msg);
  });
});
