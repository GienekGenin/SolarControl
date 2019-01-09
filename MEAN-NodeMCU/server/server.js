const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
const mongooseConnection = require('./db/connect').connection;
const moment = require('moment');
const app = express();

const UserService = require('./entities/user/user.service');
const SensorService = require('./entities/lastSensorData/sensor.service');
const SessionService = require('./entities/session/session.service');
const SolarService = require('./entities/solarInput/solarInput.service');

app.use(
	expressSession({
		secret: 'sessionsecretsessionsecret',
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
	// eslint-disable-next-line
	console.log('App now running on port', port);
});

const io = require('socket.io')(server);

let session = null;

SessionService.getLastSession().then(_session=>{
	session = _session[0];
	//Socket connection
	io.on('connection', (socket) => {

		// Test events to check sockets working properly
		/*eslint-disable */
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
			});
		});
    /*eslint-enable */

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
			});
			SessionService.getLastSession().then(_session=>{
				session = _session[0];
				socket.emit('GetLastSession', {
					msg: _session
				});
				SolarService.getAllBySession(session.sessionID).then(data=>{
					let chartData = [];
					data.forEach((el,i)=>{
						chartData.push({
							ligth: el.light,
							temp: el.temp,
							time: moment(el.time).format('hh:mm:ss'),
							bv: el.bv,
							bc: el.bc,
							index: i
						});
					});
					socket.emit('InitData', {
						data: chartData
					});
				});
			});
		});

		app.post('/data', function (req, res) {
			if(_session && session.sessionStatus){
				io.emit('NewData', {
					msg: req.body,
					time: moment().format('hh:mm:ss')
				});
				let dataToDB = Object.assign(req.body, {time: moment(), sessionID: session.sessionID});
				SolarService.save(dataToDB).catch(err=>err);
			}
			io.emit('SensorsData', {
				msg: req.body
			});
			SensorService.update(req.body)
				.then(()=>{
					res.json(req.body);
				})
				.catch(err=>err);
		});

		socket.on('StartNewSession', () => {
			SessionService.switchSession()
				.then(()=>{
					SessionService.getAllSessions().then(docs=>{
						io.emit('GetAllSessions', {
							msg: docs
						});
					});
					SessionService.getLastSession().then(doc=>{
						io.emit('GetLastSession', {
							msg: doc
						});
					});
					SessionService.getLastSession().then(_session=>{
						session = _session[0];
					});
				})
				.catch(err=>err);
		});

		socket.on('StopSession', () => {
			SessionService.stopSession()
				.then(()=>{
					SessionService.getAllSessions().then(docs=>{
						io.emit('GetAllSessions', {
							msg: docs
						});
					});
					SessionService.getLastSession().then(doc=>{
						io.emit('GetLastSession', {
							msg: doc
						});
					});
					SessionService.getLastSession().then(_session=>{
						session = _session[0];
						SolarService.getAllBySession(session.sessionID).then(data=>{
							let chartData = [];
							data.forEach((el,i)=>{
								chartData.push({
									ligth: el.light,
									temp: el.temp,
									time: moment(el.time).format('hh:mm:ss'),
									bv: el.bv,
									bc: el.bc,
									index: i
								});
							});
							socket.emit('InitData', {
								data: chartData
							});
						});
					});
				})
				.catch(err=>err);
		});

		socket.on('GetSelectedSession', (data) => {
			SolarService.getAllBySession(data.msg).then(data=>{
				let chartData = [];
				data.forEach((el,i)=>{
					chartData.push({
						ligth: el.light,
						temp: el.temp,
						time: moment(el.time).format('hh:mm:ss'),
						bv: el.bv,
						bc: el.bc,
						index: i
					});
				});
				socket.emit('GetSelectedSession', {
					data: chartData
				});
			});
			SessionService.stopSession()
				.then(()=>{
					SessionService.getAllSessions().then(docs=>{
						io.emit('GetAllSessions', {
							msg: docs
						});
					});
					SessionService.getLastSession().then(doc=>{
						io.emit('GetLastSession', {
							msg: doc
						});
					});
					SessionService.getLastSession().then(_session=>{
						session = _session[0];
					});
				})
				.catch(err=>err);
		});

		socket.on('DeleteSessions', (data) => {
			SolarService.deleteSessions(data.msg)
				.then(()=>{
					SessionService.getAllSessions().then(docs=>{
						socket.emit('GetAllSessions', {
							msg: docs
						});
					});
					SessionService.getLastSession().then(_session=>{
						session = _session[0];
						socket.emit('GetLastSession', {
							msg: _session
						});
						SolarService.getAllBySession(session.sessionID).then(data=>{
							let chartData = [];
							data.forEach((el,i)=>{
								chartData.push({
									ligth: el.light,
									temp: el.temp,
									time: moment(el.time).format('hh:mm:ss'),
									bv: el.bv,
									bc: el.bc,
									index: i
								});
							});
							socket.emit('InitData', {
								data: chartData
							});
						});
					});
				})
				.catch(err=>err);
		});

		socket.on('UsersData', (data) => {
			UserService.login(data.user).then(user=>socket.emit('RecieveUsers', {
				user
			}));
		});
	});
}).catch(err=>err);

// Never sleep again :)
// setInterval(() => {
//   http.get('http://blooming-fortress-61113.herokuapp.com/');
// }, 300000);
