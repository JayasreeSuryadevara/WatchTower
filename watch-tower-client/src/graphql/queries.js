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
      }
    }
  }
`;

export const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`;

// Work-in-progress
// export const CURRENT_USER_WITH_WATCHLIST = gql`
//   query CurrentUserWithWatchList {
//     me {
//       name
//       watchList {
//        _id
//        stock {
          //   ticker
          // }
//       }
//     },
//     company {
//       name
//       currentPrice (this will come from server cache)
//       volume (from server cache)
//       dayRange (from server cache)
//     }
//   }
// `;

export const WATCH_LIST_ITEMS = gql`
  query WatchListItems {
    watchListItems {
      _id
      stock
      addDate
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

// export const HistoricalData = gql`
//   query historicalData($stockId: ID!) {

//   }
// `;