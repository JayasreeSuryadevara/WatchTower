import gql from 'graphql-tag';
import { COMPANY_DATA } from './fragments';

export const CURRENT_USER = gql`
  query CurrentUser {
    me {
      _id
      email
      name
      stocks {
        _id
        ticker
      }
    }
  }
`;

export const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`;

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
  query GetCompany($companyId: ID!) {
    company(_id: $companyId) {
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
//         name
//         ticker
//       }
//     }
//   }
// `;
