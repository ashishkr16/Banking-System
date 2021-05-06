var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var exhbs = require('express-handlebars');
const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');


var usersRouter = require('./routes/users');
var transferRouter = require('./routes/transfer');

const db = require('./config/database');

// Test db
db.authenticate()
    .then(()=> console.log('Database Connected...'))
    .catch(err => console.log('Error: ' + err))

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', exhbs({
    defaultLayout:'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('homepage'));
app.use('/users', usersRouter);
app.use('/transfer', transferRouter);


module.exports = app;
