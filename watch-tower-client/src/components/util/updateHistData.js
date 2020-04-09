import fetchStockData from "./fetch-stock-resolver";
import { useMutation, useQuery } from '@apollo/react-hooks';
import { GET_HISTORICAL_DATA } from '../../graphql/queries';
import { UPDATE_HISTORICAL_DATA, ADD_HISTORICAL_DATA } from '../../graphql/mutations';

const updateHistData = (stocks) => {
  // Get all stock tickers from the db
  // do a fetch for each to update histotical data
  // 5 calls for min using AV so set a wait after 5 calls
  console.log("Starting 5-req/m db historical data update");
  console.log("stocks",stocks);
  const createdData = stocks.map((stock, i) => {
      console.log("stock :", stock.ticker);
      const data = fetchStockData(stock.ticker);
      console.log("hist data ", data);
      const historicalData = useQuery(
        GET_HISTORICAL_DATA,
        {
          variables: {
            stockId
          }
        }
      );
      const newHistData;
      if (historicalData){
        newHistData = useMutation(
          UPDATE_HISTORICAL_DATA,
          {
            variables: {
              open: data.open,
              dayHigh: data.dayHigh,
              dayLow: data.dayLow,
              currentPrice: data.currentPrice,
              volume: data.volume,
              changePercent: data.changePercent,
              stockId: stock._id
            }
          }
        )
      } else {
        newHistData = useMutation(
          ADD_HISTORICAL_DATA,
          {
            variables: {
              open: data.open,
              dayHigh: data.dayHigh,
              dayLow: data.dayLow,
              currentPrice: data.currentPrice,
              volume: data.volume,
              changePercent: data.changePercent,
              stockId: stock._id
            }
          }
        )
      }
      if ((i + 1) % 5 === 0) {
        setTimeout(() => {
          console.log("waiting...");
        }, 60000);
      }
      return newHistData;
  });
  console.log("createdData", createdData);
  return createdData;
}

export default updateHistData;
