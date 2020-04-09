const mongoose = require('mongoose');
const HistoricalData = mongoose.model("HistoricalData");
const fetchStockData = require("./fetch-stock-resolver");

module.exports = async function (stocks) {
  // Get all stock tickers from the db
  // do a fetch for each to update histotical data
  // 5 calls for min using AV so set a wait after 5 calls
  console.log("Starting 5-req/m db historical data update");
  console.log("stocks",stocks);
  const createdData = await stocks.map((stock, i) => {
      console.log("stock :", stock.ticker);
      const data = fetchStockData(stock.ticker);
      console.log("hist data ", data);
      const historicalData = HistoricalData.findOne({ stockId: stock._id })
      if (historicalData){
        historicalData.updateHistoricalData({
          open: data.open,
          dayHigh: data.dayHigh,
          dayLow: data.dayLow,
          currentPrice: data.currentPrice,
          volume: data.volume,
          changePercent: data.changePercent
        });
      } else {
        HistoricalData.addHistoricalData({
          open: data.open,
          dayHigh: data.dayHigh,
          dayLow: data.dayLow,
          currentPrice: data.currentPrice,
          volume: data.volume,
          changePercent: data.changePercent,
          stockId: stock._id
        });
      }
      if ((i + 1) % 5 === 0) {
        setTimeout(() => {
          console.log("waiting...");
        }, 60000);
      }
      return historicalData;
  });
  console.log("createdData", createdData);
  return {
    success: true,
    message: "Updated DB",
    createdData
  }
}
