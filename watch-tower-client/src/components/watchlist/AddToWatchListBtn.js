import React, { useState, useEffect } from 'react';
import { ADD_WATCH_LIST_ITEM } from '../../graphql/mutations';
import { useMutation } from '@apollo/react-hooks';
import { CURRENT_USER } from '../../graphql/queries';
import fetchStockData from '../util/StockQuotes';

export default () => {

  const [ticker, setTicker] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  const toInputUppercase = e => {
    e.target.value = ("" + e.target.value).toUpperCase();
  }

  const [addWatchListItem, { loading, error }] = useMutation(
    ADD_WATCH_LIST_ITEM,
    {
      variables: { ticker, currentPrice },
      onError() { },
      refetchQueries: [{ query: CURRENT_USER }]
    },
  )

  async function handleAdd() {
    try {
    const stockData = await fetchStockData(ticker);
    console.log("stockData", stockData);
    setCurrentPrice(stockData[0].price);
    addWatchListItem();
    console.log("currentPrice", currentPrice);
    // debugger;
    window.location.reload();
    } catch(err) {
      alert("That stock doesn't seem to be trading.  Try another symbol!");
    }
  }


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
        onInput={toInputUppercase}
      />
      <i className="fas fa-search"></i>
    </form>
  )
}