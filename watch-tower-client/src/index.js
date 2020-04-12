import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "@apollo/react-hooks";
import createClient from './graphql/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import gql from "graphql-tag";
import './index.css';

createClient().then(client => {
  if (process.env.NODE_ENV === 'development') {
    window.client = client;
    window.gql = gql;
  }
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById("root")
  );
});

serviceWorker.unregister();
