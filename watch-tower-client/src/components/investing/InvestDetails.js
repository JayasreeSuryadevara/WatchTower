import React from "react";
import { useMutation, useQuery } from '@apollo/react-hooks';
// import yahooQuote from '../util/StockQuotes';
import updateHistData from '../util/updateHistData';
import { ALL_STOCKS } from '../../graphql/queries';

export default () => {
  // const [quotes, setStockQuote] = useState([]);

  // const stocks = ["MMM", "C", "PG"];

  // async function fetchYahooQuote() {
  //   const quotes = await yahooQuote(stocks);
  //   console.log("quotes--", quotes);
  //   setStockQuote(quotes);
  // }

  // useEffect(() => {
  //   fetchYahooQuote()
  // }, [])

  handleUpdate = () => {
    const stocks = useQuery(ALL_STOCKS);
    const data = updateHistData(stocks);
    console.log("update data", data);
  }

  return (
    <div>
      <h1>Stock Quote</h1>
      <button onclick={handleUpdate} >Update</button>
    </div>
  )
}