import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import RemoveFromListBtn from './RemoveFromListBtn';

// import { Link } from 'react-router-dom';//each item will be wrapped in Link its Stock/Ticker Show Page

const WatchListItem = () => {


  return (
    <div className="watch-list-item-indiv">
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
        <button><RemoveFromListBtn /></button>
      </section>
    </div>
  )
}

export default WatchListItem;