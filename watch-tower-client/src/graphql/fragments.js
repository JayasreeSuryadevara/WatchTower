import gql from 'graphql-tag'

<<<<<<< HEAD
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
=======
export const COMPANY_DATA = gql`
  fragment CompanyData on Company {
    _id
    name
    desc
    industry
  }
`;

export const USER_CREDENTIALS_DATA = gql`
  fragment UserCredentialsData on UserCredentials {
    _id
    username
    token
    loggedIn
>>>>>>> c5709107c9a83d8174c0f573ed1519792b15f6a0
  }
`;