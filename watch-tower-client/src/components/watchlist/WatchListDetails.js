import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER } from '../../graphql/queries';
// import { Link } from 'react-router-dom';

const WatchListDetails = () => {
  return (
    <section className="watch-list-left">
      <div className="add-to-watch-list">
        <h1>Add to watchlist</h1>
        <form className="add-to-watch-list-add-button">
          <input
            value=""
            type="text"
            placeholder="+ ADD SYMBOL"
          />
          <i className="fas fa-search"></i>
        </form>
      </div>
      <div className="watch-list-items">
        {/* Need Stock and Company info
        Will map over the watchList array and get information about each list items
        Will need to query stock and get info to display
        Will need to query company infor for things such as name */}
        <ul>
        {/* Each li in the list will look like: */}
          <li className="watch-list-item-indiv">
            <section className="indiv-main">
              <div className="indiv-main-top">
                <div className="watch-list-item-co-info">
                  <p className="watch-list-ticker">TICKR</p>
                  <p className="watch-list-co-name">Company Inc.</p>
                </div>
                <div className="watch-list-add-shares">
                  <input
                    value=""
                    type="number"
                    placeholder="+ ADD HOLDINGS"
                  />
                </div>
              </div>
              <div className="watch-list-item-data">
                <div className="watch-list-item-chg">
                  <p>LAST</p>
                  <p>CHG</p>
                  <p>%CHG</p>
                </div>
                <div className="watch-list-item-vol">
                  <p>VOLUME</p>
                  <p>AVG VOL</p>
                </div>
                <div className="watch-list-item-range">DAY RANGE</div>
              </div>
            </section>
            <section className="watch-list-remove">
              <button>Remove ^</button>
            </section>
          </li>

          <li className="watch-list-item-indiv">
            <section className="indiv-main">
              <div>
                <div className="watch-list-item-co-info">
                  <p className="watch-list-ticker">TICKR</p>
                  <p className="watch-list-co-name">Company Inc.</p>
                </div>
              </div>
              <div className="watch-list-item-data">
                <div className="watch-list-item-chg">
                  <p>LAST</p>
                  <p>CHG</p>
                  <p>%CHG</p>
                </div>
                <div className="watch-list-item-vol">
                  <p>VOLUME</p>
                  <p>AVG VOL</p>
                </div>
                <div className="watch-list-item-range">DAY RANGE</div>
              </div>
            </section>
            <section className="watch-list-remove">
              <button>Remove ^</button>
            </section>
          </li>
        </ul>
      </div>
      
    </section>
  )
}

export default WatchListDetails;