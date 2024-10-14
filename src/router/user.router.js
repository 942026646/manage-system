const Router = require('koa-router');
const {
  create,
  // avatarInfo
} = require('../controller/user.controller');
const {
  saveAvatarInfo,
} = require('../controller/file.controller');
const {
  verifyUser,
  handlePassword
} = require('../middleware/user.middleware');
const {
  avatarHandler,
} = require('../middleware/file.middleware');


const userRouter = new Router({prefix: '/users'});



userRouter.post("/",avatarHandler,verifyUser,handlePassword,create,saveAvatarInfo)
module.exports = userRouter;
