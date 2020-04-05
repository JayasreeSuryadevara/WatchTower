import React, { useEffect, useState } from "react";
import {currentNews} from '../util/CurrentNews';
import {companyNews} from '../util/CurrentNews';
import NewsDetailsItem from './NewsDetailsItem';

export default () => { 
  const [latestNews, setLatestNews] = useState([]);
  const [AllCompanyNews, setCompanyNews] = useState([]);

  async function fetchCurrentNews() {
    const news = await currentNews("apple")
      setLatestNews(news) 
  }

  async function fetchCompanyNews() {
    const news = await companyNews("tesla", "2020-04-02")
      setCompanyNews(news) 
  }

  useEffect(() => {
    fetchCurrentNews()
  }, [])

  useEffect(() => {
    fetchCompanyNews()
  }, [])

  console.log(latestNews)
  console.log(AllCompanyNews)

  return (
      <ul>
        {latestNews.map(article => (
          <li key={article.title}>
            <NewsDetailsItem title={article.title} description={article.description}
              author={article.author} url={article.url} urlToImage={article.urlToImage} 
              publishedAt={article.publishedAt}/>
          </li>
        ))}
      </ul>
  )
}