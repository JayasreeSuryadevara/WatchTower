import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks"
import { companyNews } from '../util/CurrentNews';
import '../../styles/ticker/TickerDetails.css';
import NewsDetailsItem from '../../components/news/NewsDetailsItem';
import KeyDataItem from '../ticker/KeyDataItem';
import PerformanceDataItem from '../ticker/PerformanceDataItem';

export default () => {
  const [allCompanyNews, setCompanyNews] = useState([]);

  async function fetchCompanyNews() {
    const news = await companyNews("tesla") 
    setCompanyNews(news)
  }

  useEffect(() => {
    fetchCompanyNews()
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
          <span>Ticker Price Info</span>
        </div>
        <div className="ticker-graph-item">
          <span>Graph info</span>
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
            <div className="ticker-key-data">
              <KeyDataItem/>
            </div>
            <div className="ticker-performance">
              <PerformanceDataItem/>
            </div>
            <div className="ticker-watchlist">
              <span>Watchlist</span>
            </div>
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