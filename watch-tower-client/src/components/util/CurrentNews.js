const axios = require("axios"); 
const newsKey = require('../../config/keys').NewsApiKey;

export function currentNews(company) {
  const url = `https://newsapi.org/v2/top-headlines?q=${company}&language=en&apiKey=${newsKey}`
  return (
    axios.get(url).then(res => res.data.articles)
  )
}

export function companyNews(company, startDate) {
  const url = `https://newsapi.org/v2/everything?q=${company}&from=${startDate}&sortBy=relevancy&language=en&apiKey=${newsKey}`
  return (
    axios.get(url).then(res => res.data.articles)
  )
}
