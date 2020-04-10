import React, { useState, useEffect } from 'react';
import fetchStockData from '../util/fmp-quotes';

export default () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const data = fetchStockData()
      .then (
        (newdata) => {
          setData(newdata);
          console.log("newdata", newdata);
        }
      )
  })

  return (
    <div>
      <div>Test Sector Data</div>
      {/* <h1> {data["Meta Data"]["Information"]} </h1>
      <h2> {data["Meta Data"]["Last Refreshed"] } </h2> */}
    </div>
  )
}