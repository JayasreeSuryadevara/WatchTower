import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import RemoveFromListBtn from './RemoveFromListBtn';
import UpdateButton from './UpdateButton';
import { COMPANY_BY_STOCK_ID } from '../../graphql/queries';
import fetchStockData from '../util/fetch-stock-resolver';


const WatchListItem = ({ watchListItem }) => {

  const stockId = watchListItem.stock._id;

  const { data, loading, error } = useQuery(
    COMPANY_BY_STOCK_ID,
    {
      variables: { stockId: stockId }
    }
  );
  if (loading) return <h1> Loading...</h1>
  if (error) return <h1> Error </h1>
  if (!data) return <h1> Not found </h1>

  const company = data.companyByStockId;
  const stock = company.stock;
  const listItem = watchListItem;

  console.log("ticker", stock.ticker);
  const priceData = fetchStockData(stock);
  console.log("data ", priceData);

  function calcChange() {
    console.log("pricedata currentPrice", priceData.currentPrice)
    var currentPrice = priceData.currentPrice * listItem.noOfShares;
    var addPrice = listItem.addPrice * listItem.noOfShares
    console.log("currentPrice", currentPrice);
    console.log("addPrice", addPrice);
    var chg = currentPrice - addPrice;
    if (chg < 0) {
      chg.style.color = "red";
    } else {
      chg.style.color = "green";
    }
    console.log("chg", chg);

    return chg;
  }

  function calcChangePercent() {
    var currentPrice = priceData.currentPrice
    var addPrice = listItem.addPrice
    var chg = currentPrice - addPrice;
    var chgP = ((chg / listItem.addPrice)*100).toFixed(2);
    if (chgP < 0) {
      chgP.style.color = "red";
    } else {
      chgP.style.color = "green";
    }
    console.log("currentPrice", currentPrice);
    console.log("addPrice", addPrice);
    console.log("chgP", chgP);

    return chgP;
  }

  var formatter = new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD'
  });

  const lastAmount = formatter.format(watchListItem.addPrice * watchListItem.noOfShares)

  return (
    <div className="watch-list-item-indiv">
      <section className="indiv-main">
        <div className="indiv-main-top">
          <div className="watch-list-item-co-info">
            <p className="watch-list-ticker">{stock.ticker}</p>
            <p className="watch-list-co-name">{company.name} (No. of shares: {watchListItem.noOfShares})</p>
          </div>
          <UpdateButton watchListItem={watchListItem}/>
        </div>
        <div className="watch-list-item-data">
          <div className="watch-list-item-chg">
            <div>
              <p className="result-headers">LAST</p>
              <p className="results">{lastAmount}</p>
            </div>
            <div>
              <p className="result-headers">CHG</p>
              <p>{calcChange()}</p>
            </div>
            <div>
              <p className="result-headers">%CHG</p>
              <p>{calcChangePercent()} %</p>
            </div>
          </div>
          <div className="watch-list-item-vol">
            <p className="result-headers">VOLUME</p>
            <p className="results">{priceData.volume}</p>
          </div>
          <div className="watch-list-item-range">
            <p className="result-headers">DAY RANGE</p>
            {/* <p className="results">{stock.dayHigh} -- {stock.dayLow}</p> */}
          </div>
        </div>
      </section>
      <section className="watch-list-remove">
        <RemoveFromListBtn watchListItem={watchListItem}/>
      </section>
    </div>
  )
}

export default WatchListItem;