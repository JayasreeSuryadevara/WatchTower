module.exports = async function (stocks) {
  // The stocks should come in as a string of tickers seperated by a comma
  // ex: "AAPL,FB,MSFT,MMM,C";
  const API_CALL = "https://financialmodelingprep.com/api/v3/quote/" + stocks;

  // Convert the str to an array of tickers in the front end
  // const stockArr = stocks.split(",");

  return await fetch(API_CALL)
    .then(
      (res) => { return res.json(); },
      err => { throw new Error(err); }
    )
    .then(
      (data) => {
        if (data) {
          console.log("data", data)
          // Read into the data to get all the fields you need using the index
          // const quotes = stockArr.map((ticker,i) => {
          //   console.log("symbol", data[i]["symbol"])
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