const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const { loginUser, logoutUser, requireAuth } = require('./authManager');
// This newPost router is going to be where we are able post our questions and answers
router.get('/question', requireAuth, function (req, res, next) {
    const question = db.Question.build();
    res.render('question', {
        question
      });
})
const questionValidators = [
    check('content')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a question')
]
router.post('/question', questionValidators, asyncHandler(async (req, res) => {
    const {
      content,
    } = req.body;
    console.log(content)
    const question = db.Question.build({
      content,
      userId: res.locals.user.id,
      cityId: 1
    });
    console.log('!!!! ----- ')
    console.log(res.locals.user)
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      await question.save();
      res.redirect('/');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      console.log(errors)
      res.render('question', {
        question,
        errors,
      });
    }
}));
module.exports = router;
