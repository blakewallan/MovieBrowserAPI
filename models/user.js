'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.user.hasMany(models.favorite);
      }
    }
  });
  return user;
};