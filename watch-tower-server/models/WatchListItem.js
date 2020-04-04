const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Stock = mongoose.model('Stock')

const WatchListItemSchema = new Schema({
  stock: {
    type: Schema.Types.ObjectId,
    ref: 'Stock'
  },
  addDate: {
    type: Date,
    required: true
  },
  addPrice: {
    type: Number,
    required: true
  },
  noOfShares: {
    type: Number,
    required: true
  }
});

WatchListItemSchema.statics.addWatchlistItem = function (stockId, addDate, addPrice, noOfShares, loggedInUser) {
  const WatchListItem = this; //the model
  return (async () => {
    const stock = await Stock.findById(stockId);
    if (stock) {
      const watchlistItem = new WatchListItem(stockId, addDate, addPrice, noOfShares);
      await watchlistItem.save();
      loggedInUser.watchList.addToSet(watchlistItem._id)
    }
    return {
      success: true,
      message: "Successfullly added stock to watchlist.",
      watchList
    };
  })();
}

WatchListItemSchema.methods.removeWatchListItem = function (loggedInUser) {
  const watchListItem = this; //the document
  return (async () => {
    if (loggedInUser && loggedInUser.watchList.includes(this._id)) {
      loggedInUser.watchList.remove(this._id);
      await loggedInUser.save();
      return {
        success: true,
        message: "Successfully removed stock from watchlist.",
        watchList: [watchListItem]
      };
    } else {
      return {
        success: false,
        message: `Failed to remove stock with id:${this_id} from watchlist.`,
        watchList: null
      };
    }
  })();
}


module.exports = mongoose.model('WatchListItem', WatchListItemSchema);