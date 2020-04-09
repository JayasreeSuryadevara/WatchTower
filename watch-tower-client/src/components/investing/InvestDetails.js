import React, { useEffect, useState } from "react";
import yahooQuote from '../util/StockQuotes';

export default () => {
  const [quotes, setStockQuote] = useState([]);

  const stocks = ["MMM", "C", "PG"];

  async function fetchYahooQuote() {
    const quotes = await yahooQuote(stocks);
    console.log("quotes--", quotes);
    setStockQuote(quotes);
  }

  useEffect(() => {
    fetchYahooQuote()
  }, [])

  return (
    <div>
      <h1>Stock Quote</h1>
      <ul>
        {quotes.map(quote => {
          return <>
          <li>{quote.open}</li>
          <li>{quote.currentPrice}</li>
          </>
        })}
      </ul>
    </div>
  )
}