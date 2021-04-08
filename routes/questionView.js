const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const { loginUser, logoutUser, requireAuth } = require('./authManager');
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/question/:id(\\d+)', requireAuth, async (req, res, next) => {
    const id = req.params.id;
    const question = await db.Question.findOne({
        where: {id},
        include: [{
          model: db.Comment,
          include: [{
            model: db.Vote
          }]
        }]
    });

    for(let i = 0; i < question.Comments.length; i++){
        let count = 0;
        for(let j = 0; j < question.Comments[i].Votes.length; j++ ){
            if(question.Comments[i].Votes[j].vote === 1)
                count++;
            else
                count--;
        }
        question.Comments[i].voteCount = count;
    }
    console.log(question);
    res.render('questionView', {
        question, comments: question.Comments, totalLikes: 0
      });
});

const answerValidators = [
    check('content')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a answer')
]

router.post('/answer', answerValidators, asyncHandler(async (req, res) => {
    console.log('************************************');
    console.log('Attempting to post answer');
    const {
      content,
      questionId
    } = req.body;
    console.log(content)
    const answer = db.Comment.build({
      content,
      userId: res.locals.user.id,
      questionId
    });
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      await answer.save();
      res.redirect(`/questionView/question/${questionId}`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      console.log(errors)
      res.redirect(`/questionView/question/${questionId}`);
    }
}));

router.post('/upvote', async (req, res) => {
    const userId = res.locals.user.id;
    const commentId = req.body.vote;
    const questionId = req.body.questionId;
    const existingVote = await db.Vote.findOne({ where: {userId, commentId}});

    if(!existingVote){
        db.Vote.create({
            vote: 1,
            userId,
            commentId
        });
    } else {
        if(existingVote.vote === 1)
            existingVote.destroy();
        else
            existingVote.update({
                vote: 1
            });
    }
    res.redirect(`/questionView/question/${questionId}`);
});

router.post('/downvote', async (req, res) => {
    const userId = res.locals.user.id;
    const commentId = req.body.vote;
    const questionId = req.body.questionId;
    const existingVote = await db.Vote.findOne({ where: {userId, commentId}});

    if(!existingVote){
        db.Vote.create({
            vote: -1,
            userId,
            commentId
        });
    } else {
        if(existingVote.vote === -1)
            existingVote.destroy();
        else
            existingVote.update({
                vote: -1
            });
    }
    res.redirect(`/questionView/question/${questionId}`);
});
module.exports = router;
