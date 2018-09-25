const UserSchema = require('./user.schema');

class UserRepository{
    constructor(){
        this.model = UserSchema;
    }

    getAll(){
        return this.model.find({});
    }

    login(name, password){
        return this.model.findOne({name,password}).select({_id:0});
    }
}

module.exports = new UserRepository();