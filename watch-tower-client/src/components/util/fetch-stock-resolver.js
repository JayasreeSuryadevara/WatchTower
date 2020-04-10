const fetch = require('node-fetch');

module.exports = function (args) {
  const API_CALL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + args + "&apikey=" + process.env.REACT_APP_AV_API_KEY;
  // console.log(API_CALL);
  return fetch(API_CALL)
    .then(
      (res) => { return res.json(); },
      err => { throw new Error(err); }
    )
    .then(
      (data) => {
        if (data){
          // console.log("data", data);
          data.open = data["Global Quote"]["02. open"];
          data.dayHigh = data["Global Quote"]["03. high"];
          data.dayLow = data["Global Quote"]["04. low"];
          data.currentPrice = data["Global Quote"]["05. price"];
          data.volume = data["Global Quote"]["06. volume"];
          data.changePercent = data["Global Quote"]["10. change percent"]
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
