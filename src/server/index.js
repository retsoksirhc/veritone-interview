import path from 'path';
import express from 'express';
import {create} from 'express-handlebars';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

import routes from './routes/index.js';
import gqlSchema from './gql/schema.js';
import gqlResolvers from './gql/resolvers.js';

const port = 3000;

const init = async() => {
    const app = express();
    routes.forEach(route => route(app));
    app.use(express.static('build'));

    app.engine('hbs', create({extname: '.hbs'}).engine);
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'views/'));

    app.use('/graphql', graphqlHTTP({
        schema: buildSchema(gqlSchema),
        rootValue: gqlResolvers,
        graphiql: true,
    }));
    app.listen(port, () => `Server started on port ${port}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();