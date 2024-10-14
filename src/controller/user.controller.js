const fs = require('fs');
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config');
const userService = require('../service/user.service');



class UserController {
  async create(ctx, next) {
    // 获取用户请求传递的参数
    const user = ctx.request.body;
    // 查询数据
    const result = await userService.create(user);
    const userId = result.insertId
    const token = jwt.sign({ id:userId, name:user.name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256'
    });
    // 返回数据
    ctx.body = { code:200,data:token }
    ctx.user={id:userId};
    next()
  }
  

  async avatarInfo(ctx, next) {
    // 1.用户的头像是哪一个文件呢?
    // const { userId } = ctx.params;
    // const avatarInfo = await fileService.getAvatarByUserId(userId);

    // // 2.提供图像信息
    // ctx.response.set('content-type', avatarInfo.mimetype);
    // ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`);
  }
}


module.exports = new UserController();
