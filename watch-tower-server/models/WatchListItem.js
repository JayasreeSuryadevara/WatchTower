const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Stock = mongoose.model('Stock')

const WatchListItemSchema = new Schema({
  stock: {
    type: Schema.Types.ObjectId,
    ref: 'Stock'
  },
  addPrice: {
    type: Number,
    required: true
  },
  noOfShares: {
    type: Number,
    required: true,
    default: 1
  }
});

WatchListItemSchema.statics.addWatchListItem = function (ticker, currentPrice, loggedInUser) {
  const WatchListItem = this;
  return (async () => {
    const foundStock = await Stock.findOne({ ticker: ticker});
    if (foundStock) {
      const stock = foundStock._id;
      const noOfShares = 1;
      const addPrice = currentPrice;
      const watchListItem = new WatchListItem({stock, addPrice, noOfShares});
      await watchListItem.save();
      loggedInUser.watchList.addToSet(watchListItem._id)
    } else {
      const newStock = await Stock.addStock(ticker)
      console.log(newStock)
      const stock = newStock._id;
      const noOfShares = 1;
      const addPrice = currentPrice;
      const watchListItem = new WatchListItem({stock, addPrice, noOfShares});
      await watchListItem.save();
      loggedInUser.watchList.addToSet(watchListItem._id)
    }
    await loggedInUser.save();
    return {
      success: true,
      message: "Successfullly added stock to watchlist.",
      watchListItem
    };
  })();
}

WatchListItemSchema.methods.removeWatchListItem = function (loggedInUser) {
  const watchListItem = this;
  return (async () => {
    console.log("loggedInUser", loggedInUser)
    if (loggedInUser && loggedInUser.watchList.includes(this._id)) {
      loggedInUser.watchList.remove(this._id);
      watchListItem.remove();
      await loggedInUser.save();
      return {
        success: true,
        message: "Successfully removed stock from watchlist.",
        watchListItem
      };
    } else {
      return {
        success: false,
        message: `Failed to remove stock with id:${this_id} from watchlist.`,
        watchListItem
      };
    }
  })();
}


module.exports = mongoose.model('WatchListItem', WatchListItemSchema);