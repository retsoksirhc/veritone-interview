import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fetch from 'isomorphic-fetch';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from '@apollo/client';
import { getDataFromTree } from '@apollo/client/react/ssr';

import ShoppingList from '../../universal/components/root';
import gqlSchema from '../gql/schema';
import gqlResolvers from '../gql/resolvers';

const apolloClient = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
        uri: 'http://localhost:3000/graphql',
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
        },
        query: {
            fetchPolicy: 'no-cache',
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