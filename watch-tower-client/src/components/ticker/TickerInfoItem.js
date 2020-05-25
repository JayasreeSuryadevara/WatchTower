import React from 'react';
import '../../styles/ticker/TickerInfoItem.css';

const TickerInfoItem = (props) => {
  const formatter = new Intl.NumberFormat('en-Us')
  let notCompanyName = "Company Name not accessible";
  return (
    <div className="ti-main-page">
      <div className="ti-data-container">
        <div>
          <h1 className="ticker-name">{props.name && props.name.length <= 24 ? 
            props.name : props.name && props.name.length > 24 ? props.name.slice(0, 25) + "..."
            : notCompanyName }</h1>
        </div>
        <div className="ti-price-container">
          <p>${props.open}</p>
        </div>
        <div className="ti-volume-container">
          <p className="vol-title">After Hours Volume:</p>
          {props.volume ? 
            <p className="vol-val">{formatter.format(props.volume)}</p> : null}
        </div>
        <div className="ti-close-container">
          <span className="vol-title">Close Price</span>
          <p className="vol-val">${props.close}</p>
        </div>
      </div>
    </div>
  )
}

export default TickerInfoItem;