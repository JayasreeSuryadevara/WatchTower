import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import RemoveFromListBtn from './RemoveFromListBtn';
import UpdateButton from './UpdateButton';
import { WATCH_LIST_ITEM_STOCK_INFO } from '../../graphql/queries';

// import { Link } from 'react-router-dom';//each item will be wrapped in Link its Stock/Ticker Show Page

const WatchListItem = ({ watchListItem }) => {

  const { data, loading, error } = useQuery(
    WATCH_LIST_ITEM_STOCK_INFO,
    {
      variables: { stockId: watchListItem.stock}
    }
    );
  const stock = data.watchListItemStock;
  // const company = data.companies.filter({stock._id: currentStock._id})
  const listItem = watchListItem;

  function calcChange() {
    var currentPrice = stock.currentPrice * listItem.noOfShares;
    var addPrice = listItem.addPrice * listItem.noOfShares
    var chg = currentPrice - addPrice;
    if (chg < 0) {
      chg.style.color = "red";
    } else {
      chg.style.color = "green";
    }
    return chg;
  }

  function calcChangePercent() {
    var currentPrice = stock.currentPrice
    var addPrice = listItem.addPrice
    var chg = currentPrice - addPrice;
    var chgP = ((chg / listItem.addPrice)*100).toFixed(2);
    if (chgP < 0) {
      chgP.style.color = "red";
    } else {
      chgP.style.color = "green";
    }
    return chgP;
  }

  return (
    <div className="watch-list-item-indiv">
      <section className="indiv-main">
        <div className="indiv-main-top">
          <div className="watch-list-item-co-info">
            <p className="watch-list-ticker">TICKR</p>
            <p className="watch-list-co-name">Company Inc.</p>
          </div>
          <UpdateButton/>
        </div>
        <div className="watch-list-item-data">
          <div className="watch-list-item-chg">
            <p>LAST {listItem.addPrice}</p>
            <p>CHG {calcChange}</p>
            <p>%CHG {calcChangePercent}</p>
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