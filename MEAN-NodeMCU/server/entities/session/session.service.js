const SessionRepository = require('./session.repository');
const async = require('async');

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

    switchSession(){
        return new Promise((resolve, reject) => {
            async.waterfall(
                [
                    callback=>{
                        this.repository.getLastSession()
                        .then(data=>callback(null, data[0].sessionID))
                        .catch(err=>callback(err, null));
                    },
                    (id, callback)=>{
                        this.repository.stopSession()
                            .then(()=>callback(null, id))
                            .catch(err=>callback(err, null));
                    },
                    (id, callback)=>{
                        this.repository.startSession({
                            sessionStatus: true,
                            sessionID: id + 1
                        })
                        .then(data=>callback(null, data))
                        .catch(err=>callback(err, null));
                    }
                ],
                (payload, err)=>{
                    if(err){
                        reject(err);
                    }
                    resolve(payload);
            })
        });
    }
}

module.exports = new SessionService();