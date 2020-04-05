import gql from 'graphql-tag';

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