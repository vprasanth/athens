  // var mongoose = require('mongoose')
  // , User = mongoose.model('User');

// }]);
  
  //For Log OUT
  // KenApp.controller('NavbarCtrl', ['$scope', 'Auth', function($scope, Auth) {
    // $scope.logout = function() {
      // Auth.logout();
    // };
  // }]);


KenApp.controller('LoginCtrl', [ '$rootScope', '$scope', '$window', '$http', LoginController]);
function LoginController( $rootScope, $scope, $window, $http){
    // $rootScope.Questions = [
      // {Title:'Memory Allocation', Message:"I am having a hard time understanding this concept. Please explain in simple terms"},
      // {Title:'What is Node.js?', Message:"I don't fully get what Node.js is all about. Maybe it's because I am mainly a web based business application developer. What is it and what is the use of it? My understanding so far is that: The programming model is event driven, especially the way it handles I/O. It uses JavaScript and the parser is V8.It can be easily used to create concurrent server applications. Are my understandings correct? If yes, then what are the benefits of evented I/O, is it just more for the concurrency stuff? Also, is the direction of Node.js to become a framework like, JavaScript based (V8 based) programming model?"},
      // {Title:'How to set a model for a single view in Angular JS?', Message:'I have got a controller in Angular JS. In this controller i have got a $scope.users property : it is an array of users. This controller is used by two views: /users and /users/:id. I have seen that the $scope.users models is init each time i come to an user view. My question is simple how to do to get the $scope.users applied only to the /users view and not to the /users/:id view ? I have done this with the $location.path method, but i dont know if it is the right way. PS : I have got a factory to retrieve the users so i know it is a singleton ... Thx for your answers.'},
      // {Title:'Test Question', Message:'Testing'}         
   // ];  
   
   $scope.login = function(){
      console.log("So happy that I am gonna die");
     //alert($scope.username);
      //alert($scope.password);
      
      $http({
         url: '/login',
         method: "post",
         data: { 
                  username: $scope.username,
                  password: $scope.password, 
               }
      })
      .then(function(response) {
        // success
        console.log('Authentication successful!');
      }, 
      function(response) { // optional
        // failed
        console.log('Authentication failed!');
      }
      );
      
      /*
      $http.post('/login', {
         username: $scope.username,
         password: $scope.password,
      })
      .success(function(user){
         // No error: authentication OK
         console.log(user);
         $rootScope.message = 'Authentication successful!';
         console.log('Authentication successful!');
         //$location.url('/admin');
      })
      .error(function(){
         // Error: authentication failed
         $rootScope.message = 'Authentication failed.';
         console.log('Authentication failed!');
         $location.url('/login');
      });
    */
    // $httpProvider.responseInterceptors.push(function($q, $location) { 
         // return function(promise) { 
            // return promise.then( 
               // // Success: just return the response 
               // function(response){ 
                  // return response; 
               // }, 
               // // Error: check the error status to get only the 401 
               // function(response) { 
                  // if (response.status === 401) 
                     // $location.url('/login'); 
                  // return $q.reject(response); 
               // } 
            // ); 
         // } 
      // }); 
      
      // $http.post("/login").success(function(data) {
        // console.log('Success');
        // console.log(data);
      // }).error(function(data, status) {                                            
        // alert('Error! ' + status + ' : ' + data)                                  
      // })        

      if( $scope.username == "test" && $scope.password == "test")
         $window.location.href = '/#/timeline';
   }  ;
}

var controllers ={};
controllers.SimpleController = function($scope){
   $scope.customers = [
      {name:'Ken', city:'Toronto'},
      {name:'Harvey', city:'New York'},
      {name:'Nguyen', city:'London'}
   ]; 
};
 
KenApp.controller(controllers);


KenApp.factory('CtrlService', function() {
  var items = [];
  var additems = function(newObj) {
      console.log(newObj);
      items.push(newObj);
  }
  var getitems = function(){
      return items;
  }
  return {
    additems: additems,
    getitems: getitems
  };
});