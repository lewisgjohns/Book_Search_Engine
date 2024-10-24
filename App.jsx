import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem('token') || ''
  }
});

const App = () => (
  <ApolloProvider client={client}>
    {/* Your routes and components here */}
  </ApolloProvider>
);
