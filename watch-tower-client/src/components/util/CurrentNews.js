const axios = require("axios"); 
const newsKey = require('../../config/keys').NewsApiKey;
const proxyurl = "https://cors-anywhere.herokuapp.com:443/";
const port = process.env.PORT || 5000;
let development = process.env.NODE_ENV !== 'production'

export function currentNews() {
  const url = `/currentnews`
  return (
    axios({
      method: 'GET',
      url: url
      // baseURL: development ? `http://127.0.0.1:${port}` : process.env.BASEURL
    }).then(res => res.data.articles)
  )
}

// export function headlineNews() {
//   const url = `https://newsapi.org/v2/everything?q="headline"&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,businessinsider.com&pageSize=50&sortBy=publishedAt&apiKey=${newsKey}`
//   return (
//     axios.get(url).then(res => res.data.articles)
//   )
// }

export function headlineNews() {
  const url = `/api/headlinenews`
  return (
    axios({
      method: 'GET',
      url: url
      // baseURL: development ? `http://127.0.0.1:${port}` : null
    }).then(res => res.data.articles)
    .catch(err => console.log("--->",err))
  )
}

export function companyNews(company) {
  const url = `/companynews`
  return (
    axios({
      method: 'GET',
      params: {q: company},
      url: url
      // baseURL: development ? `http://127.0.0.1:${port}` : process.env.BASEURL
    }).then(res => res.data.articles)
  )
}

export function technologyNews() {
  const url = `/technologynews`
  return (
    axios({
      method: 'GET',
      url: url
      // baseURL: development ? `http://127.0.0.1:${port}` : process.env.BASEURL
    }).then(res => res.data.articles)
  )
}

export function principlesInvestingNews() {
  const url = `/principlesofinvesting`
  return (
    axios({
      method: 'GET',
      url: url
      // baseURL: development ? `http://127.0.0.1:${port}` : process.env.BASEURL
    }).then(res => res.data.articles)
  )
}
