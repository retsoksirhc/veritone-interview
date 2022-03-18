import React from 'react';
import ReactDOM from 'react-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from '@apollo/client';

import ShoppingList from './shoppingList.jsx';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

ReactDOM.hydrate(
    <ApolloProvider client={client}>
        <ShoppingList />
    </ApolloProvider>,
    document.getElementById('root'),
);

