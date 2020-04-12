import React, { useEffect, useState } from "react";
import { principlesInvestingNews } from '../util/CurrentNews';
import InvestDetailsItem from './InvestDetailsItem';
import { Link } from 'react-router-dom';
import '../../styles/news/NewsDetails.css';
import {dayActives} from '../util/MoversQuotes';

export default () => {
  const [allPrinciplesNews, setPrinciplesNews] = useState([]);
  const [stockData, setStockData] = useState([]);

  async function fetchPrinciplesNews() {
    const news = await principlesInvestingNews()
    setPrinciplesNews(news)
  }

  useEffect(() => {
    fetchPrinciplesNews()
  }, [])

  useEffect(() => {
    async function fetchData() {
      const response = await dayActives()
      console.log("response", response.mostActiveStock)
      setStockData(response.mostActiveStock.slice(0, 5))
      console.log("stockData",stockData)
    }
    fetchData()
  }, []);

  const items = allPrinciplesNews.slice(0, 14).map(article => {
    const date = article.publishedAt.slice(0, 10);
    const time = article.publishedAt.slice(11, 16);
    return (
      <InvestDetailsItem title={article.title} description={article.description}
        author={article.author} url={article.url} urlToImage={article.urlToImage}
        publishedAt={date} time={time} key={allPrinciplesNews.indexOf(article)} />
    )
  })

  const formatter = new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD'
  });

  return (
    <div>
      <div className="tech-news-page-title">Investing</div>
      <div className="tech-news-page-home">
        <Link to="/" className="tech-news-page-home-link">Home ></Link> Investing
      </div>
      <div className="tech-news-stock-info-panel">
        <h2 className="most-active-today-title">Today's most active stocks</h2>
        <ul className="tech-news-stock-list">
          {stockData.map((stock, i) => {
            const ticker = stock.ticker;
            const price = stock.price;
            return <div key={i}>
              <Link to={`/ticker/${stock.companyName}/${stock.ticker}`} className="tech-news-stock">
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
          <h2>PRINCIPLES OF INVESTING</h2>
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