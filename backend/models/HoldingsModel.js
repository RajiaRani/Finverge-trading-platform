const {model} = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingSchema.js");

const HoldingsModel = new model("holiding", HoldingsSchema);

model.exports = {HoldingsModel};