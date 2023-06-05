'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async getUserInfo() {
    const { ctx } = this
    try {
      const result = await ctx.model.User.findByPk(1)
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }
}

module.exports = UserService
