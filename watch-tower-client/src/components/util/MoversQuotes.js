export async function dayActives () {
  // Returns 10 most active stocks for the day
  const API_CALL = "https://financialmodelingprep.com//api/v3/stock/actives"

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

export async function dayGainers() {
  // Returns 10 highest gainer stocks for the day
  const API_CALL = "https://financialmodelingprep.com//api/v3/stock/gainers"

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

export async function dayLoosers() {
  // Returns 10 highest loosing stocks for the day
  const API_CALL = "https://financialmodelingprep.com//api/v3/stock/losers"

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