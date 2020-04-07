const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;
const { fetchStockData } = require('../schema/fetch-stock-resolver');

const StockSchema = new Schema({
  ticker: {
    type: String,
    required: true
  }
});

StockSchema.statics.addStock = async function (ticker) {
  const Stock = this; 
  const stock = await Stock.create({ ticker: ticker });
  if(stock.save()){
    const data = fetchStockData(ticker);
    stock.open = data.open;
    stock.dayHigh = data.dayHigh;
    stock.dayLow = data.dayLow;
    stock.currentPrice = data.currentPrice;
    stock.volume = data.volume;
    stock.changePercent = data.changePercent;
    stock.fetchSuccess = true;
    return stock;
  } else {
    return null;
  }
}

module.exports = mongoose.model('Stock', StockSchema);