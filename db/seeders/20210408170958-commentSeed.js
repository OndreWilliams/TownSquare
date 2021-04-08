'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Comments', [
            {
                content: 'Air Raid in Bella Vista',
                userId: 10,
                questionId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'I like the Lake Leatherwood trails most personally. Maybe DH6 or DH7',
                userId: 12,
                questionId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Madd Hatter is really good, also the new stuff in Centennial Park is sweet!',
                userId: 5,
                questionId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'There is only one that I know of in the Fablegreen neigborhood, but it gets PACKED!',
                userId: 7,
                questionId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'The biggest is in Fablegreen, but there is another one off of Brook-Mills',
                userId: 6,
                questionId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'We go to the Brook-Mills show every year, its great!',
                userId: 13,
                questionId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'How good can a $10 cold hot dog be?',
                userId: 11,
                questionId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'There are several good drive throughs in the area, eat first unless youre late.',
                userId: 9,
                questionId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'The experience for kids especially is worth the extra couple bucks... Get em a dog and a coke.',
                userId: 15,
                questionId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Sunshine Pizza!!! Oh, its so good!',
                userId: 16,
                questionId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Maybe Fezzaris?',
                userId: 10,
                questionId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'We like The Stone Oven!',
                userId: 3,
                questionId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Budget friendly downtown? Good luck.',
                userId: 13,
                questionId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'The Hilton is a good balance between price and comfort',
                userId: 14,
                questionId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'I stayed at SoHo 54, and was pleasantly surprised considering the price.',
                userId: 7,
                questionId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Sugar Creek is loaded with good spots. Find somewhere to park near it and swim',
                userId: 16,
                questionId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Yep, Sugar Creek',
                userId: 10,
                questionId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Sand Mountain is our go to.',
                userId: 11,
                questionId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Sand Pit at Tahoe is the closest',
                userId: 4,
                questionId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Yep, the best one Im pretty sure is actually called family flow, lol.',
                userId: 16,
                questionId: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'All American is perfect for all ages and skill levels, you wont be disappointed!',
                userId: 10,
                questionId: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Tribeca',
                userId: 13,
                questionId: 9,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Park Slope is nice',
                userId: 14,
                questionId: 9,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Battery Park, Tribeca, Prospect, Carroll Gardens... all really good places if you have little ones.',
                userId: 6,
                questionId: 9,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Yangs is delicious!',
                userId: 15,
                questionId: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'China Bistro or Yangs',
                userId: 4,
                questionId: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'I think they change it pretty often, maybe every few months. Cant say exactly.',
                userId: 5,
                questionId: 11,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'They change stuff all the time, but theres only so much that can change.',
                userId: 3,
                questionId: 11,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Can you post your own contact info atleast?',
                userId: 9,
                questionId: 12,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Theres a Ben & Jerrys right there on 44th',
                userId: 7,
                questionId: 13,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Amorino Gelato is close and amazing!',
                userId: 6,
                questionId: 13,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'My kids love Clear Creek, and its not too difficult',
                userId: 8,
                questionId: 14,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Tahoe East Shore is beautiful and family friendly',
                userId: 11,
                questionId: 14,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Look up Arkansas Sportbike Riders Club, I went on a scenic ride with them a few months ago, theyre laid back and dont go all street Rossi on public roads.',
                userId: 10,
                questionId: 15,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Staten Island Ferry, Brooklyn Botanic Garden, and Shakespeare Garden are all great choices',
                userId: 7,
                questionId: 16,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Top of the Empire State Building, just try not to knock her off her feet while your up there!',
                userId: 14,
                questionId: 16,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Yes, the Arkansas Enduro Series has several different events listed',
                userId: 3,
                questionId: 17,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Its great for hiking, unfortunately not so much for swimming though',
                userId: 9,
                questionId: 18,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'No, its not that deep. You could get wet, but you cant swim.',
                userId: 4,
                questionId: 18,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Comments', null, {});
    }
};
