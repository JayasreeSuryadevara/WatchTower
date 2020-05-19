import React, { useEffect, useState } from "react";
import { dayLosers } from '../util/MoversQuotes';
import LosersListItem from './LosersListItem';
import '../../styles/markets/Losers.css';

export default () => {
  // Select top five indexes to display
  const [losers, setLosers] = useState([]);

  async function fetchLosersQuotes() {
    const market = await dayLosers()

    setLosers(market["mostLoserStock"]);
  }

  useEffect(() => {
    fetchLosersQuotes()
  }, [])

  return (
    <div className="losers-index-container">
      <table className="losers">
        {losers && losers.map((loser, i) => (
          <LosersListItem loser={loser} key={i * 3} />
        ))}
      </table>
    </div>
  )
}