const async = require('async');
const SolarRepository = require('./solarInput.repository');
const SessionRepository = require('../session/session.repository');

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

	deleteSessions(sessionIDs){
		return new Promise((resolve, reject) => {
			async.waterfall(
				[
					callback=>{
						this.repository.deleteSessionData(sessionIDs)
							.then(()=>callback(null))
							.catch(err=>callback(err));
					},
					callback=>{
						SessionRepository.deleteSessions(sessionIDs)
							.then(()=>callback(null))
							.catch(err=>callback(err));
					}
				],
				(payload,err)=>{
					if(err){
						reject(err);
					}
					resolve(payload);
				}
			);
		});
	}
}

module.exports = new SolarService();