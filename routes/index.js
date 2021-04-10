const express = require('express');
const router = express.Router();
const { requireAuth } = require('./authManager');
const db = require('../db/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
/* GET home page. */
router.get('/', async function(req, res, next) {

    const allQuestions = await db.Question.findAll({
        include: [
            {
                model: db.Comment,
                    include: [{ model: db.Vote }]
            },
            {
                model: db.City
            }
        ]
    });
    createCustomData(allQuestions);

    res.render('index', { title: 'a/A Express Skeleton Home', user: res.locals.user, allQuestions});
});

router.post('/search', async (req, res) => {
    const {searchQuery} = req.body;
    const questionsFiltered = await db.Question.findAll({
        where:{
            content: { [Op.like]: `%${searchQuery}%` }
        },
        include: [
            {
                model: db.Comment,
                    include: [{ model: db.Vote }]
            },
            {
                model: db.City
            }
        ]
    });
    const allQuestions = questionsFiltered;
    createCustomData(allQuestions);

    res.render('index', { title: 'a/A  Home', user: res.locals.user, allQuestions });
});

router.get('/about', async(req, res)=> {
    res.render('about')
})

const createCustomData = (dataObj) => {
    for(let i = 0; i < dataObj.length; i++){

        let randomViews = Math.floor( Math.random() * 35) + 10;

        let votes = 0;
        for(let j = 0; j < dataObj[i].Comments.length; j++){
            votes += dataObj[i].Comments[j].Votes.length;
        }

        dataObj[i].totalViews = randomViews;
        dataObj[i].totalVotes = votes;
        dataObj[i].totalComments = dataObj[i].Comments.length;
        dataObj[i].cityName = dataObj[i].City.name;
        dataObj[i].cityId = dataObj[i].City.id;
    }
};

module.exports = router;
