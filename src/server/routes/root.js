import React from 'react';
import fetch from 'isomorphic-fetch';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from '@apollo/client';
import { renderToStringWithData } from '@apollo/client/react/ssr';
import { ServerStyleSheet } from 'styled-components';

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
        const sheet = new ServerStyleSheet();
        const serverRenderedHtml = await renderToStringWithData(
            sheet.collectStyles(
                <ApolloProvider client={apolloClient}>
                    <ShoppingList />
                </ApolloProvider>
            )
        );
        const initialState = JSON.stringify(apolloClient.extract());
        const styleTags = sheet.getStyleTags();
        sheet.seal();
        return res.render('root', { serverRenderedHtml, initialState, styleTags });
    });
}