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
}

module.exports = new SolarRepository();