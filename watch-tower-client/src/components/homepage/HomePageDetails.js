import React, { useEffect, useState } from "react";
import '../../styles/homePage/HomePage.css';
import { headlineNews } from '../util/CurrentNews';
import NewsDetailsItem from '../news/NewsDetailsItem';
import FirstNewsItem from '../news/FirstNewsItem';
import BulletListItem from '../news/BulletListItem';
import '../../styles/homePage/HomePageDetails.css';

export default () => {
  const [headlines, setHeadlineNews] = useState([]);

  async function fetchHeadlineNews() {
    const news = await headlineNews()
    setHeadlineNews(news)
  }

  useEffect(() => {
    fetchHeadlineNews()
  }, [])

  const items = headlines.map((article, idx) => {
    const date = article.publishedAt.slice(0, 10);
    const time = article.publishedAt.slice(11, 16);

    if (idx === 0) {
      return (
        <FirstNewsItem title={article.title} description={article.description}
          author={article.author} url={article.url} urlToImage={article.urlToImage}
          publishedAt={date} time={time} key={headlines.indexOf(article)} />
      )
    } else if(idx > 0 && idx < 7) {
      return (
        <BulletListItem title={article.title} description={article.description}
          author={article.author} url={article.url} urlToImage={article.urlToImage}
          publishedAt={date} time={time} key={headlines.indexOf(article)} />
      )
    } else {
      return (
        <NewsDetailsItem title={article.title} description={article.description}
          author={article.author} url={article.url} urlToImage={article.urlToImage}
          publishedAt={date} time={time} key={headlines.indexOf(article)} />
      )
    }
  })

  return(
    <div className="main-page-container">
      <div className="main-page">
        <div className="graph-header-container">
          <div className="graph-header-items">
            <div className="graph-header-item">US</div>
            <div className="graph-header-item">Euro</div>
            <div className="graph-header-item">Asia</div>
            <div className="graph-header-item">FX</div>
            <div className="graph-header-item">Rates</div>
            <div className="graph-header-item">Futures</div>
            <div className="graph-header-item">Crypto</div>
          </div>
          <div className="movers-latest-items">
            <p className="movers-latest-item">S&P 500 Movers</p>
            <p className="movers-latest-item">Latest News</p>
          </div>
        </div>
        <div className="graph-container">
          <div className="graph">
            <p>graph</p>
          </div>
        </div>
        <div className="latest-news-container">
          <div className="latest-news-items">
            <p>Latest News</p>
            <p>Coronavirus</p>
            <p>New York</p>
            <p>Gold</p>
            <p>S&P 500 Futures</p>
            <p>AAPL</p>
            <p>BA</p>
            <p>CCL</p>
            <p>DIS</p>
            <p>TSLA</p>
            <p>ZM</p>
          </div>
        </div>
        <ul>
          {items}
        </ul>
      </div>
    </div>
  )
}