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
        stock: Stock
    }
<<<<<<< HEAD
    type WatchListItem {
        _id: ID!
        stock: Stock
        addDate: Int
        addPrice: Int
        noOfShares: Int
=======
    type Company {
        _id: ID!
        name: String!
        desc: String!
        industry: String!
>>>>>>> c5709107c9a83d8174c0f573ed1519792b15f6a0
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
      addWatchListItem(stockId: ID!, addDate: Int, addPrice: Int, noOfShares: Int): WatchListUpdateResponse
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
        addWatchListItem: async (_, {stockId, addDate, addPrice, noOfShares}, context) => {
            const loggedInUser = context.user;
            if (loggedInUser) {
                return WatchListItem.addWatchListItem(stockId, addDate, addPrice, noOfShares, loggedInUser);
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
    Stock: {
        stock: (_, {stockId}) => {
            const stock = Stock.findById(stockId);
            return stock;
        }
    },
    Company: {
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