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
        watchList: [WatchListItem]
    }
    type WatchListItem {
        _id: ID!
        stock: Stock
        addPrice: Int
        noOfShares: Int
    }
    type Stock {
        _id: ID!
        ticker: String!
    }
    type Company {
        _id: ID!
        stock: Stock
        name: String!
        desc: String!
        industry: String
        sector: String
    }
    type Query {
        me: User
        watchListItem(_id: ID!): WatchListItem
        watchList: [WatchListItem]
        stock(ticker: String!): Stock
        // stocks: [Stock]
    }
    type Mutation {
        login(email: String!, password: String!): UserCredentials
        signup(email: String!, name: String!, password: String!): UserCredentials
        changePassword(oldPassword: String!, newPassword: String!): UserCredentials
        addWatchListItem(stockId: ID!, addPrice: Int, noOfShares: Int): WatchListUpdateResponse
        removeWatchListItem(watchListItemId: ID!): WatchListUpdateResponse
        fetchStock(ticker: String!): HistoricalData
        addStock(ticker: String!): HistoricalData
        addCompany(stcokId: ID!, name: String!, desc: String, industry: String, sector: String): CompanyResponse
    }
    type HistoricalData {
        _id: ID
        stock: Stock
        currentPrice: Number!
        dividend: Number
        yield: Number
        open: Number
        dayHigh: Number
        dayLow: Number
        Volume: Int
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
    type CompanyResponse {
        success: Boolean!
        message: String
        companyId: ID
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
        watchList(_, __) {
            return WatchListItem.find({});
        },
        stock(_, { ticker }) {
            return Stock.find({ ticker: ticker });
        },
        // stocks(_, __)
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
        },
        // addStock: async(_, { ticker, currentPrice, dividend, yield, companyId, historicalDataId}, context) => {
        //     const loggedInUser = context.user;
        //     if (loggedInUser) {
        //         const company = 
        //         return Stock.addStock(ticker, currentPrice, dividend, yield, companyId, historicalDataId);
        //     }
        // }
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
        company: (_, { companyId }) => {
            const company = Company.findById(companyId);
            return company;
        },
        historicalData: (_, { historicalDataId }) => {
            const historicalData = HistoricalData.findById(historicalDataId);
            return historicalData;
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