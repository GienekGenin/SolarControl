const mongoose = require("mongoose");

const solarInpurt = mongoose.Schema({
    light: Array,
    temp: Array,
    bv: String,
    bc: String,
    sessionID: Number,
    time: Date
},{ versionKey: false });

const SolarInpurt = mongoose.model("solarinpurts", solarInpurt);

module.exports = SolarInpurt;
