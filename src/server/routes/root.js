import React from 'react';
import ReactDOMServer from 'react-dom/server';

import ShoppingList from '../../universal/shoppingList';

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('root', { serverRenderedHtml: ReactDOMServer.renderToString(<ShoppingList />) });
    });
}