const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const { loginUser, logoutUser } = require('./authManager');

router.get('/question/:id(\\d+)', async function (req, res, next) {
    const id = req.params.id;
    const question = await db.Question.findByPk(id);

    res.render('questionView', {
        question
      });
});

module.exports = router;
