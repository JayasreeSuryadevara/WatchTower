import React, { useEffect, useState } from "react";
import '../../styles/homePage/HomePage.css';
import { headlineNews } from '../util/CurrentNews';
import NewsDetailsItem from '../news/NewsDetailsItem';
import FirstNewsItem from '../news/FirstNewsItem';
import BulletListItem from '../news/BulletListItem';
import ClipNewsItem from '../news/ClipNewsItem';
import MainPanel from './MainPanel';
import '../../styles/homePage/HomePageDetails.css';
import { Link } from 'react-router-dom';

export default () => {
  const [headlines, setHeadlineNews] = useState([]);

  async function fetchHeadlineNews() {
    const news = await headlineNews()
    setHeadlineNews(news)
  }
console.log("------>",headlines); 
  useEffect(() => {
    fetchHeadlineNews()
  }, [])

  const items = headlines.slice(0, 7).map((article, idx) => {
  const date = article.publishedAt.slice(0, 10);
  const time = article.publishedAt.slice(11, 16);

    if (idx === 0) {
      return (
        <FirstNewsItem title={article.title} description={article.description}
          author={article.author} url={article.url} urlToImage={article.urlToImage}
          publishedAt={date} time={time} key={idx} />
      )
    } else if (idx > 0 && idx < 7) {
      return (
        <BulletListItem title={article.title} description={article.description}
          author={article.author} url={article.url} urlToImage={article.urlToImage}
          publishedAt={date} time={time} key={headlines.indexOf(article)} />
      )
    }
  })

  const newsClips = headlines.slice(7, -1).map((article, idx) => {
    return (
      <ClipNewsItem title={article.title} author={article.author} url={article.url}
        urlToImage={article.urlToImage} key={idx} />
    )
  })

  return(
    <div className="main-page-container">
      <div className="main-page">
        <div className="graph-header-container" media="screen and (max-width: 600px)">
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
            <p className="movers-latest-item">S&amp;P 500 Movers</p>
            <p className="movers-latest-item">Latest News</p>
          </div>
        </div>
        <div className="graph-container" media="screen and (max-width: 600px)">
            <MainPanel />
        </div>
        <div className="latest-news-container" media="screen and (max-width: 600px)">
          <div className="latest-news-items">
            <Link to={`/news`}><p className="latest-item">Latest News</p></Link>
            <p>Coronavirus</p>
            <p>New York</p>
            <p>Gold</p>
            <p>S&amp;P 500 Futures</p>
            <Link to={`/ticker/Apple%20Inc./AAPL`} >AAPL</Link>
            <Link to={`/ticker/Clorox%20Company%20(The)/CLX`} >CLX</Link>
            <Link to={`/ticker/NVIDIA%20Corporation/NVDA`} >NVDA</Link>
            <Link to={`/ticker/Advanced%20Micro%20Devices%20Inc./AMD`} >AMD</Link>
            <Link to={`/ticker/Tesla%20Inc./TSLA`} >TSLA</Link>
            <Link to={`/ticker/Zoom%20Video%20Communications,%20Inc./ZM`} >ZM</Link>
          </div>
        </div>
        <div className="all-news-container">
          <ul>
            {items}
          </ul>
          <ul className="clip-list-container">
            {newsClips}
          </ul>
        </div>
      </div>
    </div>
  )
}