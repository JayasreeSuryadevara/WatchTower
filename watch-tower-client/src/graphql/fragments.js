import gql from 'graphql-tag'

export const USER_CREDENTIALS_DATA = gql`
  fragment UserCredentialsData on UserCredentials {
    _id
    email
    name
    token
    loggedIn
  }
`;

export const WATCHLIST_DATA = gql`
  fragment WatchListData on WatchList {
    _id
    stock {
      _id
      ticker
    }
    addDate
    addPrice
    noOfShares
  }
`;