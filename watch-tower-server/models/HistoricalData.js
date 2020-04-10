const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistoricalDataSchema = new Schema({
  open: {
    type: Number,
    required: true
  },
  dayHigh: {
    type: Number,
    required: true
  },
  dayLow: {
    type: Number,
    required: true
  },
  currentPrice: {
    type: Number,
    required: true
  },
  volume: {
    type: Number,
    required: true
  },
  changePercent: {
    type: String,
    required: true
  },
  stockId: {
    type: Schema.Types.ObjectId,
    ref: 'Stock'
  }
});

HistoricalDataSchema.statics.addHistoricalData = async function (open, dayHigh, dayLow, currentPrice, volume, changePercent, stockId) {
  const HistoricalData = this;
  const historicalData = await HistoricalData.create({
    open: open,
    dayHigh: dayHigh,
    dayLow: dayLow,
    currentPrice: currentPrice,
    volume: volume,
    changePercent: changePercent,
    stockId: stockId
  });
  if ( historicalData.save() ) {
    return {
      success: true,
      message: "Historical Data Saved Successfuly",
      historicalData
    }
  } else {
    return {
      success: false,
      message: "Could not save the data",
      historicalData
    }
  }
}

HistoricalDataSchema.statics.updateHistoricalData = async function (open, dayHigh, dayLow, currentPrice, volume, changePercent, stockId) {
  const historicalData = HistoricalData.find({ stockId: stockId });
  historicalData.open = open;
  historicalData.dayHigh = dayHigh;
  historicalData.dayLow = dayLow;
  historicalData.currentPrice = currentPrice;
  historicalData.volume = volume;
  historicalData.changePercent = changePercent;
  if (historicalData.save()) {
    return {
      success: true,
      message: "Historical Data updated Successfuly",
      historicalData
    }
  } else {
    return {
      success: false,
      message: "Could not update historical data",
      historicalData
    }
  }
}

module.exports = mongoose.model('HistoricalData', HistoricalDataSchema);