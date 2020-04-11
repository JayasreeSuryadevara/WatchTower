export default async function () {
  // Returns S&P 500 market historical with 1min interval
  const API_CALL = "https://financialmodelingprep.com/api/v3/historical-chart/1min/%5EGSPC"
  
  // data  comes back in an array
  // "majorIndexesList": [
  // {
  //    "date": "2020-04-10 16:00:00",
  //    "open": 2789.82,
  //    "low": 2789.82,
  //    "high": 2789.82,
  //    "close": 2789.82,
  //    "volume": 64335301
  //  },
  // ]


  return await fetch(API_CALL)
    .then(
      (res) => { return res.json(); },
      err => { throw new Error(err); }
    )
    .then(
      (data) => {
        if (data) {
          console.log("historical data", data)
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