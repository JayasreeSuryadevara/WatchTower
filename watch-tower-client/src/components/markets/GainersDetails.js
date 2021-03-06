import React, { useEffect, useState } from "react";
import { dayGainers } from '../util/MoversQuotes';
import GainersListItem from './GainersListItem';
import '../../styles/markets/Gainers.css';

export default () => {
  // Select top five indexes to display
  const [gainers, setGainers] = useState([]);

  async function fetchGainersQuotes() {
    const market = await dayGainers()

    setGainers(market);
  }

  useEffect(() => {
    fetchGainersQuotes()
  }, [])

  return (
    <div>
      <ul>
        {gainers && gainers.map((gainer, i) => (
          <GainersListItem gainer={gainer} key={i*2} />
        ))}
      </ul>
    </div>
  )
}