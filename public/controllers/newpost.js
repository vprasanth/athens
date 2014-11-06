KenApp.controller('NewPostCtrl', ['$rootScope', '$scope', '$http', '$window', '$timeout', 'CtrlService', NewPostController]);
  
function NewPostController($rootScope, $scope, $http, $window, $timeout, CtrlService){
   //alert("Let's start");
   $scope.date = Date.now(); // initialise the time variable
   $scope.tickInterval = 1000 //ms
   var tick = function() {
     $scope.date = Date.now() // get the current time
     $timeout(tick, $scope.tickInterval); // reset the timer
   }
   $timeout(tick, $scope.tickInterval);
   
   $scope.publishpost= function(){
      if($scope.title != " "  && $scope.message != " "){
      
         var _Question  = {
                     "_title":$scope.title,
                     "_question":$scope.message,
                     "_date":$scope.date, //why do I have to insert date ???
                     "_type":$scope.Questiontype
                     };
         $http({
            url: '/AddQuestion',
            method: "POST",
            data: _Question
         }).success(function (data, status, headers, config) {
            //$rootScope.message = 'Authentication successful!';
            console.log('Store Question successful!');
            alert("Success Post");
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
            console.log(' failed!');
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
         $rootScope.Questions.push({Title:$scope.title, Message:$scope.message});
         $scope.title = " ";
         $scope.message = " ";
         
      }
      $window.location.href = '/#/timeline';
   }
}

KenApp.controller('TimelineCtrl', [ '$rootScope', '$scope', '$http', '$window', 'CtrlService', TimelineController]);
function TimelineController($rootScope, $scope, $http, $window, CtrlService){
   $rootScope.currentURL = "Seomthing else";
   //$scope.Questions = $rootScope.Questions;
   alert("TimelineCtrl");
   var _Question  = {"_type":"Public"};
   
   $http({
      url: '/question',
      method: "GET",
      data: _Question
   }).success(function (data, status, headers, config) {  
         console.log("I have just received");
         console.log(data);
         $scope.questionsRES = data;
         
   }).error(function (data, status, headers, config) {
      /*$rootScope.message = 'Authentication failed.';
      // console.log(' failed!');
      // alert("Failed Get");
      // console.log('post error');
      // console.log('data');
      // console.log(data);
      // console.log('status');
      // console.log(status);
      // console.log('headers');
      // console.log(headers);
      // console.log('config');
      // console.log(config);*/
      
   });
   
   
}



