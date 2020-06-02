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
      url: url,
      baseURL: development ? `http://127.0.0.1:${port}` : `https://watch-tower-1.herokuapp.com/`
    }).then(res => res.data.articles)
  )
}

export async function headlineNews() {
  const url = `/headlinenews`
  return (
    axios({
      method: 'GET',
      url: url,
      baseURL: development ? `http://127.0.0.1:${port}` : `https://watch-tower-1.herokuapp.com/`
    }).then(res => res.data.articles)
  )
}

export function companyNews(company) {
  const url = `companynews`
  return (
    axios({
      method: 'GET',
      params: {q: company},
      url: url,
      baseURL: development ? `http://127.0.0.1:${port}` : `https://watch-tower-1.herokuapp.com/`
    }).then(res => res.data.articles)
  )
}

export function technologyNews() {
  const url = `https://newsapi.org/v2/everything?q="technology stocks"&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,fool.com,seekingalpha.com,businessinsider.com,cnn.com&pageSize=50&sortBy=publishedAt&apiKey=${newsKey}`
  return (
    axios.get(proxyurl + url).then(res => res.data.articles)
  )
}

export function principlesInvestingNews() {
  const url = `https://newsapi.org/v2/everything?q="investing principles"&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,fool.com,seekingalpha.com,businessinsider.com,cnn.com&pageSize=50&sortBy=publishedAt&apiKey=${newsKey}`
  return (
    axios.get(proxyurl + url).then(res => res.data.articles)
  )
}
