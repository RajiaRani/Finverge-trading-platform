const { model } = require("mongoose");

const { OrderSchema } = require("../schemas/OrderSchema.js");

const OrderModel = new model("order", OrderSchema);

module.exports = { OrderModel };