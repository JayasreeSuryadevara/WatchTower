import React from 'react';
import '../../styles/ticker/PerformanceDataItem.css';

const PerformanceDataItem = (props) => {
  return (
    <div className="p-main-page">
      <div className="p-container">
        <div className="p-time-container">
          <span>15 Minute</span>
        </div>
        <div className="p-time-value">
          <p>{props.quartHour}</p>
        </div>
      </div>
      <div className="p-container">
        <div className="p-time-container">
          <span>30 Minute</span>
        </div>
        <div className="p-time-value">
          <p>{props.halfHour}</p>
        </div>
      </div>
      <div className="p-container">
        <div className="p-time-container">
          <span>1 Hour</span>
        </div>
        <div className="p-time-value">
          <p>{props.hour}</p>
        </div>
      </div>
    </div>
  )
}

export default PerformanceDataItem;