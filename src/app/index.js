const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const errorHandler = require('./error-handle');
const useRoutes = require('../router/index');
const app = new Koa();
app.use(bodyParser());

app.useRoutes = useRoutes;

app.useRoutes();
app.on('error', errorHandler);

module.exports = app;
