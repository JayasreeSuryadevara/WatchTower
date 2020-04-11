import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { typeDefs, resolvers } from './resolvers';
import { setContext } from "apollo-link-context";
import { CURRENT_USER } from './queries';

const createClient = async () => {
  const cache = new InMemoryCache({ dataIdFromObject: object => object._id });

  const errorLink = onError(({ networkError, graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path, extensions }) => {
        console.group("\x1b[31m%s\x1b[0m", "[GraphQL error] ", "Message: ", message);
        console.log("Location: ", locations);
        console.log("Path: ", path);
        console.log("Extensions: ", extensions)
        console.groupEnd();
      });
    }
    if (networkError) console.log("\x1b[31m%s\x1b[0m", "[Network error]:", networkError);
  });
 let uri = "/graphql"
 if (process.env.NODE_ENV !== "production"){
   uri = "http://localhost:5000/graphql"
 }
  const httpLink = new HttpLink({
    uri: uri,
    headers: {
      authorization: localStorage.getItem('token')
    }
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: localStorage.getItem('token')
      }
    };
  });

  const client = new ApolloClient({
    cache,
    link: authLink.concat(httpLink, errorLink),
    typeDefs,
    resolvers
  });

  // call resetStore whenever logging out
  client.onResetStore(() => {
    localStorage.clear();
  });

  if (localStorage.getItem('token')) {
    await client
      .query({ query: CURRENT_USER })
      .then(({ data }) => {
        // console.log(data); // comment this in to see what data returns
        // if there is no data or data.me is null, then reset the cache
        if (!data || !data.me) client.resetStore();
      });
  }

  return client;
};

export default createClient; 