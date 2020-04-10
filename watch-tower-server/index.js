const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const expressPlayground = require('graphql-playground-middleware-express').default;


require('./models');
const { schema, typeDefs, resolvers } = require('./schema');
const db = require('./config/keys').mongoURI;
const app = express();
const path = require('path');

const passport = require('passport');
require('./config/passport')(passport);
app.use(passport.initialize());

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
}
  
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