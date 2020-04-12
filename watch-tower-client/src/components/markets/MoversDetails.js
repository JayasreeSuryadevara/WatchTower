import React, { useEffect, useState } from "react";
import { dayActives } from '../util/MoversQuotes';
import MoversListItem from './MoversListItem';
import '../../styles/markets/Movers.css';

export default () => {
  // Select top five indexes to display
  const [movers, setMovers] = useState([]);

  async function fetchMoversQuotes() {
    const market = await dayActives()

    setMovers(market["mostActiveStock"]);
  }

  useEffect(() => {
    fetchMoversQuotes()
  }, [])

  return (
    <div className="movers-index-container">
      <ul className="movers-index-list">
        {movers && movers.map((mover, i) => (
          <MoversListItem mover={mover} key={i} />
        ))}
      </ul>
    </div>
  )
}