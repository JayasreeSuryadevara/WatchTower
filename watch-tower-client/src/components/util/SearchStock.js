const stockApiKey = require('../../config/keys').StockApiKey;

export default async function (searchStr) {
  const API_CALL = "https://financialmodelingprep.com/api/v3/company/profile/" + searchStr + "?apikey=" + stockApiKey;
  console.log("searchStr" , searchStr);
  return await fetch(API_CALL)
    .then(
      (res) => { return res.json();},
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