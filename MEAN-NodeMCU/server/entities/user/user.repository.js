const User = require('./user.schema');

class UserRepository{
    constructor(){
        this.model = User;
    }

    getAll(){
        return this.model.find({});
    }

    login(name, password){
        return User.findOne({name,password}).select({_id:0});
    }
}

module.exports = new UserRepository();