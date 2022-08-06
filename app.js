const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');
const session = require('express-session');
const methodOverride = require("method-override");

const mainRouter = require('./src/routes/main');
const usersRouter = require('./src/routes/users');
const productsRouter = require('./src/routes/products');
const cartRouter = require('./src/routes/cart');

const cookieMiddleware = require('./src/middlewares/cookieLogin');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(session({
  secret:"petStore",
  resave:true,
  saveUninitialized:true,
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));
console.log(path.join(__dirname, 'public'))
app.use(favicon(path.join(__dirname, 'favicon.ico')))
app.use(cookieMiddleware);
app.use(methodOverride('_method'))

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);

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
