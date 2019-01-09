function dbConnectionHandler() {
	const mongoose = require('mongoose');
	const config = require('../config/index');
	// eslint-disable-next-line
	console.log(config.uri, config.opts);
	mongoose.connect(config.uri, config.opts);
  
	mongoose.set('debug', true);
  
	this.connection = mongoose.connection;
  
	mongoose.connection.on('connected', () => {
		this.state = 'connected';
	});
  
	mongoose.connection.on('error', () => {
		this.state = 'disconnected';
	});
  
	mongoose.connection.on('disconnected', () => {
		this.state = 'disconnected';
	});
	/*eslint-disable */
	process.on('SIGINT', () => {
		mongoose.connection.close(() => {
			this.state = 'disconnected';
			process.exit(0);
		});
	});
	/*eslint-enable */
}
  
module.exports = new dbConnectionHandler();

