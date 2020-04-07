import React, { useEffect, useState } from "react";
import {currentNews} from '../util/CurrentNews';
import {companyNews} from '../util/CurrentNews';
import {technologyNews} from '../util/CurrentNews';
import NewsDetailsItem from './NewsDetailsItem';

export default () => { 
  const [latestNews, setLatestNews] = useState([]);
  const [allCompanyNews, setCompanyNews] = useState([]);
  const [allTechnologyNews, setTechnologyNews] = useState([]);

  async function fetchCurrentNews() {
    const news = await currentNews()
      setLatestNews(news) 
  }

  async function fetchCompanyNews() {
    const news = await companyNews("tesla")
      setCompanyNews(news) 
  }

  async function fetchTechnologyNews() {
    const news = await technologyNews()
      setTechnologyNews(news) 
  }

  useEffect(() => {
    fetchCurrentNews()
  }, [])

  useEffect(() => {
    fetchCompanyNews()
  }, [])

  useEffect(() => {
    fetchTechnologyNews()
  }, [])

  return (
      <ul>
        {latestNews.map(article => (
          <li key={latestNews.indexOf(article)}>
            <NewsDetailsItem title={article.title} description={article.description}
              author={article.author} url={article.url} urlToImage={article.urlToImage} 
              publishedAt={article.publishedAt}/>
          </li>
        ))}
      </ul>
  )
}