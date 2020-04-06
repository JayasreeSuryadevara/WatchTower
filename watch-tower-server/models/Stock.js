const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const StockSchema = new Schema({
  ticker: {
    type: String,
    required: true
  },
  currentPrice: {
    type: Number,
    required: true
  },
  dividend: {
    type: Number,
    required: true
  },
  yield: {
    type: Number,
    required: true
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Company'
  },
  historicalData: {
    type: Schema.Types.ObjectId,
    ref: 'HistoricalData'
  }
});

// statics on a schema are functions that be called on the model itself (e.g. Book.borrowBooks(...))
StockSchema.statics.addStock = function (bookIds, loggedInUser) {
  const Book = this; // this is the Book model
  return (async () => {
    const books = [];
    const alreadyBookedBookIds = [];
    // for each book id, find the book
    // if the booked is not checked out, mark it as booked and add it to the user's list of books
    // if it is checked out, user cannot check it out
    for (let i = 0; i < bookIds.length; i++) {
      const bookId = bookIds[i];
      const book = await Book.findById(bookId);
      if (book.isBooked === false) {
        book.isBooked = true;
        loggedInUser.books.addToSet(bookId);
        books.push(await book.save());
      } else {
        alreadyBookedBookIds.push(bookId);
      }
    }
    await loggedInUser.save();
    const success = books.length === bookIds.length;
    const message = success
      ? 'books checked out successfully'
      : `the following books could not be checked out: ${alreadyBookedBookIds}`;
    return {
      success,
      message,
      books
    };
  })();
}

module.exports = mongoose.model('Stock', StockSchema);