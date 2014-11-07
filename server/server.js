'use strict';

var config			= require('./config'),
	express			= require('express'),
	app            	= express(),
	log				= require('winston').loggers.get('app:server'),
	path			= require('path'),
	mongoose		= require('mongoose'),
	//passport		= require('passport'),
	//flash			= require('connect-flash'),
	morgan         	= require('morgan'),
	//cookieParser	= require('cookie-parser'),
	bodyParser     	= require('body-parser'),
	//session			= require('express-session'),
	methodOverride 	= require('method-override');

/*database configuration*/
mongoose.connect(config.mongo.url[0]);

// Configure passport, i.e. create login stratagies
//require('./config/passport')(passport);

/*set-up express application*/
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
//app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

/*set-up for passport*/
//app.use(session({secret: 'idiajoed289378djaoiiwdowaj'}));
//app.use(passport.initialize());
///*for presistent login sessions*/
//app.use(passport.session());
//app.use(flash());

//require('./routes')(app, passport);

// Configure API
var router = express.Router();
require('./questions/questionRoutes')(router);
app.use('/api', router);


// Start Server
app.listen(config.express.port, config.express.ip, function(err){
	if (err) {
		log.error('Unable to listen for connections', err);
		process.exit(10);
	}
	log.info('express is listening on http://' +
		config.express.ip + ':' + config.express.port);
});