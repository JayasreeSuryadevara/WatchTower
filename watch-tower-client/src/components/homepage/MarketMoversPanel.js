import React, { useEffect, useState } from "react";
import { dayActives } from '../util/MoversQuotes';
import MoversListItem from './MoversListItem';
import '../../styles/homePage/MarketMoversPanel.css';

export default () => {
  // Select top five indexes to display
   const [actives, setActives] = useState([]);

  async function fetchActivesQuotes() {
    const market = await dayActives()

    setActives(market["mostActiveStock"].slice(0,6));
  }

  useEffect(() => {
    fetchActivesQuotes()
  }, [])

  return (
    <div className="active-index-container">
      <ul className="active-index-list">
        {actives && actives.map((active, i) => (
          <MoversListItem active={active} key={i*3} />
        ))}
      </ul>
    </div>
  )
}