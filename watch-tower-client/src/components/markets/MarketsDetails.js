import React from 'react';
import { Link } from 'react-router-dom';
import MoversDetails from './MoversDetails';
import GainerDetails from './GainersDetails';
import LosersDetails from './LosersDetails';
import '../../styles/markets/MarketDetails.css';

export default () => {

  return (
    <main className="markets-page-container">
      <div className="markets-movers-panel">
        <p className="movers-title">S &amp; P Movers of the day</p>
        <MoversDetails />
      </div>
      <div className="markets-gainers-panel">
        <p className="gainers-title">S &amp; P Gainers of the day</p>
        <GainerDetails />
      </div>
      <div className="markets-losers-panel">
        <p className="losers-title">S &amp; P Losers of the day</p>
        <LosersDetails />
      </div>
    </main>
  );
};