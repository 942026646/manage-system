const Router = require('koa-router');

const authRouter = new Router();


const {
  login,
  success
} = require('../controller/auth.controller');
const {
  verifyLogin,
  verifyRegist
} = require('../middleware/auth.middleware');
authRouter.post('/login', verifyLogin, login);

module.exports = authRouter;
