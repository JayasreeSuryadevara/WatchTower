import React, { useState } from 'react';
import { ADD_WATCH_LIST_ITEM } from '../../graphql/mutations';
import { useMutation } from '@apollo/react-hooks';
import { CURRENT_USER } from '../../graphql/queries';
import fetchStockData from '../util/fetch-stock-resolver';

export default () => {

  const [ticker, setTicker] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [stockData, setStockData] = useState({});

  // useEffect(() => {
  //   async function fetchData() {
  //     setIsLoading(true)
  //     const response = await fetchStockData(stock)
  //     console.log("response", response)
  //     setStockData(response)
  //     setIsLoading(false)
  //   }
  //   fetchData()
  // }, []);

  const [addWatchListItem, { loading, error }] = useMutation(
    ADD_WATCH_LIST_ITEM,
    {
      variables: { ticker },
      onError() {},
      refetchQueries: [{ query: CURRENT_USER }]
    },
  )

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        addWatchListItem();
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