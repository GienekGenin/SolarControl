const SessionSchema = require('./session.schema');

class SessionRepository{
	constructor(){
		this.model = SessionSchema;
	}

	updateSession(obj){
		return this.model.update({ _id: '5bae0835fb6fc01d131c0de9' }, { $set: obj});
	}

	getAllSessions(){
		return this.model.find({}).select({_id: 0});
	}

	getLastSession(){
		return this.model.find().sort({sessionID: -1}).select({_id: 0}).limit(1);
	}

	stopSession() {
		return this.model.findOneAndUpdate({sessionStatus: true}, {$set: {sessionStatus: false}});
	}

	startSession(obj){
		return this.model.create(obj);
	}

	deleteSessions(sessionIDs){
		return this.model.deleteMany({sessionID: {$in: sessionIDs}});
	}
}

module.exports = new SessionRepository();