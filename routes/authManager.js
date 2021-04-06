const db = require('../db/models');

const loginUser = (req, res, user) => {
    req.session.auth = {username: user.username};
    console.log('*************************************');
    console.log(req.session.auth);
};

const restoreUser = async (req, res, next) => {

    if(req.session.auth){
        const { username } = req.session.auth;
        try {
            const user = await db.User.findOne({
                where: {username},
                include: Question
            });
            console.log('*************************************');
            console.log('*************************************');
            console.log(user);
            if(user){
                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }
        } catch (err) {
            res.locals.authenticated = false;
            next();
        }
    } else {
        res.locals.authenticated = false;
        next();
    }
};

const logoutUser = (req, res) => {
    delete req.session.auth;
};

const requireAuth = (req, res, next) => {
    if(!res.locals.authenticated){
        return res.redirect('/auth')
    }
};

module.exports = {
                    loginUser,
                    restoreUser,
                    logoutUser,
                    requireAuth
                };
