const mongoose = require('mongoose');
const { makeExecutableSchema } = require('graphql-tools');
const User = mongoose.model("User");
const Stock = mongoose.model("Stock");
const WatchListItem = mongoose.model("WatchListItem");
const Company = mongoose.model("Company");
const HistoricalData = mongoose.model("HistoricalData");
const updateHistData = require('./updateHistData');

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
        addPrice: Float
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
        dividend: Float
        yield: Float
        industry: String
        sector: String
    }
    type HistoricalData {
        _id: ID!
        open: Float
        dayHigh: Float
        dayLow: Float
        currentPrice: Float
        volume: Float
        changePercent: String
        stockId: ID!
    }
    type Query {
        me: User
        watchListItem(_id: ID!): WatchListItem
        watchList: [WatchListItem]
        stock(ticker: String!): Stock
        stocks: [Stock]
        company(name: String!): Company
        companies: [Company]
        historicalData(ticker: String!): HistoricalData
    }
    type Mutation {
        login(email: String!, password: String!): UserCredentials
        signup(email: String!, name: String!, password: String!): UserCredentials
        changePassword(oldPassword: String!, newPassword: String!): UserCredentials
        addWatchListItem(ticker: String!): WatchListUpdateResponse
        removeWatchListItem(watchListItemId: ID!): WatchListUpdateResponse
        updateWatchListItem(newNoOfShares: Int, watchListItemId: ID!): WatchListUpdateResponse
        addStock(ticker: String!): StockDataResponse
        addCompany(ticker: String!, name: String!, desc: String, dividend: Float, yield: Float, industry: String, sector: String): CompanyResponse
        addHistoricalData(open: Float, dayHigh: Float, dayLow: Float, currentPrice: Float, volume: Float, changePercent: String, stockId: ID): HistoricalDataResponse
        updateHistoricalData(open: Float, dayHigh: Float, dayLow: Float, currentPrice: Float, volume: Float, changePercent: String): HistoricalDataResponse
        fetchAndUpdateHistData(): updateResponse
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
        company: Company
    }
    type StockDataResponse {
        success: Boolean!
        stock: Stock
    }
    type HistoricalDataResponse {
        success: Boolean!
        message: String
        historicalData: HistoricalData
    }
    type updateResponse {
        success: Boolean!
        message: String
        allData: [HistoricalDataResponse]
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
            return Stock.findOne({ ticker: ticker });
        },
        stocks(_, __) {
            return Stock.find({});
        },
        company(_, { name }) {
            return Company.findOne({ name: name })
        },
        companies(_, __) {
            return Company.find({});
        },
        historicalData: async (_, { ticker }) => {
            const stock = await Stock.findOne({ ticker: ticker });
            return HistoricalData.findOne({ stockId: stock._id })
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
        addWatchListItem: async (_, { ticker }, context) => {
            const loggedInUser = context.user;
            if (loggedInUser) {
                return WatchListItem.addWatchListItem(ticker, loggedInUser);
            }
        },
        removeWatchListItem: async(_, { watchListItemId }, context) => {
            const loggedInUser = context.user;
            const watchListItem = await WatchListItem.findById(watchListItemId);
            return watchListItem.removeWatchListItem(loggedInUser);
        },
        updateWatchListItem: async (_, { newNoOfShares, watchListItemId }, context) => {
            const loggedInUser = context.user;
            const watchListItem = await WatchListItem.findById(watchListItemId);
            watchListItem.noOfShares = newNoOfShares;
            await watchListItem.save();
            return {
                success: true,
                message: "Number of shares changed.",
                watchListItem: watchListItem._id
            }
            //////////
        },
        addStock: async(_, { ticker }) => {
           const stock =  Stock.addStock(ticker);
           const result = updateHistData(stock);
           if (result.success){
               return {
                   success: true,
                   stock: stock
               }
           } else {
               return {
                   success: false,
                   stock: stock
               }
           }
        },
        addCompany: async(_ ,{ ticker, name, desc, dividend, yield, industry, sector}) => {
            let stock = await Stock.findOne({ticker: ticker});
            if (!stock){
                stock = await Stock.addStock({ticker: ticker});
            }
            return Company.addCompany({
                stock: stock, 
                name: name, 
                desc: desc, 
                dividend: dividend, 
                yield: yield, 
                industry: industry, 
                sector: sector
            });
        },
        addHistoricalData(_, { open, dayHigh, dayLow, currentPrice, volume, changePercent, stockId}) {
            return HistoricalData.addHistoricalData({
                open: open,
                dayHigh: dayHigh,
                dayLow: dayLow,
                currentPrice: currentPrice,
                volume: volume,
                changePercent: changePercent,
                stockId: stockId
            });
        },
        updateHistoricalData(_, { open, dayHigh, dayLow, currentPrice, volume, changePercent }) {
            return HistoricalData.updateHistoricalData({
                open: open,
                dayHigh: dayHigh,
                dayLow: dayLow,
                currentPrice: currentPrice,
                volume: volume,
                changePercent: changePercent
            });
        },
        fetchAndUpdateHistData: async (_,__) => {
            const stocks = await Stock.find({})
            return updateHistData(stocks);
        }
    },
    User: {
        watchList: async (parentValue, _, context) => {
            const queriedUser = parentValue;
            const loggedInUser = context.user;
            if (loggedInUser && queriedUser._id === loggedInUser._id) {
                await loggedInUser.populate('watchList').execPopulate();
                return loggedInUser.watchList;
            }
            return null;
        }
    },
    Company: {
        stock: async (parentValue, _) => {
            const company = parentValue;
            await company.populate('stock').execPopulate();
            return company.stock;
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