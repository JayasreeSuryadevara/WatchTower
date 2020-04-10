import React from "react";
import { useQuery, useMutation } from '@apollo/react-hooks';
// import yahooQuote from '../util/StockQuotes';
// import updateHistData from '../util/updateHistData';
import { ALL_STOCKS, GET_HISTORICAL_DATA } from '../../graphql/queries';
import fetchStockData from '../util/FmpQuotes';
// import { UPDATE_HISTORICAL_DATA, ADD_HISTORICAL_DATA } from '../../graphql/mutations';

export default () => {
  const {data,loading, error} = useQuery(ALL_STOCKS);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if(!data) return <p> Not Found </p>;
  
  function handleQuote() {
    const stocks = fetchStockData().then((response) => console.log(response))
  }

  return (
    <>
    <h2> Some Quote</h2>
    <button onClick={handleQuote}>Quote</button>
    </>
  )

  
}