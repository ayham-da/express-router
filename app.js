var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var carRouter = require('./routes/cars')
var clientRounter = require('./routes/clients')
var rapairRounter = require('./routes/rapairs')


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/cars', carRouter)
app.use('/clients', clientRounter)
app.use('/rapairs', rapairRounter)


module.exports = app;
