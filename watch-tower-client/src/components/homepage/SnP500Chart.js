import React, { useEffect, useState } from 'react';
import marketHistorical from '../util/MarketHistorical';
import Plot from 'react-plotly.js';


export default () => {
  //to dynamiclly change the chart values from API call
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);


  async function fetchIndexData() {
    const snpData = await marketHistorical();

    console.log("snpData", snpData);
    const newXValues= await snpData.map((record,i) => { 
      return record[i]["date"]   
    });
    const newYValues = await snpData.map((record, i) => {
      return record[i]["open"]
    });
    console.log("x", newXValues);
    console.log("y", newYValues);
    setXValues(newXValues);
    setYValues(newYValues);
  }

  useEffect(() => {
    fetchIndexData()
  })([xValues, yValues])

  return (
    <div className="market-chart">
      <p className="market-chart-title">S&amp;P 500 Market</p>
      <Plot
        data={[
          {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
          }
        ]}
        layout={{ width: 460, height: 200, title: 'S&P 500 Market' }}
      />
    </div>
  );

}

