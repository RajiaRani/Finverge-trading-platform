const {model } = require ("mongoose");

const {PositionSchema} = require("../schemas/PositionSchema.js");

const PositionModel = new model("postion", PositionSchema);
model.exports = {PositionModel};
