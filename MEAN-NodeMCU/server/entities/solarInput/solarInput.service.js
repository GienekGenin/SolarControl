const SolarRepository = require('./solarInput.repository');

class SolarService {
    
    constructor(){
        this.repository = SolarRepository;
    }

    getOne() {
        return this.repository.getOne();
    }

    save(obj){
        return this.repository.save(obj);
    }
}

module.exports = new SolarService();