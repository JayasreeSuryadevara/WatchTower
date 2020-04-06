const mongoose = require('mongoose');
const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');
const User = mongoose.model("User");
const Stock = mongoose.model("Stock");
const WatchListItem = mongoose.model("WatchListItem");

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
        company: Company
    }
    type WatchListItem {
        _id: ID!
        stock: Stock
        addPrice: Int
        noOfShares: Int
    }
    type Company {
        _id: ID!
        name: String!
        desc: String!
        industry: String!
    }
    type Query {
        me: User
        watchListItem(_id: ID!): WatchListItem
        watchListItems: [WatchListItem]
    }
    type Mutation {
      login(email: String!, password: String!): UserCredentials
      signup(email: String!, name: String!, password: String!): UserCredentials
      changePassword(oldPassword: String!, newPassword: String!): UserCredentials
      addWatchListItem(stockId: ID!, addPrice: Int, noOfShares: Int): WatchListUpdateResponse
      removeWatchListItem(watchListItemId: ID!): WatchListUpdateResponse
    }
    type UserCredentials {
      _id: ID!
      email: String!
      name: String!
      token: String
      loggedIn: Boolean
    }
    type WatchListUpdateResponse {
        success: Boolean!
        message: String
        watchListItem: ID
    }
`;

const resolvers = {
    Query: {
        me(_, __, context) {
            return context.user;
        },
        watchListItem(_, { _id }) {
            return WatchListItem.findById(_id);
        },
        watchListItems(_, __) {
            return WatchListItem.find({});
        }
    },
    Mutation: {
        login(_, { email, password}) {
            return User.login(email, password);
        },
        signup(_, { email, name, password }) {
            return User.signup(email, name, password);
        },
        changePassword(_, { oldPassword, newPassword }, context) {
            const loggedInUser = context.user;
            if (loggedInUser) {
                return loggedInUser.changePassword(oldPassword, newPassword);
            }
        },
        addWatchListItem: async (_, {stockId, addPrice, noOfShares}, context) => {
            const loggedInUser = context.user;
            if (loggedInUser) {
                return WatchListItem.addWatchListItem(stockId, addPrice, noOfShares, loggedInUser);
            }
        },
        removeWatchListItem: async(_, { watchListItemId }, context) => {
            const loggedInUser = context.user;
            console.log(loggedInUser)
            const watchListItem = await WatchListItem.findById(watchListItemId);
            return watchListItem.removeWatchListItem(loggedInUser);
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
    // Stock: {
    //     stock: (_, {stockId}) => {
    //         const stock = Stock.findById(stockId);
    //         return stock;
    //     }
    // },
    Stock: {
        company: (_, { companyId }) => {
            const company = Company.findById(companyId);
            return company;
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