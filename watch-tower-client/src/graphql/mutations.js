import gql from 'graphql-tag';
import { USER_CREDENTIALS_DATA, WATCHLIST_DATA } from './fragments';

export const SIGNUP_USER = gql`
  mutation SignUp($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      ...UserCredentialsData
    }
  }
  ${USER_CREDENTIALS_DATA}
`;

export const LOGIN_USER = gql`
  mutation LogIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ...UserCredentialsData
    }
  }
  ${USER_CREDENTIALS_DATA}
`;

export const CHANGE_PASSWORD = gql`
  mutation ChangePassword($oldPassword: String!, $newPassword: String!) {
    changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
      ...UserCredentialsData
    }
  }
  ${USER_CREDENTIALS_DATA}
`;

export const ADD_WATCH_LIST_ITEM = gql`
  mutation AddWatchListItem($ticker: String!, $currentPrice: Float) {
    addWatchListItem(ticker: $ticker, currentPrice: $currentPrice) {
      ...WatchListData
    }
  }
  ${WATCHLIST_DATA}
`;

export const REMOVE_WATCH_LIST_ITEM = gql`
  mutation RemoveWatchListItem($watchListItemId: ID!) {
    removeWatchListItem(watchListItemId: $watchListItemId) {
      ...WatchListData
    }
  }
  ${WATCHLIST_DATA}
`;

export const UPDATE_WATCH_LIST_ITEM = gql`
  mutation UpdateWatchListItem($newNoOfShares: Int, $watchListItemId: ID!) {
    updateWatchListItem(newNoOfShares: $newNoOfShares, watchListItemId: $watchListItemId) {
      ...WatchListData
    }
  }
  ${WATCHLIST_DATA}
`;

// export const ADD_COMPANY = gql`
//   mutation AddCompany($ticker: String!, $name: String!, $desc: String!, $dividend: Int, $yield: Int, $industry: String, $sector: String) {
//     addCompany(ticker: $ticker, name: $name, desc: $desc, dividend: $dividend, yield: $yield, industry: $industry, sector: $sector}) {
//       ...CompanyData
//     }
//   }
// `;

export const UPDATE_HISTORICAL_DATA = gql`
  mutation updateHistoricalData($open: Float, $dayHigh: Float, $dayLow: Float, $currentPrice: Float, $volume: Float, $changePercent: String, $stockId: ID) {
    updateHistoricalData(open: $open, dayHigh: $dayHigh, dayLow: $dayLow, currentPrice: $currentPrice, volume: $volume, changePercent: $changePercent, stockId: $stockId) {
      ...HistoricalData
    }
  }
`;

export const ADD_HISTORICAL_DATA = gql`
  mutation addHistoricalData($open: Float, $dayHigh: Float, $dayLow: Float, $currentPrice: Float, $volume: Float, $changePercent: String, $stockId: ID) {
    addHistoricalData(open: $open, dayHigh: $dayHigh, dayLow: $dayLow, currentPrice: $currentPrice, volume: $volume, changePercent: $changePercent, stockId: $stockId) {
      ...HistoricalData
    }
  }
`;
