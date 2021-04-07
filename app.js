const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { restoreUser } = require('./routes/authManager')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const accountRouter = require('./routes/accountHandler');
const newPostRouter = require('./routes/newPost');




// changing route from auth
const app = express();
// view engine setup
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'styles')));
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));
// set up session middleware
const store = new SequelizeStore({ db: sequelize });
const { sessionSecret } = require('./config');
app.use(
  session({
    secret: sessionSecret,
    store,
    saveUninitialized: false,
    resave: false,
    name: 'townsquare.sid'
  })
);
// create Session table if it doesn't already exist
store.sync();
app.use(restoreUser);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/account', accountRouter);
app.use('/new', newPostRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
