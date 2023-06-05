'use strict'
const Controller = require('egg').Controller
class UserController extends Controller {
  async create() {
    const { ctx } = this
    const userInfo = await ctx.service.user.getUserInfo() // 获取用户信息
    ctx.body = { id: userInfo }
  }
}
module.exports = UserController
