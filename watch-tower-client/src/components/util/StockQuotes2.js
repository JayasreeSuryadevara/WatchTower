// module.exports = function (stocks) {
//   const quotes = stocks.map(stock => {
//     const data = fetchData(stock);
//     return data
//   })
//   console.log("array of quotes", quotes);
//   return quotes;
// }

// const fetchData = (ticker) => {
//   const API_CALL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + ticker + "&apikey=" + process.env.REACT_APP_AV_API_KEY;
//   return fetch(API_CALL)
//     .then(
//       (res) => { return res.json(); },
//       err => { throw new Error(err); }
//     )
//     .then(
//       (data) => {
        
//         data.open = data["Global Quote"]["02. open"];
//         data.dayHigh = data["Global Quote"]["03. high"];
//         data.dayLow = data["Global Quote"]["04. low"];
//         data.currentPrice = data["Global Quote"]["05. price"];
//         data.volume = data["Global Quote"]["06. volume"];
//         data.changePercent = data["Global Quote"]["10. change percent"]
//         return data;
//       },
//       err => { throw new Error(err); }
//     )
//     .catch(
//       err => { throw new Error(err); }
//     );
// };
