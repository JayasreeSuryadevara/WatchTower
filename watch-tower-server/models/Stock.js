const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const StockSchema = new Schema({
  ticker: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  currentPrice: {
    type: Number,
    required: true
  },
  openingPrice: {
    type: Number,
    required: true
  },
  yield: {
    type: Number,
    required: true
  },
  dividend: {
    type: Number,
    required: true
  },
  totalShares: {
    type: Number,
    required: true
  },
  avgVolume: {
    type: Number,
    required: true
  }
});


module.exports = mongoose.model('Stock', StockSchema);