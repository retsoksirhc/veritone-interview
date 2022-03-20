import React from 'react';
import ReactDOM from 'react-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from '@apollo/client';

import ShoppingList from './components/root';

const initialState = JSON.parse(window.__INITIAL_STATE__);
const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache().restore(initialState)
});

ReactDOM.hydrate(
    <ApolloProvider client={client}>
        <ShoppingList />
    </ApolloProvider>,
    document.getElementById('root'),
);

