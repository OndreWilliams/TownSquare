const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const { loginUser, logoutUser } = require('./authManager');

router.get('/signup', csrfProtection, (req, res, next) => {
    const user = db.User.build();
    res.render('signup', { title: 'Sign Up', user, csrfToken: req.csrfToken() });

});

router.post('/signup', csrfProtection, asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const user = db.User.build({
        username,
        email,
    });

    const validatorErrors = validationResult(req);
    if(validatorErrors.isEmpty()){
        const hashed = await bcrypt.hash(password, 8);
        user.hPassword = hashed;
        console.log(user, hashed);
        await user.save();
        loginUser(req, res, user);
        res.redirect('/');
    } else {
        const errors = validatorErrors.array().map(error => error.msg);
        res.render('/signup', {
            user,
            errors,
            csrfToken: req.csrfToken()
        });
    }
}));
// Login path to /auth
router.get('/', csrfProtection, function(req, res, next) {
    res.render('login', { title: 'Login', csrfToken: req.csrfToken() });

});
    // Set up validators to pass into /login
router.post('/login', csrfProtection, async (req, res, next) => {
    // Validate user
    const { username, password } = req.body;
    let errors = [];

    // If validation fails, redirect to /auth/
    const user = await db.User.findOne({where: {username}});
    if(user !== null){
        const passwordMatch = await bcrypt.compare(password, user.hPassword.toString());
        if(passwordMatch){
            console.log('User logged in');
            loginUser(req, res, user);
            res.redirect('/');
        } else {
            errors.push('The provided credentials are not valid');
            res.redirect('/');
        }
    } else {
        errors.push('The provided credentials are not valid, please re-enter your information or visit our sign-up page if you need to create an account');
        res.redirect('/');
    }
    // Redirect to homepage



});

router.post('/logout', (req, res) => {
    logoutUser(req, res);
    res.redirect('/');
});

module.exports = router;
