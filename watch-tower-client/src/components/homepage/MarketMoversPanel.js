// import React, { useEffect, useState } from "react";
// import moversQuotes from '../util/MoversQuotes';
// import MoversListItem from './MoversListItem';
// import '../../styles/homePage/MarketMoversPanel.css';

// export default () => {
//   // Select top five indexes to display
//   const indexSymbols = [".DJI", ".IXIC", ".INX", "%5ERUI", "%5EIXCO", "%5EXAU"];
//   const [indexes, setIndexes] = useState([]);

//   async function fetchMarketQuotes() {
//     const market = await marketQuotes()

//     const filteredIndexes = await market["majorIndexesList"].filter(item => indexSymbols.includes(item["ticker"]))

//     setIndexes(filteredIndexes);
//   }

//   useEffect(() => {
//     fetchMarketQuotes()
//   }, [])

//   return (
//     <div className="market-index-container">
//       <ul className="market-index-list">
//         {indexes && indexes.map((index, i) => (
//           <IndexListItem index={index} key={i} />
//         ))}
//       </ul>
//     </div>
//   )
// }