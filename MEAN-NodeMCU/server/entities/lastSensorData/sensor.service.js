const SensorRepository = require('./sensor.repository');

class SensorService {
    
    constructor(){
        this.repository = SensorRepository;
    }

    getOne() {
        return this.repository.getOne();
    }

    update(obj){
        return this.repository.update(obj);
    }
}

module.exports = new SensorService();