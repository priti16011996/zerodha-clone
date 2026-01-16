const {Schema} = require("mongoose");

const OrderSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
})

module.exports = HoldingsSchema;