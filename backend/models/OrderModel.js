const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrderSchema.js");

const OrderModel = new model("order", OrdersSchema);

module.exports = { OrderModel };