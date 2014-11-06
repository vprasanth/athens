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
     templateUrl: 'views/register.html'//,
     //controller: 'RegisterCtrl'
   })
   .when('/timeline',{
     templateUrl: 'views/timeline.html',
     controller: 'TimelineCtrl'
   })
   .when('/public',{
     templateUrl: 'views/public.html',
     controller: 'PublicCtrl'
   })
   .when('/newpost',{
     templateUrl: 'views/newquestion.html',
     controller: 'NewPostCtrl'
   })
   .when('/NewPost',{   
      redirectTo: '/newpost'
   })
   .when('/question',{
     templateUrl: 'views/question.html'//,
     //controller: 'NewPostCtrl'
   })
   .otherwise({
     redirectTo: '/404.html'
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