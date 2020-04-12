import React, { useEffect, useState } from "react";
import {currentNews} from '../util/CurrentNews';
import {technologyNews} from '../util/CurrentNews';
import NewsDetailsItem from './NewsDetailsItem';
import '../../styles/news/NewsDetails.css';

export default () => { 
  const [latestNews, setLatestNews] = useState([]);
  const [allCompanyNews, setCompanyNews] = useState([]);
  const [allTechnologyNews, setTechnologyNews] = useState([]);

  async function fetchCurrentNews() {
    const news = await currentNews()
      setLatestNews(news) 
  }

  async function fetchTechnologyNews() {
    const news = await technologyNews()
      setTechnologyNews(news) 
  }

  useEffect(() => {
    fetchCurrentNews()
  }, [])

  useEffect(() => {
    fetchTechnologyNews()
  }, [])

  const items = latestNews.map(article => {
    const date = article.publishedAt.slice(0, 10);
    const time = article.publishedAt.slice(11, 16);

    return (
      <NewsDetailsItem title={article.title} description={article.description}
      author={article.author} url={article.url} urlToImage={article.urlToImage}
      publishedAt={date} time={time} key={latestNews.indexOf(article)} />
    )
  })

  return (
    <div>
      <div className="latest-news-title">Latest News</div>
      <ul>
        {items}
      </ul>
    </div>
  )
}