var KenApp = angular.module('KenApp', [ 'ngMessages', 'ngRoute', 'ngResource'])
.config(function($routeProvider) {
   $routeProvider
   .when('/', {
     templateUrl: 'views/login.html',
     controller: 'LoginCtrl'
   })
   .when('/login',{
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
   })
   .when('/register',{
     templateUrl: 'views/register.html',
     controller: 'SignupCtrl'
   })
   // .when('/template',{
     // templateUrl: 'views/home.html',
     // controller: 'MainCtrl'
   // })
   // // .when('/home',{
     // // redirectTo:'/template'
   // // })
   .when('/timeline',{
     templateUrl: 'views/timeline.html',
     controller: 'TimelineCtrl'
   })
    // .when('/archive',{
     // templateUrl: 'views/archive.html',
     // controller: 'ArchiveCtrl'
   // })
   .when('/NewPost',{     //New Post
     templateUrl: 'views/newpost.html',
     controller: 'NewPostCtrl'
   })
   .when('/newpost',{   
      redirectTo: '/NewPost'
   })
   .otherwise({
     redirectTo: '/login'
   });
});



/*KenApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
   $routeProvider
   .when('/', {
     templateUrl: 'views/login.html',
     controller: ''
   })
   .when('/login',{
     templateUrl: 'views/login.html',
     controller: ''
   })
   .when('/register',{
     templateUrl: 'views/register.html',
     controller: ''
   })
   .when('/template',{
     templateUrl: 'views/home.html',
     controller: ''
   })
   .otherwise({
     redirectTo: '/login'
   });
}]);
*/