// import React from 'react';
// import fetchStockData from "./fetch-stock-resolver";
// import { useMutation, useQuery } from '@apollo/react-hooks';
// import { GET_HISTORICAL_DATA } from '../../graphql/queries';
// import { UPDATE_HISTORICAL_DATA, ADD_HISTORICAL_DATA } from '../../graphql/mutations';

// export default (stocks) => {
//   // Get all stock tickers from the db
//   // do a fetch for each to update histotical data
//   // 5 calls for min using AV so set a wait after 5 calls

//   function fetchStockData(stockId) {
//     const { data, loading, error } = useQuery(
//       GET_HISTORICAL_DATA,
//       {
//         variables: { 
//           stockId: stockId 
//         }
//       }
//     );
//     return data.historicalData;
//   }
//   const createdData = stocks.map((stock, i) => {
//       console.log("stock :", stock.ticker);
//       const currentStock = fetchStockData(stock.ticker);
//       const historicalData = fetchStockData(stock._id);
//       if (historicalData){
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
//   });
//   console.log("createdData", createdData);
//   return createdData;
// }

