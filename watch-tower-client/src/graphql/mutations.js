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
  mutation AddWatchListItem($stockId: ID!, $addPrice: Int, $noOfShares: Int) {
    addWatchListItem(stockId: $stockId, addPrice: $addPrice, noOfShares: $noOfShares) {
      ...WatchListData
    }
  }
  ${WATCHLIST_DATA}
`;

export const REMOVE_WATCH_LIST_ITEM = gql`
  mutation RemoveWatchListItem($stockId: ID!) {
    removeWatchListItem(stockId: $stockId) {
      ...WatchListData
    }
  }
  ${WATCHLIST_DATA}
`;