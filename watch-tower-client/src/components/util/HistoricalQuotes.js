export async function quarterHourHistory(symbol) {
  const API_CALL = "https://financialmodelingprep.com/api/v3/historical-chart/15min/" + symbol;

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

export async function halfHourHistory(symbol) {
  const API_CALL = "https://financialmodelingprep.com/api/v3/historical-chart/30min/" + symbol;

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

export async function hourlyHistory(symbol) {
  const API_CALL = "https://financialmodelingprep.com/api/v3/historical-chart/1hour/" + symbol

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

export async function dayHistory(symbol) {
  const API_CALL = "https://financialmodelingprep.com/api/v3/historical-price-full/index/" + symbol

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


