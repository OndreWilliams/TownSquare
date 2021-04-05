'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    vote: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
  }, {});
  Vote.associate = function(models) {
    // associations can be defined here
    Vote.belongsTo(models.Comment, { foreignKey: 'commentId'});
    Vote.belongsTo(models.User, { foreignKey: 'userId'});
  };
  return Vote;
};
