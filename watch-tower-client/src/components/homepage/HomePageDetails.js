import React, { useEffect, useState } from "react";
import '../../styles/homePage/HomePage.css';
import { currentNews } from '../util/CurrentNews';
import NewsDetailsItem from '../news/NewsDetailsItem';

export default () => {
  const [latestNews, setLatestNews] = useState([]);

  async function fetchCurrentNews() {
    const news = await currentNews()
    setLatestNews(news)
  }

  useEffect(() => {
    fetchCurrentNews()
  }, [])

  return(
    <div className="main-page">
      <div className="newsContainer">
        <ul>
          {latestNews.map(article => (
            <li key={latestNews.indexOf(article)}>
              <NewsDetailsItem title={article.title} description={article.description}
                author={article.author} url={article.url} urlToImage={article.urlToImage}
                publishedAt={article.publishedAt} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}