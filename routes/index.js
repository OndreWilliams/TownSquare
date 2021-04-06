const express = require('express');
const router = express.Router();
const { requireAuth } = require('./authManager');

/* GET home page. */
router.get('/', requireAuth, function(req, res, next) {
    console.log(res.locals);
    res.render('index', { title: 'a/A Express Skeleton Home' });
});

module.exports = router;
