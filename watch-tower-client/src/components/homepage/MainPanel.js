import React from 'react';
import MarketIndexPanel from './MarketIndexPanel';
import MarketMoversPanel from './MarketMoversPanel';
import '../../styles/homePage/MainPanel.css';

export default () => {
  return (
    <div className="main-panel">
      <MarketIndexPanel />
      <MarketMoversPanel />
    </div>
  );
}