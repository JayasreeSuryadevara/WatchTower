import React, { useEffect, useState } from "react";
import { technologyNews } from '../util/CurrentNews';
import TechNewsDetailsItem from './TechNewsDetailsItem';
import { Link } from 'react-router-dom';
import '../../styles/news/newsDetails.css';
import fetchStockData from '../util/StockQuotes';

export default () => {
  const [allTechnologyNews, setTechnologyNews] = useState([]);
  const [techStockData, setTechStockData] = useState([]);

  async function fetchTechnologyNews() {
    const news = await technologyNews()
    setTechnologyNews(news)
  }

  useEffect(() => {
    fetchTechnologyNews()
  }, [])

  useEffect(() => {
    async function fetchData() {
      const response = await fetchStockData("CSCO, NFLX, ZM, AMZN, HPE, GOOGL")
      setTechStockData(response)
    }
    fetchData()
  }, []);

  const items = allTechnologyNews.slice(0, 14).map(article => {
    const date = article.publishedAt.slice(0, 10);
    const time = article.publishedAt.slice(11, 16);
    return (
      <TechNewsDetailsItem title={article.title} description={article.description}
        author={article.author} url={article.url} urlToImage={article.urlToImage}
        publishedAt={date} time={time} key={allTechnologyNews.indexOf(article)} />
    )
  })

  const formatter = new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD'
  });

  console.log(techStockData)

  return (
    <div>
      <div className="tech-news-page-title">Technology News</div>
      <div className="tech-news-page-home">
        <Link to="/" className="tech-news-page-home-link">Home ></Link> Technology
      </div>
      <div className="tech-news-stock-info-panel">
        <ul className="tech-news-stock-list">
          {techStockData.map((stock, i) => {
            const ticker = stock.symbol;
            const price = stock.price;
            return <div key={i} className="tech-news-stock">
              {/* <Link to={`/ticker/${stock.symbol}`}> */}
                <p className="tech-news-stock-ticker">{ticker}</p>
                <p>{formatter.format(price)}</p>
              {/* </Link> */}
            </div>
          })}
        </ul>
      </div>
      <div className="tech-news-newsviewer">
        <div className="newsviewer-header">
          <h2>NEWSVIEWER</h2>
          <div className="newsviewer-bar">  </div>
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