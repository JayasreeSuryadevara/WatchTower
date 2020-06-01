const axios = require("axios"); 
const newsKey = require('../../config/keys').NewsApiKey;
const proxyurl = "https://cors-anywhere.herokuapp.com:443/";

export function currentNews() {
  const url = `https://newsapi.org/v2/everything?q="stock market"&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,businessinsider.com&pageSize=50&sortBy=publishedAt&apiKey=${newsKey}`
  return (
    axios.get(proxyurl + url).then(res => res.data.articles)
  )
}

export function headlineNews() {
  const url = `https://newsapi.org/v2/everything?q="headline"&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,businessinsider.com&pageSize=50&sortBy=publishedAt&apiKey=${newsKey}`
  return (
    axios.get(proxyurl + url).then(res => res.data.articles)
  )
}

export function companyNews(company) {
  const url = `https://newsapi.org/v2/everything?q=${company}&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,businessinsider.com&qInTitle=${company}&pageSize=15&sortBy=publishedAt&apiKey=${newsKey}`
  return (
    axios.get(proxyurl + url).then(res => res.data.articles)
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
