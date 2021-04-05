'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Question, { foreignKey: 'userId'});
    User.hasMany(models.Comment, { foreignKey: 'userId'});
    User.hasMany(models.Vote, { foreignKey: 'userId'});
  };
  return User;
};
