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
let staticPath = path.normalize(__dirname + '/../dist');
app.use(express.static(staticPath));

// Catch all other routes and return the index file
app.get('/', function (req, res) {
  res.sendFile(staticPath + '/index.html');
});

//Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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

// Handling data incoming from nodeMCU
// Request: {"data": {"L1":1065.20,"L2":1064.89,"L3":1063.67,"L4":1041.72,"L5":1049.04,"L6":1060.02,"L7":1013.97,
//                    "L8":918.82,"L9":812.09,"T1":917.60,"T2":917.60,"T3":1063.67,"T4":916.38,"T5":947.79,
//                    "T6":1060.02,"T7":993.23,"T8":1014.88,"T9":812.09,"bc":0.22,"bv":0.00}}
// DB model: {"Volts": 4.33,"Time": "21:53:0",  "Day": 14}
//write sensors data in DB
function rightSensors(msg) {
  let counter = 0;
  let lightArr = [];
  let tempArr = [];
  for (let key in msg.data) {
    ++counter;
    if (counter >= 1 && counter <= 9) {
      lightArr.push(msg.data[key]);
    }
    if (counter >= 10 && counter <= 18) {
      tempArr.push(msg.data[key]);
    }
  }
  console.log(msg.data.bv);
  db.sensors.update({_id: mongojs.ObjectId('5af489d1f36d28074502ec0a')}, {
    $set: {
      light: lightArr,
      temp: tempArr,
      bv: msg.data.bv,
      bc: msg.data.bc
    }
  }, function () {
    console.log('Done');
  });
}

let session = {
  'sessionStatus': false,
  "sessionID": 0,
  'index': 0
};

app.post('/data', function (req, res) {
  console.log(req.body);
  rightSensors(req.body);
  if (session.sessionStatus) {
    const dataToDb = {
      'Volts': req.body.data.bv,
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

let server = app.listen(process.env.PORT || 8080, function () {
  let port = server.address().port;
  console.log("App now running on port", port);
});

const io = require('socket.io')(server);
//Socket connection
io.on('connection', (socket) => {
  console.log('New connection made');

  //Test Messages
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

  socket.on('Init data', (data) => {
    console.log(data.msg);
    setInterval(function () {
      db.sensors.findOne(function (err, docs) {
        socket.emit('Sensors data', {
          msg: {"temp": docs.temp, "light": docs.light, "bv": docs.bv, "bc": docs.bc}
        });
      });
    }, 2000);
  });
  socket.on('setSession', (data) => {
    session.index = 0;
    console.log(`Toggle session: ${data.msg}`);
    session.sessionID = data.msg.sessionIndex;
    session.sessionStatus = data.msg.sessionStatus;
    if(session.sessionStatus){
      socket.emit('Remove data for chart', {
        msg: 'Remove data'
      });
    }
    setInterval(function () {
      console.log(session.sessionStatus);
      if(session.sessionStatus){
        db.solarInput.find({'sessionID': session.sessionID}, function (err, docs) {
          console.log(docs);
          return socket.emit('Update session', {
            msg: docs
          });
        });
      }
    }, 5000);
  });
});
