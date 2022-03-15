const express = require('express');
/**
 * @param {express.Application} app
 */
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('root');
    });
}