var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');


var mongoDB = require('./db/mongoose');
var indexRouter = require('./routes/index');
var studentsRouter = require('./routes/students');

mongoDB.connect();

var app = express();

app.use(logger('dev'));

//enables cors
app.use(cors({
	'allowedHeaders': ['Content-Type'],
	'origin': '*',
	'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
	'preflightContinue': false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/students', studentsRouter);

module.exports = app;
