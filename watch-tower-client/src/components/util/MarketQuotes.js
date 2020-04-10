module.exports = async function () {
  // Returns all market indexes
  const API_CALL = "https://financialmodelingprep.com/api/v3/majors-indexes"

  //  Top five indexs to read into
  //   "ticker": ".DJI",
  //   "indexName": "Dow Jones"
  //   "ticker": ".IXIC",
  //   "indexName": "Nasdaq"
  //   "ticker": ".INX",
  //   "indexName": "S&P 500"
  //   "ticker": "%5EFCHI",
  //   "indexName": "CAC 40"
  //   "ticker": "%5ERUI",
  //   "indexName": "Russell 1000 Index"

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
          console.log("data", data)
          // Read into the data using array format
            // console.log("index", data[i]["symbol"])
          //   if (data[i]["symbol"] === ticker) {
          //   console.log("open", data[i]["open"])
          //   console.log("dayHigh", data[i]["dayHigh"])
          //   console.log("dayLow", data[i]["dayLow"])
          //   console.log("price", data[i]["price"])
          //   console.log("volume", data[i]["volume"])
          //   console.log("changesPercentage", data[i]["changesPercentage"])
          //     return ticker;
          //   }
          // })
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