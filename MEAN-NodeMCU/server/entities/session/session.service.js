const SessionRepository = require('./session.repository');

class SessionService {
    
    constructor(){
        this.repository = SessionRepository;
    }

    getSesssion() {
        return this.repository.getSesssion();
    }

    updateSession(obj){
        return this.repository.updateSession(obj);
    }

    getAllSessions(){
        return this.repository.getAllSessions();
    }

    getLastSession(){
        return this.repository.getLastSession();
    }
}

module.exports = new SessionService();