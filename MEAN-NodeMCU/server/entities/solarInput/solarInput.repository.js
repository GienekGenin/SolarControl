const SolarSchema = require('./solarInput.schema');

class SolarRepository{
	constructor(){
		this.model = SolarSchema;
	}

	getOne(){
		return this.model.findOne();
	}

	save(obj){
		return this.model.create(obj);
	}

	getAllBySession(sessionID){
		return this.model.find({sessionID}).sort({time: 1});
	}

	deleteSessionData(sessionIDs){
		return this.model.deleteMany({sessionID: {$in: sessionIDs}});
	}
}

module.exports = new SolarRepository();