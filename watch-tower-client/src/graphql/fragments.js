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
  fragment WatchListData on WatchListUpdateResponse {
    watchListItem {
      _id
      addPrice
      noOfShares
      stock {
        _id
        ticker
      }
    }
  }
  `;

export const COMPANY_DATA = gql`
  fragment CompanyData on Company {
    _id
    stock {
      _id
      ticker
    }
    name
    desc
    dividend
    yield
    industry
    sector
  }
`;

export const HISTORICAL_DATA = gql`
  fragment StockData on HistoricalData {
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
`