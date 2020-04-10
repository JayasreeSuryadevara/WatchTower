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
    const stocks = stockQuotes(tickerStr).then((response) => console.log(response));
    const indexes = marketQuotes().then((res) => console.log("indexes", res));
  }

  return (
    <>
    <h2> Some Quote</h2>
    <button onClick={handleQuote}>Quote</button>
    </>
  )

  
}