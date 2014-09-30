'use strict';

var express			= require('express'),
	app            	= express(),
	port			= process.env.PORT || 8080,
	mongoose		= require('mongoose'),
	passport		= require('passport'),
	flash			= require('connect-flash'),
	morgan         	= require('morgan'),
	cookieParser	= require('cookie-parser'),
	bodyParser     	= require('body-parser'),
	session			= require('express-session'),
	methodOverride 	= require('method-override'),
	configDB 		= require('./config/database.js');

/*configuration*/
mongoose.connect(configDB.url);
require('./config/passport')(passport);

/*set-up express application*/
//app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

/*set view engine*/
app.set('view engine', 'ejs');

/*set-up for passport*/
app.use(session({secret: 'idiajoed289378djaoiiwdowaj'}));
app.use(passport.initialize());
/*for presistent login sessions*/
app.use(passport.session());
app.use(flash());

/*pass configured app and passport to route handler*/
require('./app/routes')(app, passport);


/*special tasks for dev mode*/
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
   console.log('In dev mode...');
}

/*launch*/
app.listen(port);
console.log('Magic happens on port ' + port);