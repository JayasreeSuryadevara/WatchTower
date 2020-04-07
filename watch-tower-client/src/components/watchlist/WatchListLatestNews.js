import React, { useEffect, useState } from "react";
import { currentNews } from '../util/CurrentNews';
import WatchNewsItem from './WatchNewsItem';

export default () => {
  const [latestNews, setLatestNews] = useState([]);

  async function fetchCurrentNews() {
    const news = await currentNews()
    setLatestNews(news)
  }

  useEffect(() => {
    fetchCurrentNews()
  }, [])


  return (
    <ul>
      {latestNews.slice(0, 10).map(article => (
        <li key={latestNews.indexOf(article)} className="watch-list-news-list">
          <WatchNewsItem title={article.title} description={article.description}
            author={article.author} url={article.url} urlToImage={article.urlToImage}
            publishedAt={article.publishedAt} />
        </li>
      ))}
    </ul>
  )
}