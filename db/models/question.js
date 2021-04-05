'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    cityId: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    Question.hasMany(models.Comment, { foreignKey: 'commentId'});
    Question.belongsTo(models.User, {foreignKey: 'userId'});
    Question.belongsTo(models.City, {foreignKey: 'cityId'});
  };
  return Question;
};
