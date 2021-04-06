const express = require('express');
const router = express.Router();
const { requireAuth } = require('./authManager');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('****************************************');
    console.log(res.locals.user);
    console.log(res.locals.user.Questions)
    res.render('index', { title: 'a/A Express Skeleton Home', user: res.locals.user });
});

module.exports = router;
