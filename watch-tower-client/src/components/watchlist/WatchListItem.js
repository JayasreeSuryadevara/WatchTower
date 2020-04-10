import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import RemoveFromListBtn from './RemoveFromListBtn';
import UpdateButton from './UpdateButton';
import { COMPANY_BY_STOCK_ID } from '../../graphql/queries';
import fetchStockData from '../util/fetch-stock-resolver';

const WatchListItem = ({ watchListItem }) => {

  const [ isLoading, setIsLoading ] = useState(false);
  const [ priceData, setPriceData] = useState({});
  const [ change, setChange ] = useState(0);
  const [ changePercent, setChangePercent ] = useState(0);


  const stockId = watchListItem.stock._id;
  const stock = watchListItem.stock;

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const response = await fetchStockData(stock)
      console.log(response)
      setPriceData(response)
      setIsLoading(false)
    }
    return fetchData()
  }, []);

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
  const listItem = watchListItem;

  const formatter = new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD'
  });
  const addPrice = formatter.format(listItem.addPrice * listItem.noOfShares)


  function calcChange() {
      const currentPrice = priceData.currentPrice * listItem.noOfShares;
      console.log("currentPrice", currentPrice)
      let chg = currentPrice - addPrice;
      // if (chg < 0) {
      //   chg.style.color = "red";
      // } else {
      //   chg.style.color = "green";
      // }
      return chg;
  }

  // function calcChangePercent() {
  //   if (!priceData.currentPrice) {
  //     return 0;
  //   } else {
  //     var currentPrice = priceData.currentPrice
  //     var addPrice = listItem.addPrice
  //     var chg = currentPrice - addPrice;
  //     var chgP = ((chg / listItem.addPrice)*100).toFixed(2);
  //     if (chgP < 0) {
  //       chgP.style.color = "red";
  //     } else {
  //       chgP.style.color = "green";
  //     }

  //     return chgP;
  //   }
  // }

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
              <p>{() => setChange(calcChange())}</p>
            </div>
            <div>
              <p className="result-headers">%CHG</p>
              {/* <p>{() => setChangePercent(calcChangePercent())} %</p> */}
            </div>
          </div>
          <div className="watch-list-item-vol">
            <p className="result-headers">VOLUME</p>
            {/* <p className="results">{priceData.volume}</p> */}
          </div>
          <div className="watch-list-item-range">
            <p className="result-headers">DAY RANGE</p>
            {/* <p className="results">{priceData.dayHigh} -- {priceData.dayLow}</p> */}
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