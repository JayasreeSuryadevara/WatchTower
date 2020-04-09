module.exports = async function (args) {
  const API_CALL = "https://www.alphavantage.co/query?function=SECTOR&apikey=" + process.env.REACT_APP_AV_API_KEY;
  return await etch(API_CALL)
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