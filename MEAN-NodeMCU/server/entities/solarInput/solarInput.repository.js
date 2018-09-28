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
}

module.exports = new SolarRepository();