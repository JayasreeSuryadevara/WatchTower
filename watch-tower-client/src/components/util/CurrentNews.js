const axios = require("axios"); 
const newsKey = require('../../config/keys').NewsApiKey;

export function currentNews() {
  const url = `/everything?q="stock market"&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,businessinsider.com&pageSize=50&sortBy=publishedAt&apiKey=${newsKey}`
  return (
    axios.get(url).then(res => res.data.articles)
  )
}

export function headlineNews() {
  const url = `/everything?q="headline"&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,businessinsider.com&pageSize=50&sortBy=publishedAt&apiKey=${newsKey}`
  return (
    axios.get(url).then(res => res.data.articles)
  )
}

export function companyNews(company) {
  const url = `/everything?q=${company}&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,businessinsider.com&qInTitle=${company}&pageSize=15&sortBy=publishedAt&apiKey=${newsKey}`
  return (
    axios.get(url).then(res => res.data.articles)
  )
}

export function technologyNews() {
  const url = `/everything?q="technology stocks"&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,fool.com,seekingalpha.com,businessinsider.com,cnn.com&pageSize=50&sortBy=publishedAt&apiKey=${newsKey}`
  return (
    axios.get(url).then(res => res.data.articles)
  )
}

export function principlesInvestingNews() {
  const url = `/everything?q="investing principles"&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,fool.com,seekingalpha.com,businessinsider.com,cnn.com&pageSize=50&sortBy=publishedAt&apiKey=${newsKey}`
  return (
    axios.get(url).then(res => res.data.articles)
  )
}
