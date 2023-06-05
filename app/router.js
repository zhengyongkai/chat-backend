'use strict'
module.exports = (app) => {
  const { router, controller } = app
  router.get('/user/:id', controller.user.create)
}
