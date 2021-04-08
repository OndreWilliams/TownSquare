'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('People', [
        {
            vote: 1,
            userId: 3,
            commentId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 5,
            commentId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 16,
            commentId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 3,
            commentId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 6,
            commentId: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 7,
            commentId: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 9,
            commentId: 7,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 8,
            commentId: 7,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            vote: 1,
            userId: 14,
            commentId: 7,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 15,
            commentId: 7,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            vote: 1,
            userId: 3,
            commentId: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 10,
            commentId: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            vote: 1,
            userId: 12,
            commentId: 12,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 13,
            commentId: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 7,
            commentId: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 3,
            commentId: 16,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 10,
            commentId: 16,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 3,
            commentId: 16,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 10,
            commentId: 16,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 15,
            commentId: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 9,
            commentId: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 5,
            commentId: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 12,
            commentId: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 7,
            commentId: 24,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 14,
            commentId: 24,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 9,
            commentId: 26,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 15,
            commentId: 26,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 3,
            commentId: 29,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 14,
            commentId: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 7,
            commentId: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 13,
            commentId: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 9,
            commentId: 32,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 11,
            commentId: 32,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 9,
            commentId: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 11,
            commentId: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 6,
            commentId: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 7,
            commentId: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 4,
            commentId: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 3,
            commentId: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 10,
            commentId: 37,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 5,
            commentId: 37,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 11,
            commentId: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vote: 1,
            userId: 15,
            commentId: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('People', null, {});
  }
};
