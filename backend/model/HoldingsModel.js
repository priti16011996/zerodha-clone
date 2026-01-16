const {model} = require('mongoose');
const HoldingsSchema = require('../schemas/PositionsSchema');

const HoldingsModel = model("Holdings", HoldingsSchema);

module.exports = HoldingsModel;