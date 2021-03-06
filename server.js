const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override')


// load the env vars
require('dotenv').config();

// create the Express app
const app = express();

// connect to the MongoDB with mongoose
require('./config/database');
require('./config/passport');

// require our routes
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
// After template
const indexRouter = require('./routes/index');
const gamesRouter = require('./routes/games');
const bringsRouter = require('./routes/brings');
const votesRouter = require('./routes/votes');
const wishlistsRouter = require('./routes/wishlists');
// const commentsRouter = require('./routes/comments');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// router middleware
// mount all routes with appropriate base paths
app.use('/', usersRouter); 

// After template
app.use('/', indexRouter);
app.use('/', gamesRouter);
app.use('/', bringsRouter);
app.use('/', votesRouter);
app.use('/', wishlistsRouter);
// app.use('/', commentsRouter);
app.use('/auth', authRouter) // auth


// invalid request, send 404 page
// app.use(function(req, res) {
//   res.status(404).send('Cant find that!');
// });

// Custom error page:
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
