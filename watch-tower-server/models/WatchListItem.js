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

WatchListItemSchema.statics.addWatchListItem = function (ticker, loggedInUser) {
  const WatchListItem = this;
  const tickerUpCase = ticker.toUpperCase();
  return (async () => {
    const stock = await Stock.find({ticker: tickerUpcase});
    if (stock) {
      const stockId = stock._id;
      const noOfShares = 1;
      //need work over here to get addPrice
      //.......or we don't worry about the addPrice....
      const watchListItem = new WatchListItem({stockId, addPrice, noOfShares});
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
// WatchListItemSchema.statics.addWatchListItem = function (stockId, addPrice, noOfShares, loggedInUser) {
//   const WatchListItem = this;
//   return (async () => {
//     const stock = await Stock.findById(stockId);
//     if (stock) {
//       const watchListItem = new WatchListItem({stockId, addPrice, noOfShares});
//       await watchListItem.save();
//       loggedInUser.watchList.addToSet(watchListItem._id)
//     }
//     await loggedInUser.save();
//     return {
//       success: true,
//       message: "Successfullly added stock to watchlist.",
//       watchListItem
//     };
//   })();
// }

WatchListItemSchema.methods.removeWatchListItem = function (loggedInUser) {
  const watchListItem = this;
  return (async () => {
    if (loggedInUser && loggedInUser.watchList.includes(this._id)) {
      loggedInUser.watchList.remove(this._id);
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