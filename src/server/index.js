const path = require('path');
const express = require('express');
const {create} = require('express-handlebars');
const routes = require('./routes/index.js');

const port = 3000;

const init = async() => {
    const app = express();
    routes.forEach(route => route(app));
    app.use(express.static('build'));
    app.engine('hbs', create({extname: '.hbs'}).engine);
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'views/'));
    app.listen(port, () => `Server started on port ${port}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();