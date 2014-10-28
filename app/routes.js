'use strict';
module.exports = function(app, passport) {

	app.use(function(req, res, next) {
		console.log("Received query;:'" + req.path + "'");
		next();
	});

	app.get('/', function(req, res) {
		//res.render('index.ejs', { message: req.flash('loginMessage') });
        res.json({message: 'home page!'});
	});

	app.route('/login')
        .get(function(req, res) {
		//res.render('login.ejs', { message: req.flash('loginMessage') });
	    res.json({message: 'login page!'})
        })
        .post(passport.authenticate('local-login', {
            successRedirect : '/profile',
            failureRedirect : '/',
            failureFlash : true
        }));

	app.route('/signup')
        .get(function(req, res) {
		    res.render('signup.ejs', { message: req.flash('signupMessage') });
	    })
        .post(passport.authenticate('local-signup', {
			successRedirect : '/profile',
			failureRedirect : '/signup',
			failureFlash : true
		})
	);

	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user
		});
	});

	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/login');
}