import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { ALL_STOCKS } from '../../graphql/queries';
import stockQuotes from '../util/StockQuotes';
import marketQuotes from '../util/MarketQuotes';


export default () => {
  const {data,loading, error} = useQuery(ALL_STOCKS);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if(!data) return <p> Not Found </p>;
  // let tickerStr = data.map(stock => {
  //   tickerStr += stock.ticker;
  //   return tickerStr;
  // })
  const tickerStr= "AAPL,MSFT,C,MMM";
  function handleQuote() {
    // const stocks = stockQuotes(tickerStr).then((response) => console.log(response));
    const indexSymbols = [".DJI", ".IXIC", ".INX", "%5EPSE", "%5EXAU"];
    // const indexes = marketQuotes()
    //   .then((res) => {
    //     const newindexes = res["majorIndexesList"].filter((item, i) => 
    //       indexSymbols.includes(item["ticker"])
    //     )
    //     return newindexes;
    //   })
  }
  // const displayList = indexes.map(index => {
  //   return <li key={index["ticker"]}>
  //     <p>Ticker: {index["ticker"]}</p>
  //     <p>Changes: {index["changes"]}</p>
  //     <p>Price: {index["price"]}</p>
  //     <p>Name: {index["indexName"]}</p>
  //   </li>
  // })

  return (
    <>
      <h2> Some Quote</h2>
      <button onClick={handleQuote}>Quote</button>
      {/* <Panel /> */}
    </>
  )

  
}