const SensorSchema = require('./sensor.schema');

class SensorRepository{
	constructor(){
		this.model = SensorSchema;
	}

	getOne(){
		return this.model.findOne();
	}

	update(obj){
		return this.model.update({ _id: '5af489d1f36d28074502ec0a' }, { $set: obj});
	}
}

module.exports = new SensorRepository();