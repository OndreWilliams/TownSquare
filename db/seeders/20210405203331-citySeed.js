'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Cities', [
        { name: 'New York City', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Bentonville', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Carson City', createdAt: new Date(), updatedAt: new Date() }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Cities', null, {});
  }
};
