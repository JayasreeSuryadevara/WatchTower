import React, { useEffect, useState } from "react";
import { headlineNews } from '../util/CurrentNews';
import LatestDetailsItem from './LatestDetailsItem';
import { Link } from 'react-router-dom';
import '../../styles/news/NewsDetails.css';
import { dayGainers } from '../util/MoversQuotes';

export default () => {
  const [allHeadlineNews, setHeadlineNews] = useState([]);
  const [stockData, setStockData] = useState([]);

  async function fetchHeadlineNews() {
    const news = await headlineNews()
    setHeadlineNews(news)
  }

  useEffect(() => {
    fetchHeadlineNews()
  }, [])

  useEffect(() => {
    async function fetchData() {
      const response = await dayGainers()
      setStockData(response.mostGainerStock.slice(0, 5))
    }
    fetchData()
  }, []);

  const items = allHeadlineNews.map(article => {
    const date = article.publishedAt.slice(0, 10);
    const time = article.publishedAt.slice(11, 16);
    return (
      <LatestDetailsItem title={article.title} description={article.description}
        author={article.author} url={article.url} urlToImage={article.urlToImage}
        publishedAt={date} time={time} key={allHeadlineNews.indexOf(article)} />
    )
  })

  const formatter = new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD'
  });

  return (
    <div>
      <div className="tech-news-page-title">Latest Headlines</div>
      <div className="tech-news-page-home">
        <Link to="/" className="tech-news-page-home-link">Home ></Link> Latest
      </div>
      <div className="tech-news-stock-info-panel">
        <h2 className="most-active-today-title">Today's top gainers</h2>
        <ul className="tech-news-stock-list">
          {stockData.map((stock, i) => {
            const ticker = stock.ticker;
            const price = stock.price;
            return <div key={i}>
              <Link to={`/ticker/${stock.companyName}`} className="tech-news-stock">
                <p className="tech-news-stock-ticker">{ticker}</p>
                <p>{formatter.format(price)}</p>
                {stock.changes > 0
                  ? <p><i className="fas fa-caret-up fa-2x"></i></p>
                  : <p><i className="fas fa-caret-down fa-2x"></i></p>
                }
              </Link>
            </div>
          })}
        </ul>
      </div>
      <div className="tech-news-newsviewer">
        <div className="newsviewer-header">
          <h2>LATEST HEADLINES</h2>
          <div className="principles-bar">  </div>
        </div>
        <div>
          <p className="newsviewer-real-time">Real-time updates from WatchTower</p>
        </div>
      </div>
      <ul>
        {items}
      </ul>
    </div>
  )
}