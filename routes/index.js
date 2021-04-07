const express = require('express');
const router = express.Router();
const { requireAuth } = require('./authManager');
const db = require('../db/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
/* GET home page. */
router.get('/', async function(req, res, next) {
    // console.log('****************************************');
    // console.log(res.locals.allQuestions)
    const allQuestions = await db.Question.findAll();
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
module.exports = router;
