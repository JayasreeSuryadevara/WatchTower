const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const expressPlayground = require('graphql-playground-middleware-express').default;


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

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));


app.get('/headlinenews', async (req, res) => {
  const url = `https://newsapi.org/v2/everything?q="headline"&language=en&domains=wsj.com,nytimes.com,cnbc.com,foxbusiness.com,businessinsider.com&pageSize=50&sortBy=publishedAt&apiKey=9728360b8b3b4c58a97cc5de418daf3a`
  const fetch_response = await fetch(url);
  const json = await fetch_response.json();
  res.json(json);
})