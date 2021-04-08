'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Questions', [
            {
                content: 'What is the best jump trail in NWA?',
                userId: 3,
                cityId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Is there a holiday light show anywhere on the east side?',
                userId: 14,
                cityId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'How is the food at an Aces game? Worth it, or should we eat first?',
                userId: 8,
                cityId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Any recommendations for pizzaria style thin crust in town?',
                userId: 5,
                cityId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'I am finally going to NYC in April! Whats a good budget friendly hotel downtown?',
                userId: 7,
                cityId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Are there any good swimming holes near Bella Vista?',
                userId: 10,
                cityId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'What are the closest dunes to Carson City for dirt biking?',
                userId: 11,
                cityId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Any good family friendly flow trails near Rogers?',
                userId: 12,
                cityId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'What are the best NYC neighborhoods to raise a family in?',
                userId: 6,
                cityId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Any recommendations for chinese takeout?',
                userId: 9,
                cityId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'How often does Crystal Bridges change their displays?',
                userId: 16,
                cityId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: '2008 Ford F-150 with 106k miles for sale, $5400, post a response for more details',
                userId: 15,
                cityId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Whats the best ice cream shop near Times Square?',
                userId: 13,
                cityId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Can anyone tell me where I can safely take my kids hiking?',
                userId: 4,
                cityId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Any superbike meetups in the area?',
                userId: 10,
                cityId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'I want to take my wife out somewhere local that she would really appreciate for our anniversary. Recommendations?',
                userId: 13,
                cityId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Are there any downhill/enduro races scheduled in this area?',
                userId: 5,
                cityId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Are there swimming areas at the King Canyon Waterfall?',
                userId: 15,
                cityId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Questions', null, {});

  }
};
