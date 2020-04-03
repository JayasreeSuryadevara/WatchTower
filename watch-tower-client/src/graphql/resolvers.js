import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

export const resolvers = {
  Query: {
    isLoggedIn: () => {
      console.log("isLoggedIn resolver called")
      return !!localStorage.getItem("token")
    }
  }
}