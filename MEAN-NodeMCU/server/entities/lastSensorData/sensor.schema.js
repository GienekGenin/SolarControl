const mongoose = require("mongoose");

const sensors = mongoose.Schema({
    light: Array,
    temp: Array,
    bv: String,
    bc: String
},{ versionKey: false });

const Sensors = mongoose.model("sensors", sensors);

module.exports = Sensors;
