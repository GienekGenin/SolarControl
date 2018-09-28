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
    
    getAllBySession(sessionId){
        return this.repository.getAllBySession(sessionId);
    }
}

module.exports = new SolarService();