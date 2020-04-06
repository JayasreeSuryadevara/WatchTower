import gql from 'graphql-tag'

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
  }
`;