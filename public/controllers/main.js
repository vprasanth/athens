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
   
    $rootScope.currentURL = document.URL;
   
   $scope.login = function(){
      console.log("So happy that I am gonna die");
      alert($scope.username);
      alert($scope.password);
      
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
     if( $scope.username == "test" && $scope.password == "test")
         $rootScope.currentURL = "Seomthing else";
         alert($rootScope.currentURL);
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