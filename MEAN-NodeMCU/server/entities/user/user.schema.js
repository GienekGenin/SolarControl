const mongoose = require("mongoose");

const users = mongoose.Schema({
    name: String,
    password: String
},{ versionKey: false });

const User = mongoose.model("users", users);

module.exports = User;