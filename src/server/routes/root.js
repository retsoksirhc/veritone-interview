import React from 'react';
import ReactDOMServer from 'react-dom/server';

import ShoppingList from '../../universal/components/root';

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('root', { serverRenderedHtml: ReactDOMServer.renderToString(<ShoppingList />) });
    });
}