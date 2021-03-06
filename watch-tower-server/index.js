const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const expressPlayground = require('graphql-playground-middleware-express').default;
const fetch = require('node-fetch');
const NewsKey = require("./config/keys").NewsApiKey;


require('./models');
const { schema, typeDefs, resolvers } = require('./schema');
const db = require('./config/keys').mongoURI;
const app = express();

const passport = require('passport');
require('./config/passport')(passport);
app.use(passport.initialize());

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

if (process.env.NODE_ENV !== 'production') {
  const cors = require('cors');
  app.use(cors({ origin: 'http://localhost:3000' }));
}

const morgan = require("morgan");
app.use(morgan("dev"));

const { graphqlLogger, passportAuthenticate } = require('./middlewares');

app.use(
  "/graphql",
  passportAuthenticate(passport),
  graphqlLogger(true),
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers
  })
);

app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get(`/headlinenews`, async (req, res) => {
  const url = `https://newsapi.org/v2/everything?q="headline"&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,businessinsider.com&pageSize=50&sortBy=publishedAt&apiKey=${NewsKey}`
  await fetch(url)
  .then(response => response.json())
  .then(json => res.json(json))
  .catch(err => console.log(err));
})

app.get(`/currentnews`, async (req, res) => {
  const url = `https://newsapi.org/v2/everything?q="stock market"&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,businessinsider.com&pageSize=50&sortBy=publishedAt&apiKey=${NewsKey}`
  const fetch_response = await fetch(url);
  const json = await fetch_response.json();
  res.json(json);
})

app.get(`/technologynews`, async (req, res) => {
  const url = `https://newsapi.org/v2/everything?q="technology stocks"&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,fool.com,seekingalpha.com,businessinsider.com,cnn.com&pageSize=50&sortBy=publishedAt&apiKey=${NewsKey}`
  const fetch_response = await fetch(url);
  const json = await fetch_response.json();
  res.json(json);
})

app.get(`/principlesofinvesting`, async (req, res) => {
  const url = `https://newsapi.org/v2/everything?q="investing principles"&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,fool.com,seekingalpha.com,businessinsider.com,cnn.com&pageSize=50&sortBy=publishedAt&apiKey=${NewsKey}`
  const fetch_response = await fetch(url);
  const json = await fetch_response.json();
  res.json(json);
})

app.get(`/companynews`, async (req, res) => {
  const company = req.query.q;
  const url = `https://newsapi.org/v2/everything?q=${company}&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,businessinsider.com&qInTitle=${company}&pageSize=15&sortBy=publishedAt&apiKey=${NewsKey}`
  const fetch_response = await fetch(url);
  const json = await fetch_response.json();
  res.json(json);
})

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static('build'));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
}