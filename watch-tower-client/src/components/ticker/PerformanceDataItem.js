import React from 'react';
import '../../styles/ticker/PerformanceDataItem.css';

const PerformanceDataItem = (props) => {
  return (
    <div className="p-main-page">
      <div className="p-container">
        <div className="p-time-container">
          <span>5 Days</span>
        </div>
        <div className="p-time-value">
          <span>100.1%</span>
        </div>
      </div>
    </div>
  )
}

export default PerformanceDataItem;