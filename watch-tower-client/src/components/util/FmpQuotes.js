module.exports = async function () {
  const stocks = "AAPL,FB,MSFT,MMM,C"
  const API_CALL = "https://financialmodelingprep.com/api/v3/quote/" + stocks
  // const API_CALL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + args.ticker + "&apikey=" + process.env.REACT_APP_AV_API_KEY;
  return await fetch(API_CALL)
    .then(
      (res) => { return res.json(); },
      err => { throw new Error(err); }
    )
    .then(
      (data) => {
        if (data) {
          console.log("data", data);
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