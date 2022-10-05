const express = require('express');

const prodructsRouter = require('./products.router');
// const catergoriesRouter = require('./categories.router');
// const usersRouter = require('./users.router');

function routerApi(app) {
    const router = express.Router();

    app.use('/api/v1', router);
    router.use('/products', prodructsRouter);
    // router.use('/categories', catergoriesRouter);
    // router.use('/users', usersRouter);
}

module.exports = routerApi;
