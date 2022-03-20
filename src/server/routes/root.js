import React from 'react';
import fetch from 'isomorphic-fetch';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from '@apollo/client';
import { getDataFromTree } from '@apollo/client/react/ssr';

import ShoppingList from '../../universal/components/root';


const apolloClient = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
        uri: 'http://localhost:3000/graphql',
        fetch
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
            errorPolicy: 'all'
        },
        query: {
            fetchPolicy: 'cache-and-network',
            errorPolicy: 'all'
        }
    }
  });

module.exports = (app) => {
    app.get('/', async (req, res) => {
        const serverRenderedHtml = await getDataFromTree(
            <ApolloProvider client={apolloClient}>
                <ShoppingList />
            </ApolloProvider>
        );
        const initialState = JSON.stringify(apolloClient.extract());
        return res.render('root', { serverRenderedHtml, initialState });
    });
}