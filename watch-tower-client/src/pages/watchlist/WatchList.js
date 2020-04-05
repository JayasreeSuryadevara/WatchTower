import React from 'react';
import WatchListDetails from '../../components/watchlist/WatchListDetails';
import '../../styles/watchlist/WatchList.css';

export default () => {

  return (
    <main className="watch-list-main">
      <div className="watch-list-details">
        <WatchListDetails />
      </div>
      <div className="watch-list-news">
        <h3>WATCHLIST NEWS</h3>
        <div className="watch-list-news-list">
          {/* This will be a link to the news later.  It is hard-coded for now. */}
          <p>These 19 companies are working on coronavirus treatments or vaccines -- here's where things stand</p>
        </div>
      </div>
    </main>
  )
}