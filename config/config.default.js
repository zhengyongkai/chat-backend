'use strict'
const path = require('path')

module.exports = (appInfo) => {
  const config = (exports = {
    security: {
      csrf: {
        enable: false
      }
    }
  })
  config.jwt = {
    secret: 'zyk_jwt'
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}'

  // add your config here
  config.middleware = []

  // change to your own sequelize configurations
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'chat',
    username: 'root',
    password: '123456'
  }
  config.static = {
    // 静态化访问前缀,如：`http://127.0.0.1:7001/static/images/logo.png`
    prefix: '/app/public',
    dir: path.join(appInfo.baseDir, 'app/public'), // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
    dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
    preload: false,
    maxAge: 31536000, // in prod env, 0 in other envs
    buffer: true // in prod env, false in other envs
  }
  exports.i18n = {
    defaultLocale: 'zh-CN'
  }

  return config
}
