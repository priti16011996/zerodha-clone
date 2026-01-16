const {model} = require('mongoose');
const PositionsSchema = require('../schemas/HoldingsSchema');

const PositionsModel = model("Positions", PositionsSchema);

module.exports = PositionsModel;