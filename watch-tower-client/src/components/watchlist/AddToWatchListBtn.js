import React, { useState } from 'react';
import { ADD_WATCH_LIST_ITEM } from '../../graphql/mutations';
import { useMutation } from '@apollo/react-hooks';
import { CURRENT_USER } from '../../graphql/queries';
import fetchStockData from '../util/fetch-stock-resolver';

export default () => {

  const [ticker, setTicker] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [stockData, setStockData] = useState({});

  useEffect(() => {

    return () => {
      document.title = `You finished clicking ${count} times`;
    };
  }, [count]);

  async function handleAdd(){
    console.log("ticker", ticker);
    const stockData = await fetchStockData(ticker);
    console.log("stockData", stockData);
    setCurrentPrice(parseInt(stockData.currentPrice));
    addWatchListItem();
  }

  const [addWatchListItem, { loading, error }] = useMutation(
    ADD_WATCH_LIST_ITEM,
    {
      variables: { ticker, currentPrice },
      onError() { },
      refetchQueries: [{ query: CURRENT_USER }]
    },
  )

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd();
      }}
      className="add-to-watch-list-add-button"
    >
      <input
        type="text"
        placeholder="+ ADD SYMBOL"
        onChange={e => setTicker(e.currentTarget.value)}
      />
      <i className="fas fa-search"></i>
    </form>
  )
}