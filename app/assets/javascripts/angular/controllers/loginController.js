app.controller('loginController', ['$scope', 'userFactory', '$location', '$cookies','Upload', "$routeParams", "$rootScope","$uibModal", function($scope, userFactory, $location, $cookies, Upload, $routeParams, $rootScope,$uibModal){

$scope.login = function(){
  userFactory.login($scope.login_user, function(data){
    if(data.errors){
      $scope.errors = data.errors
      console.log("Errors", $scope.errors)
    }
    else{
      console.log("data is", data);
      $rootScope.signed_in = true
      $rootScope.current_user = data
      console.log("current user is", $rootScope.current_user);
      $cookies.put("id", data.user.id)
      $rootScope.current_user_id = $cookies.get('id')
      $scope.cancel();
      $location.url("/home");
    }
  })
}
  $scope.cancel = function(){
    $scope.$dismiss()
  }
}])
