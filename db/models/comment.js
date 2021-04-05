'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: 'userId'});
    Comment.belongsTo(models.Question, { foreignKey: 'questionId'});
    Comment.hasMany(models.Vote, { foreignKey: 'commentId'});
  };
  return Comment;
};
