'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Users', [
            {
                username: 'Visitor',
                email: 'visitor@demo.com',
                hPassword: bcrypt.hashSync('password', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'William',
                email: 'william@admin.com',
                hPassword: bcrypt.hashSync('WillWord', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'Devin',
                email: 'devin@admin.com',
                hPassword: bcrypt.hashSync('DevinWord', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'Chaouac',
                email: 'chaouac@admin.com',
                hPassword: bcrypt.hashSync('ChaouacWord', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'Melissa',
                email: 'melissa@demo.com',
                hPassword: bcrypt.hashSync('MelissaWord', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'Amber',
                email: 'Amber@admin.com',
                hPassword: bcrypt.hashSync('AmberWord', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'Bryson',
                email: 'Bryson@admin.com',
                hPassword: bcrypt.hashSync('BrysonWord', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'Hope',
                email: 'Hope@admin.com',
                hPassword: bcrypt.hashSync('HopeWord', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'London',
                email: 'london@demo.com',
                hPassword: bcrypt.hashSync('LondonWord', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'PastaGirl',
                email: 'pastagirl@admin.com',
                hPassword: bcrypt.hashSync('PastaGirlWord', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'MotoRacer',
                email: 'MotoRacer@admin.com',
                hPassword: bcrypt.hashSync('MotoRacerWord', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'CodeBunny',
                email: 'CodeBunny@admin.com',
                hPassword: bcrypt.hashSync('CodeBunnyWord', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'TrailRipper',
                email: 'TrailRipper@demo.com',
                hPassword: bcrypt.hashSync('TrailRipperWord', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'StillTraveler',
                email: 'StillTraveler@admin.com',
                hPassword: bcrypt.hashSync('StillTravelerWord', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'CitySlick',
                email: 'CitySlick@admin.com',
                hPassword: bcrypt.hashSync('CitySlickWord', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'DesertDog',
                email: 'DesertDog@admin.com',
                hPassword: bcrypt.hashSync('DesertDogWord', 8),
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Users', null, {});

  }
};
