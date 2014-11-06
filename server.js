'use strict';

var express			= require('express'),
	app            	= express(),
	port			= process.env.PORT || 3008,
	mongoose		= require('mongoose'),
	passport		= require('passport'),
	flash			= require('connect-flash'),
	morgan         	= require('morgan'),
	cookieParser	= require('cookie-parser'),
	bodyParser     	= require('body-parser'),
	session			= require('express-session'),
	methodOverride 	= require('method-override'),
	configDB 		= require('./app/config/database.js');

/*configuration*/
mongoose.connect(configDB.url);
require('./app/config/passport')(passport);

/*set-up express application*/
//app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

/*set view engine*/
//app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views');
app.use(express.static(__dirname + '/public'));

/*set-up for passport*/
app.use(session({secret: 'idiajoed289378djaoiiwdowaj'}));
app.use(passport.initialize());
/*for presistent login sessions*/
app.use(passport.session());
app.use(flash());

/*pass configured app and passport to route handler*/
require('./app/routes')(app, passport);
require('./app/api')(app);

/*special tasks for dev mode*/
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
   console.log('In dev mode...');
}

/*launch*/
app.listen(port);
console.log('Magic happens on port ' + port);