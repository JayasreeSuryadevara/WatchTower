const mongoose = require('mongoose');
const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');
const User = mongoose.model("User");
const Stock = mongoose.model("Stock");

const typeDefs = `
    type User {
        _id: ID!
        email: String!
        name: String!
        stocks: [Stock]
    }
    type Stock {
        _id: ID!
        ticker: String!
        name: String!
        stock: Stock
    }
    type Query {
        me: User
    }
    type Mutation {
      login(email: String!, password: String!): UserCredentials
      signup(email: String!, name: String!, password: String!): UserCredentials
    }
    type UserCredentials {
      _id: ID!
      email: String!
      name: String!
      token: String
      loggedIn: Boolean
    }
`;

const resolvers = {
    Query: {
        me(_, __, context) {
            return context.user;
        }
    },
    Mutation: {
        login(_, { email, password}) {
            return User.login(email, password);
        },
        signup(_, { email, name, password }) {
            return User.signup(email, name, password);
        }
    },
    User: {
        stocks: async (parentValue, _, context) => {
            const queriedUser = parentValue;
            const loggedInUser = context.user;
            if (loggedInUser && queriedUser._id === loggedInUser._id) {
                await loggedInUser.populate('stocks').execPopulate();
                return loggedInUser.stocks;
            }
            return null;
        }
    },
    Stock: {
        stock: (_, {stockId}) => {
            const stock = Stock.findById(stockId);
            return stock;
        }
    }
}

module.exports = {
    schema: makeExecutableSchema({
        typeDefs,
        resolvers
    }),
    typeDefs,
    resolvers
}