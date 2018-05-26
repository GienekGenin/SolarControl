const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongojs = require('mongojs');
const db = mongojs('mongodb://Gennadii:1q2w120195@ds239097.mlab.com:39097/sensors', ['solarInput', 'sensors']);

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
DB model: {"Volts": 4.33,"Time": "21:53:0",  "Day": 14, "sessionID": 1, "index": 1}
write sensors data in DB
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
  "sessionID": 0,
  'index': 0,
  'newReq': false
};

// Accepting http request from nodeMCU
app.post('/data', function (req, res) {
  session.newReq = true;
  console.log(req.body);
  rightSensors(req.body.data);
  if (session.sessionStatus) {
    const dataToDb = {
      'Volts': req.body.data.bv,
      'Current': req.body.data.bc,
      'Time': getTime(),
      'Day': getDay(),
      'sessionID': session.sessionID,
      'index': ++session.index
    };
    db.solarInput.save(dataToDb, function (err, data) {
      if (err) {
        res.send(err);
      }
      res.json(data);
    });
  } else {
    res.json(req.body.data);
  }
});

// Showing that data, and sending it back
app.get('/data', function (req, res) {
  db.solarInput.find(function (err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
});

app.set('port', process.env.PORT || 8080);

const server = app.listen(process.env.PORT || 8080, function () {
  let port = server.address().port;
  console.log("App now running on port", port);
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
  socket.on('Clear_DB', (data) => {
    //console.log(data.msg);
    db.solarInput.remove();
  });

  // Starting data transfer
  socket.on('Init_data', (data) => {
    //console.log(data.msg);
    setInterval(function () {
      db.sensors.findOne(function (err, docs) {
        socket.emit('Sensors_data', {
          msg: {"temp": docs.temp, "light": docs.light, "bv": docs.bv, "bc": docs.bc}
        });
      });
    }, 500);
  });

  // Event that sets starts new or stop current session
  socket.on('Set_session', (data) => {
    session.index = 0;
    session.newReq = true;
    console.log(`Toggle session: ${data.msg.sessionStatus}`);
    session.sessionID = data.msg.sessionIndex;
    session.sessionStatus = data.msg.sessionStatus;
    if(session.sessionStatus){
      socket.emit('Remove_data_from_chart', {
        msg: 'Remove data'
      });
    }
    // Finds all new incoming data
    setInterval(function () {
      //console.log(session.sessionStatus);
      if(session.sessionStatus && session.newReq){
        db.solarInput.find({sessionID: session.sessionID, index:{$gte: session.index}}, function (err, docs) {
          if(docs){
            session.newReq = false;
            //console.log(docs);
            return socket.emit('Update_session', {
              msg: docs
            });
          }
        });
      }
    }, 500);
  });
});
