const mongoose = require("mongoose");

const session = mongoose.Schema({
    sessionStatus: Boolean,
    sessionID: Number
},{ versionKey: false });

const Session = mongoose.model("sessionStatuses", session);

module.exports = Session;