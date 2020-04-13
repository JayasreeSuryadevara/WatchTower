import React from 'react';
import '../../styles/ticker/KeyDataItem.css';

const KeyDataItem = (props) => {
  const formatter = new Intl.NumberFormat('en-Us')

  return (
    <div className="kd-main-container">
      <div className="data-container">
        <div className="kd-title-container">
          <span>Open</span>
        </div>
        <div className="kd-value-container">
          <p>${props.open}</p>
        </div>
      </div>
      <div className="data-container">
        <div className="kd-title-container">
          <span>Day Range</span>
        </div>
        <div className="kd-value-container">
          <p>${props.dayHigh} - ${props.dayLow}</p>
        </div>
      </div>
      <div className="data-container">
        <div className="kd-title-container">
          <span>52 Week Range</span>
        </div>
        <div className="kd-value-container">
          <p>${props.yearHigh} - ${props.yearLow}</p>
        </div>
      </div>
      <div className="data-container">
        <div className="kd-title-container">
          <span>Market Cap</span>
        </div>
        <div className="kd-value-container">
          <p>{formatter.format(props.marketCap)}</p>
        </div>
      </div>
      <div className="data-container">
        <div className="kd-title-container">
          <span>Shares Outstanding</span>
        </div>
        <div className="kd-value-container">
          <p>{formatter.format(props.sharesOutstanding)}</p>
        </div>
      </div>
      <div className="data-container">
        <div className="kd-title-container">
          <span>P/E Ratio</span>
        </div>
        <div className="kd-value-container">
          {props.pe === null ? <p>0</p> : <p>{formatter.format(props.pe)}</p>}
        </div>
      </div>
      <div className="data-container">
        <div className="kd-title-container">
          <span>EPS</span>
        </div>
        <div className="kd-value-container">
          <p>${props.eps}</p>
        </div>
      </div>
      <div className="data-container">
        <div className="kd-title-container">
          <span>Avg. Volume</span>
        </div>
        <div className="kd-value-container">
          <p>{formatter.format(props.avgVolume)}</p>
        </div>
      </div>
    </div>
  )
}

export default KeyDataItem;