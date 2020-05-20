const stockApiKey = require('../../config/keys').StockApiKey;

export default async function () {
  // Returns all market indexes
  const API_CALL = "https://financialmodelingprep.com/api/v3/majors-indexes?apikey=" + stockApiKey;

  //  Top five indexs to read into
  //   "ticker": ".DJI",
  //   "indexName": "Dow Jones"
  //   "ticker": ".IXIC",
  //   "indexName": "Nasdaq"
  //   "ticker": ".INX",
  //   "indexName": "S&P 500"
  //   "ticker": "%5EPSE",
  //   "indexName": "NYSE Arca Technology 100 Index"
  //   "ticker": "%5EXAU",
  //   "indexName": "PHLX Gold/Silver Index"

  // data format for each index comes back in an array
  // "majorIndexesList": [
  //   {
  //     "ticker": ".DJI",
  //     "changes": 28.7089,
  //     "price": 23719.4,
  //     "indexName": "Dow Jones"
  //   }
  // ]


  return await fetch(API_CALL)
    .then(
      (res) => { return res.json(); },
      err => { throw new Error(err); }
    )
    .then(
      (data) => {
        if (data) {
          return data;
        } else {
          return null
        }
      },
      err => { throw new Error(err); }
    )
    .catch(
      err => { throw new Error(err); }
    );
};