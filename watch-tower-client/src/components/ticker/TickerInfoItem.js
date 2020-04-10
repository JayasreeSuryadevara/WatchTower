import React from 'react';
import '../../styles/ticker/TickerInfoItem.css';

const TickerInfoItem = (props) => {
  return (
    <div className="ti-main-page">
      <div className="ti-data-container">
        <div className="ti-price-container">
          <span>$123.45</span>
        </div>
        <div className="ti-volume-container">
          <span>1.1M</span>
        </div>
        <div className="ti-sector-container">
          <span>Close</span>
          <span>Technology</span>
        </div>
        <div className="close-data-container">
          <span>$267.99</span>
          <span>1.92</span>
          <span>0.72</span>
        </div>
      </div>
    </div>
  )
}

export default TickerInfoItem;