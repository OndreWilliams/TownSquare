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
// This is a list of definitions for the user validators:
const userValidators = [
    check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for First Name'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isEmail()
    .withMessage('The provided email address is not a valid email'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    // .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")')
    // If we wanted the passwords to be super secure as to have 1 lowercase letter, uppercase letter, number, and special character
    ,
  check('passwordConfirm')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Confirm Password does not match Password');
        }
        return true;
    })
]


router.post('/signup', csrfProtection, userValidators,
asyncHandler(async (req, res) => {
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
        try {
            await user.save();
            loginUser(req, res, user);
            res.redirect('/');
        }
        catch (err){
            const errors = ['User already has an account. Please login', 'Password request not available at this time.']
            res.render('signup', {
                user,
                errors,
                csrfToken: req.csrfToken()
            });
        }
    } else {
        const errors = validatorErrors.array().map(error => error.msg);
        res.render('signup', {
            user,
            errors,
            csrfToken: req.csrfToken()
        });
    }
}));


// Sign in path to /account
router.get('/', csrfProtection, function(req, res, next) {
    res.render('login', { title: 'Login', csrfToken: req.csrfToken() });
});
    // Set up validators to pass into /login
router.post('/signin', csrfProtection, async (req, res, next) => {
    // Validate user
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    console.log("POST /account/signin");
    console.log('REQ SESSION AUTH ====', req.session.auth);
    console.log('RES LOCALS USER ====', res.locals.user);


    const { username, password } = req.body;
    let errors = [];
    // If validation fails, redirect to /account/
    const user = await db.User.findOne({where: {username}});
    if(user !== null){
        const passwordMatch = await bcrypt.compare(password, user.hPassword.toString());
        if(passwordMatch){
            console.log('User logged in');
            loginUser(req, res, user);
            res.redirect('/');
        } else {
            errors.push('The provided credentials are not valid');
            res.render('login', { title: 'Login', csrfToken: req.csrfToken(), errors });
        }
    } else {
        errors.push('The provided credentials are not valid, please re-enter your information or visit our sign-up page if you need to create an account');
        res.render('login', { title: 'Login', csrfToken: req.csrfToken(), errors });
    }
    // Redirect to homepage
});


router.get('/signout', (req, res) => {
    logoutUser(req, res);
    res.redirect('/');
});
module.exports = router;
