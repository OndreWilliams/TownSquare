'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: DataTypes.STRING
  }, {});
  City.associate = function(models) {
    // associations can be defined here
    City.hasMany(models.Question, { foreignKey: 'cityId'});
  };
  return City;
};
