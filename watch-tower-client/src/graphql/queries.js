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

// export const SearchResults = gql`
//   query($searchQuery: String) {
//     listCurrentStocks(filter: {
//       searchField: {
//         contains: $searchQuery
//       }
//     }) {
//       stocks {
//         name
//         tocker
//       }
//     }
//   }
// `;