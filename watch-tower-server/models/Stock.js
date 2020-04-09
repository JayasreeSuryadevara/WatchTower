const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

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
    return stock;
  } else {
    return null;
  }
}

module.exports = mongoose.model('Stock', StockSchema);