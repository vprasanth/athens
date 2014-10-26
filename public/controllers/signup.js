KenApp.controller('SignupCtrl', ['$scope', '$http', '$rootScope', '$location', '$window', RegisterController]);
  

function RegisterController($scope, $http , $rootScope,$location, $window ){
   //alert("Well WEll Well");
   $scope.signup= function(){
      alert("Submit Press");
      //signupUser _currentUser = new signupUser($scope.fullname, $scope.email, $scope.username, $scope.password);
      var _currentUser  = {
                           "_fullname":$scope.fullname,
                           "_email":$scope.email,
                           "_username":$scope.username,
                           "_password":$scope.password
                           };
      $http({
         url: '/AddUser',
         method: "POST",
         data: _currentUser
      }).success(function (data, status, headers, config) {
         //$rootScope.message = 'Authentication successful!';
         console.log('Authentication successful!');
         //alert("Success Registration");
         console.log('post success');
         console.log('data');
         console.log(data);
         console.log('status');
         console.log(status);
         console.log('headers');
         console.log(headers);
         console.log('config');
         console.log(config);
         $window.location.href = '/#/timeline';
          
      }).error(function (data, status, headers, config) {
         //$rootScope.message = 'Authentication failed.';
         console.log('Authentication failed!');
         alert("Failed Registration");
         console.log('post error');
         console.log('data');
         console.log(data);
         console.log('status');
         console.log(status);
         console.log('headers');
         console.log(headers);
         console.log('config');
         console.log(config);
      });
   }
}

// class signupUser{
   // String _fullname;
   // String _email;
   // String _username;
   // String _password;
   
   // signupUser(String fullname, String email, String username, String password){
      // _fullname = fullname;
      // _email = email;
      // _username = username;
      // _password = password;
   // }
// }