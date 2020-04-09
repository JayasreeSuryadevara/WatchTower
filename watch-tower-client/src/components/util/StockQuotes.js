const fetch = require('node-fetch');

module.exports = function (stocks) {
  const quotes = stocks.map(stock => {
    const data = fetchData2(stock);
    return data
  })
  return quotes;
}


const fetchData2 = (ticker) => {

  const API_CALL = "/quote/"+ ticker + "/snapshot";
  console.log("API_CALL", API_CALL);
  return fetch(API_CALL)
    .then(
      (res) => { return res.json(); },
      err => { throw new Error(err); }
    )
    .then(
      (data) => {
        console.log(data);
        return data;
      }
    )
};