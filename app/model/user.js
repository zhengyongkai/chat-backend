'use strict'

module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize
  const User = app.model.define(
    'chat_user',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: STRING(255)
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  )

  return User
}
