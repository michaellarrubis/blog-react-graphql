import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import jwtDecode from "jwt-decode";

import { store } from "../redux";
import { authLogout } from "../redux/modules/auth/authActions";

const authLink = setContext((_, { headers }) => {
  const currentUser = localStorage.getItem("currentUser");
  const token = currentUser ? JSON.parse(currentUser).access_token : null;

  if (token) {
    const { exp } = jwtDecode(token);

    if (Date.now() > exp * 1000 - 60000) {
      store.dispatch(authLogout());
    }
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const httpLink = ApolloLink.from([
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  }),
  createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI,
    fetchOptions: {
      mode: "cors",
    },
  }),
]);

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
