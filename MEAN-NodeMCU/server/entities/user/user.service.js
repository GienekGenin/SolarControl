const UserRepository = require('./user.repository');

class UserService {
    
	constructor(){
		this.repository = UserRepository;
	}

	getAll() {
		return this.repository.getAll();
	}

	login(obj){
		return this.repository.login(obj.name, obj.password);
	}
}

module.exports = new UserService();