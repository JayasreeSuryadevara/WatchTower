import gql from 'graphql-tag';

export const SIGNUP_USER = gql`
  mutation SignUp($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      _id
      email
      name
      token
      loggedIn
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LogIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      email
      name
      token
      loggedIn
    }
  }
`;

export const ADD_WATCH_LIST_ITEM = gql`
  mutation AddWatchListItem($stockId: ID!, $addDate: String, $addPrice: Int, $noOfShares: Int) {
    addWatchListItem(stockId: $stockId, addDate: $addDate, addPrice: $addPrice, noOfShares: $noOfShares) {
      success
      message
      watchList {
        _id
        stock {
          _id
          ticker
        }
        addDate
        addPrice
        noOfShares
      }
    }
  }
`;

export const REMOVE_WATCH_LIST_ITEM = gql`
  mutation RemoveWatchListItem($stockId: ID!) {
    addWatchListItem(stockId: $stockId) {
      success
      message
      watchList {
        _id
        stock {
          _id
          ticker
        }
        addDate
        addPrice
        noOfShares
      }
    }
  }
`;