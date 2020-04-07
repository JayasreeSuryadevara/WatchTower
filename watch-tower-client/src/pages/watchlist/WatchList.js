import React from 'react';
import WatchListDetails from '../../components/watchlist/WatchListDetails';
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
            {/* This will be a link to the news later.  It is hard-coded for now. */}
            <div>
              <p className="watch-list-news-date">4/04/2020 4:27 pm ET</p>
              <p>These 19 companies are working on coronavirus treatments or vaccines -- here's where things stand</p>
            </div>
            <div>
              <p className="watch-list-news-date">4/04/2020 4:27 pm ET</p>
              <p>Two. Trillion. Dollars? Here’s where all that coronavirus stimulus is going</p>
            </div>
            <div>
              <p className="watch-list-news-date">4/04/2020 4:27 pm ET</p>
              <p>‘I’m not going to lie, it was a nightmare’: A recovered New Jersey coronavirus patient urges caution — and hope</p>
            </div>
            <div>
              <p className="watch-list-news-date">4/04/2020 4:27 pm ET</p>
              <p>Zoom green screens, but not pants: Here are the new work from home essentials</p>
            </div>
            <div>
              <p className="watch-list-news-date">4/04/2020 4:27 pm ET</p>
              <p>These 19 companies are working on coronavirus treatments or vaccines -- here's where things stand</p>
            </div>
            <div>
              <p className="watch-list-news-date">4/04/2020 4:27 pm ET</p>
              <p>Two. Trillion. Dollars? Here’s where all that coronavirus stimulus is going</p>
            </div>
            <div>
              <p className="watch-list-news-date">4/04/2020 4:27 pm ET</p>
              <p>‘I’m not going to lie, it was a nightmare’: A recovered New Jersey coronavirus patient urges caution — and hope</p>
            </div>
            <div>
              <p className="watch-list-news-date">4/04/2020 4:27 pm ET</p>
              <p>Zoom green screens, but not pants: Here are the new work from home essentials</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}