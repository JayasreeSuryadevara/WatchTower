import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import RemoveFromListBtn from './RemoveFromListBtn';
import UpdateButton from './UpdateButton';
import { COMPANY_BY_STOCK_ID } from '../../graphql/queries';
import fetchStockData from '../util/StockQuotes';
import { Link } from 'react-router-dom';

const WatchListItem = ({ watchListItem }) => {

  const [ isLoading, setIsLoading ] = useState(false);
  const [ priceData, setPriceData] = useState({});

  const stockId = watchListItem.stock._id;
  const stock = watchListItem.stock;
  const ticker = stock.ticker;

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const response = await fetchStockData(ticker)
      setPriceData(response[0])
      setIsLoading(false)
    }
    fetchData()
  }, []);

  const listItem = watchListItem;

  const formatter = new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD'
  });

  const nf = new Intl.NumberFormat();
  
  let chg;
  let chgP;
  const addPrice = formatter.format(listItem.addPrice * listItem.noOfShares)
  const currentPrice = priceData.price * listItem.noOfShares;
  chg = currentPrice - (listItem.addPrice * listItem.noOfShares);
  const formattedChg = formatter.format(chg);
  chgP = (chg / listItem.addPrice).toFixed(2);
  const formattedChgP = chgP.toLocaleString();
  const volume = priceData.volume;
  const avgVolume = priceData.avgVolume;
  const dayHigh = priceData.dayHigh;
  const dayLow = priceData.dayLow;
  const formattedVolume = nf.format(volume);
  const formattedAvgVolume = nf.format(avgVolume);
  const formattedLow = formatter.format(dayLow);
  const formattedHigh = formatter.format(dayHigh);


  return isLoading ? <div>Loading</div> : (
    <Link to={`/ticker/${priceData.name}/${stock.ticker}`}>
      <div className="watch-list-item-indiv">
        <section className="indiv-main">
          <div className="indiv-main-top">
            <div className="watch-list-item-co-info">
              <p className="watch-list-ticker">{ticker}</p>
              <p className="watch-list-co-name">{priceData.name} (No. of shares: {watchListItem.noOfShares})</p>
            </div>
            <UpdateButton watchListItem={watchListItem}/>
          </div>
          <div className="watch-list-item-data">
            <div className="watch-list-item-chg">
              <div>
                <p className="result-headers">LAST</p>
                <p className="results">{addPrice}</p>
              </div>
              <div>
                <p className="result-headers">CHG</p>
                <p className={`${(chg >= 0) ? "change-green" : "change-red"}`}>
                  {formattedChg}
                </p>
              </div>
              <div>
                <p className="result-headers">%CHG</p>
                <p className={`${(chg >= 0) ? "change-green" : "change-red"}`}>
                  {formattedChgP}
                </p>
              </div>
            </div>
            <div className="watch-list-item-vol">
              <div>
              <p className="result-headers">VOLUME</p>
              <p className="results">{formattedVolume}</p>
              </div>
              <div>
              <p className="result-headers">AVG VOLUME</p>
              <p className="results">{formattedAvgVolume}</p>
              </div>
            </div>
            <div className="watch-list-item-range">
              <p className="result-headers">DAY RANGE</p>
              <p className="results">{formattedHigh} -- {formattedLow}</p>
            </div>
          </div>
        </section>
        <section className="watch-list-remove">
          <RemoveFromListBtn watchListItem={watchListItem}/>
        </section>
      </div>
    </Link>
  )
}

export default WatchListItem;