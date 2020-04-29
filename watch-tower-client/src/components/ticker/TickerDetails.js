import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks"
import { companyNews } from '../util/CurrentNews';
import '../../styles/ticker/TickerDetails.css';
import NewsDetailsItem from '../../components/news/NewsDetailsItem';
import KeyDataItem from '../ticker/KeyDataItem';
import PerformanceDataItem from '../ticker/PerformanceDataItem';
import TickerInfoItem from '../ticker/TickerInfoItem';
import stockQuote from '../util/StockQuotes';
import MoversDetails from '../homepage/MarketMoversPanel';
import { useParams } from 'react-router-dom';

export default (props) => {
  const params = useParams();

  const name = params.companyName;
  const ticker = params.ticker;

  console.log(name, ticker)
  const [allCompanyNews, setCompanyNews] = useState([]);
  const [stockInfo, setStockInfo] = useState({});

  async function fetchCompanyNews() {
    const news = await companyNews(name) 
    setCompanyNews(news)
  }

  async function fetchStockInfo() {
    const data = await stockQuote(ticker) 
    setStockInfo(data[0])
  }


  useEffect(() => {
    fetchCompanyNews()
  }, [])

  useEffect(() => {
    fetchStockInfo()
  }, [])


  const recentNews = allCompanyNews.map((article, idx) => {
    return (
      <NewsDetailsItem title={article.title} author={article.author} 
        url={article.url} urlToImage={article.urlToImage} key={idx}/>
    )
  })

  return (
    <div className="main-ticker-page">
      <div className="ticker-graph-container">
        <div className="ticker-price-item">
          <TickerInfoItem open={stockInfo.open} volume={stockInfo.volume}
            close={stockInfo.previousClose} name={name}/>
        </div>
        <div className="ticker-graph-item">
          <MoversDetails />
        </div>
      </div>
      <div className="ticker-header-container">
        <div className="th-item-container">
          <p className="th-item">Overview</p>
          <p className="th-item">Profile</p>
          <p className="th-item">Charts</p>
          <p className="th-item">Financials</p>
          <p className="th-item">Historical Quotes</p>
          <p className="th-item">Analyst Estimates</p>
          <p className="th-item">Options</p>
        </div>
      </div>
      <div className="key-data-container">
        <div className="kd-item-container">
          <div className="key-data-item">
              <KeyDataItem open={stockInfo.open} dayHigh={stockInfo.dayHigh} 
              dayLow={stockInfo.dayLow} yearHigh={stockInfo.yearHigh} 
              yearLow={stockInfo.yearLow} marketCap={stockInfo.marketCap} 
              eps={stockInfo.eps} avgVolume={stockInfo.volume} 
              sharesOutstanding={stockInfo.sharesOutstanding}pe={stockInfo.pe} 
              avgVolume={stockInfo.avgVolume}/> 
          </div>
        </div>
      </div>
      <div className="recent-news-container">
        <div className="rn-item-container">
          <div className="rn-items">
            <span className="rn-tag">Recent News</span>
            <ul>
              {recentNews}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}