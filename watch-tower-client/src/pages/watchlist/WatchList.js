import React from 'react';
import WatchListDetails from '../../components/watchlist/WatchListDetails';
import WatchListLatestNews from '../../components/watchlist/WatchListLatestNews';
import '../../styles/watchlist/WatchList.css';

export default () => {

  return (
    <main className="watch-list-main">
      <header>
        <h1>Watchlist</h1>
      </header>
      <section className="watch-list-body">
        <div className="watch-list-details">
          <WatchListDetails />
        </div>
        <div className="watch-list-news">
          <h3 className="watch-list-news-header">LATEST NEWS</h3>
          <div className="watch-list-news-list">
            <WatchListLatestNews/>
          </div>
        </div>
      </section>
    </main>
  )
}