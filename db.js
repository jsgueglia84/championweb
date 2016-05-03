"use strict";
var mongoose = require('mongoose');
mongoose.connect('mongodb://jsgueglia:fuckoff124@ds013848.mlab.com:13848/heroku_7fshv9qr');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
	console.log('Connection Made!');
});
