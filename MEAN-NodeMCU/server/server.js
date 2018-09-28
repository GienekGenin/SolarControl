let http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressSession = require("express-session");
const MongoStore = require("connect-mongo")(expressSession);
const mongooseConnection = require("./db/connect").connection;
const UserService = require('./entities/user/user.service');
const SensorService = require('./entities/lastSensorData/sensor.service');
const SessionService = require('./entities/session/session.service');
const SolarService = require('./entities/solarInput/solarInput.service');
const moment = require('moment');
const app = express();

app.use(
  expressSession({
    secret: "sessionsecretsessionsecret",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongooseConnection
    })
  })
);

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

/*
Handling data incoming from nodeMCU
Data pattern:
http request: {"data":{"light":["1072","1099","1084","1118","1154","1166","1127","1094"],
                       "temp":["1085.3","1092.3","1086.2","1121.9","1058.5","1084.7","1100.9","1125.6"]},
                       "voltage":"7.25","current":"0.26"}
DB model: {'Volts': 4.33, 'Current': 3, 'Time': '21:53:0', 'Day': 14, 'sessionID': 1, 'index': 1}
store sensors data in DB
*/

app.set('port', process.env.PORT || 8080);

const server = app.listen(process.env.PORT || 8080, function () {
  let port = server.address().port;
  console.log('App now running on port', port);
});

const io = require('socket.io')(server);

let session = null;

SessionService.getSesssion().then(_session=>{
  session = _session;
  //Socket connection
  io.on('connection', (socket) => {
    console.log('New connection made');

    socket.on('Init', () => {
      SensorService.getOne()
      .then(doc=>{
        socket.emit('SensorsData', {
          msg: doc
        });
      });
      SessionService.getAllSessions().then(docs=>{
        socket.emit('GetAllSessions', {
          msg: docs
        });
      })
      SessionService.getLastSession().then(doc=>{
        socket.emit('GetLastSession', {
          msg: doc
        });
      })
    });

    app.post('/data', function (req, res) {
      if(_session){
        io.emit('NewData', {
          msg: req.body.data,
          time: moment()
        });
        let dataToDB = Object.assign(req.body.data, {time: moment(), sessionID: session.sessionID});
        SolarService.save(dataToDB).catch(err=>err);
      }
      io.emit('SensorsData', {
        msg: req.body.data
      });
      SensorService.update(req.body.data)
        .then(()=>{
          res.json(req.body.data);
        })
        .catch(err=>err);
    });

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

    socket.on('users_data', (data) => {
      UserService.login(data.user).then(user=>socket.emit('receive_users', {
        user
      }))
    });
  });
}).catch(err=>console.log(err));

// Never sleep again :)
// setInterval(function() {
//   http.get('http://blooming-fortress-61113.herokuapp.com/');
// }, 300000);
