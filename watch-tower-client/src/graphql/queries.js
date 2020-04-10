import gql from 'graphql-tag';
import { COMPANY_DATA } from './fragments';

export const CURRENT_USER = gql`
  query CurrentUser {
    me {
      _id
      email
      name
      watchList {
        _id
        stock {
          _id
          ticker
        }
        addPrice
        noOfShares
      }
    }
  }
`;

export const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`;
// not sure if we'll need this one:
// export const WATCH_LIST_ITEM_STOCK_INFO = gql`
//   query WatchListItemStockInfo {
//     watchListItemStock {
//       dayHigh
//       dayLow
//       currentPrice
//       volume
//     }
//   }
// `;

export const WATCH_LIST_ITEM = gql`
  query WatchListItem {
    watchListItem {
      _id
      stock 
      addPrice
      noOfShares
    }
  }
`;
export const GET_COMPANY = gql`
  query GetCompany($name: String!) {
    company(name: $name) {
      ...CompanyData
    }
  }
  ${COMPANY_DATA}
`;

export const COMPANY_BY_TICKER = gql`
  query CompanyByTicker($ticker: String!) {
    companyByTicker(ticker: $ticker) {
      ...CompanyData
      stock {
        _id
        ticker
      }
    }
  }
  ${COMPANY_DATA}
`;

export const COMPANY_BY_STOCK_ID = gql`
  query CompanyByStockId($stockId: ID!) {
    companyByStockId(stockId: $stockId) {
      ...CompanyData
      stock {
        _id
        ticker
      }
    }
  }
  ${COMPANY_DATA}
`;

// export const SearchResults = gql`
//   query($searchStr: String) {
//     listCurrentStocks(filter: {
//       searchField: {
//         contains: $searchStr
//       }
//     }) {
//       stocks {
//         ticker
//       }
//     }
//   }
// `;
export const ALL_STOCKS = gql`
  query stocks {
    stocks {
      _id
      ticker
    }
  }
`;
export const GET_HISTORICAL_DATA = gql`
  query historicalData($stockId: ID!) {
    historicalDataByStockId(stockId: $stockId) {
      _id
      open
      dayHigh
      dayLow
      currentPrice
      volume
      changePercent
      stock {
        _id
        ticker
      }
    }
  }
`;