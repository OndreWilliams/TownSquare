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
                    include: [
                        {
                            model: db.Vote
                        }
                    ]
            },
            {
                model: db.City
            }
        ]
    });
    for(let i = 0; i < allQuestions.length; i++){

        let randomViews = Math.floor( Math.random() * 35) + 10;

        let votes = 0;
        for(let j = 0; j < allQuestions[i].Comments.length; j++){
            votes += allQuestions[i].Comments[j].Votes.length;
        }

        allQuestions[i].totalViews = randomViews;
        allQuestions[i].totalVotes = votes;
        allQuestions[i].totalComments = allQuestions[i].Comments.length;
        allQuestions[i].cityName = allQuestions[i].City.name;
        allQuestions[i].cityId = allQuestions[i].City.id;
    }

    res.render('index', { title: 'a/A Express Skeleton Home', user: res.locals.user, allQuestions});
});

router.post('/search', async (req, res) => {
    const {searchQuery} = req.body;
    const questionsFiltered = await db.Question.findAll({where:{
        content: {
            [Op.like]: `%${searchQuery}%`
        }
    }});
    console.log(questionsFiltered);
    const allQuestions = questionsFiltered;
    // console.log('****************************************');
    // console.log(res.locals.filteredQuestions);
    res.render('index', { title: 'a/A  Home', user: res.locals.user, allQuestions });
});

router.get('/about', async(req, res)=> {
    res.render('about')
})
module.exports = router;
