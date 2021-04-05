const db = require('../db/models');

const loginUser = (req, res, user) => {
    req.session.auth = {userId: user.username};
};

const restoreUser = async (req, res, next) => {
    if(req.session.auth){
        const { username } = req.session.auth;
        try {
            const user = await db.User.findOne({where: {username}});
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

module.exports = {
                    loginUser,
                    restoreUser
                };
