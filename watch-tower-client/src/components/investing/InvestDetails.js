// import React from "react";
// import { useQuery, useMutation } from '@apollo/react-hooks';
// // import yahooQuote from '../util/StockQuotes';
// import updateHistData from '../util/updateHistData';
// import { ALL_STOCKS, GET_HISTORICAL_DATA } from '../../graphql/queries';
// import { fetchStockData } from '../util/fetch-stock-resolver';
// import { UPDATE_HISTORICAL_DATA, ADD_HISTORICAL_DATA } from '../../graphql/mutations';

// export default () => {
//   const {data,loading, error} = useQuery(ALL_STOCKS);
  
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;
//   if(!data) return <p> Not Found </p>;

//   const stocks = data.stocks;

  

//   const handleUpdate = () => {
//     console.log("stocks in handleUpdate", stocks);
//     const createdData = stocks.map((stock, i) => {

//       const currentStock = fetchStockData(stock.ticker);

//       const { data, loading, error } = useQuery(
//         GET_HISTORICAL_DATA,
//         {
//           variables: {
//             stockId: stock._id
//           }
//         }
//       );
//       const historicalData = data.historicalData;

//       if (historicalData) {
//         const [updateHistoricalData, { data }] = useMutation(
//           UPDATE_HISTORICAL_DATA,
//           {
//             variables: {
//               open: data.open,
//               dayHigh: data.dayHigh,
//               dayLow: data.dayLow,
//               currentPrice: data.currentPrice,
//               volume: data.volume,
//               changePercent: data.changePercent,
//               stockId: currentStock._id
//             }
//           }
//         )
//       } else {
//         const [addHistoricalData, { data }] = useMutation(
//           ADD_HISTORICAL_DATA,
//           {
//             variables: {
//               open: data.open,
//               dayHigh: data.dayHigh,
//               dayLow: data.dayLow,
//               currentPrice: data.currentPrice,
//               volume: data.volume,
//               changePercent: data.changePercent,
//               stockId: currentStock._id
//             }
//           }
//         )
//       }
//       if ((i + 1) % 5 === 0) {
//         setTimeout(() => {
//           console.log("waiting...");
//         }, 60000);
//       }
//       return data;
//     });
//     console.log("createdData", createdData);
//     // const data = updateHistData(stocks);
//     return createdData;
//   }

//   return (
//     <div>
//       <h1>Stock Quote</h1>
//       <button onClick={() => handleUpdate()} >Update</button>
//     </div>
//   )
// }