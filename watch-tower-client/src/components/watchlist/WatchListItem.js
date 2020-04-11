import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import RemoveFromListBtn from './RemoveFromListBtn';
import UpdateButton from './UpdateButton';
import { COMPANY_BY_STOCK_ID } from '../../graphql/queries';
import fetchStockData from '../util/StockQuotes';

const WatchListItem = ({ watchListItem }) => {

  const [ isLoading, setIsLoading ] = useState(false);
  const [ priceData, setPriceData] = useState({});
  // const [ change, setChange ] = useState(0);
  // const [ changePercent, setChangePercent ] = useState(0);

  console.log(watchListItem);

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

  console.log("PriceData", priceData)
  const { data, loading, error } = useQuery(
    COMPANY_BY_STOCK_ID,
    {
      variables: { stockId: stockId }
    }
  );
  if (loading) return <h1> Loading...</h1>
  if (error) return <h1> Error </h1>
  if (!data) return <h1> Not found </h1>

  // useEffect(() => {
  //   let value = document.getElementById("change").innerHTML
  //   value = parseInt(value);
  //   if (value < 0) {
  //     // chg.style.color = "red";
  //     value.style.color = "red"
  //   } else {
  //     value.style.color = "green"
  //     // chg.style.color = "green";
  //   }
  // }, [])

  const company = data.companyByStockId;
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
  chg = currentPrice - listItem.addPrice;
  const formattedChg = formatter.format(chg);
  chgP = (chg / listItem.addPrice).toFixed(2);
  const formattedChgP = chgP.toLocaleString();
  const volume = priceData.volume;
  const avgVolume = priceData.avgVolume;
  const dayHigh = priceData.dayHigh;
  const dayLow = priceData.dayLow;
  const formattedVolume = nf.format(volume);
  const formattedAvgVolume = nf.format(avgVolume);
  const formattedLow = nf.format(dayLow);
  const formattedHigh = nf.format(dayHigh);


  return isLoading ? <div>Loading</div> : (
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
              <p className="results">{addPrice}</p>
            </div>
            <div>
              <p className="result-headers">CHG</p>
              <p className={`${(chg > 0) ? "change-green" : "change-red"}`}>
                {formattedChg}
              </p>
            </div>
            <div>
              <p className="result-headers">%CHG</p>
              <p className={`${(chg > 0) ? "change-green" : "change-red"}`}>
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
  )
}

export default WatchListItem;