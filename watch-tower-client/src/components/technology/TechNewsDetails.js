import React, { useEffect, useState } from "react";
import { currentNews } from '../util/CurrentNews';
import { technologyNews } from '../util/CurrentNews';
import TechNewsDetailsItem from './TechNewsDetailsItem';
import '../../styles/news/newsDetails.css';

export default () => {
  const [allTechnologyNews, setTechnologyNews] = useState([]);

  async function fetchTechnologyNews() {
    const news = await technologyNews()
    setTechnologyNews(news)
  }

  useEffect(() => {
    fetchTechnologyNews()
  }, [])

  const items = allTechnologyNews.slice(0, 19).map(article => {
    const date = article.publishedAt.slice(0, 10);
    const time = article.publishedAt.slice(11, 16);
    return (
      <TechNewsDetailsItem title={article.title} description={article.description}
        author={article.author} url={article.url} urlToImage={article.urlToImage}
        publishedAt={date} time={time} key={allTechnologyNews.indexOf(article)} />
    )
  })

  return (
    <div>
      <div className="">Technology News</div>
      <ul>
        {items}
      </ul>
    </div>
  )
}