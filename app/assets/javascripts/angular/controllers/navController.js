
app.controller("navController", ["$scope", "userFactory", "$location", "$cookies", "$uibModal", "$rootScope", "$timeout", function($scope, userFactory, $location, $cookies, $uibModal, $rootScope, $timeout){
  if($cookies.get('id')){
    $rootScope.current_user_id = $cookies.get('id')
    $rootScope.signed_in = true
    userFactory.getUser($rootScope.current_user_id, function(data){
      if(data.err){
        console.log(data.err)
      } else{
        $rootScope.current_user = data
      }
    })
  }else{
    $rootScope.signed_in = false
    $location.url('/login')
  }


  $scope.logout = function(){
    $cookies.remove("id");
    $rootScope.signed_in = false
    $rootScope.current_user = {}
    $location.url('/');
  }

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
        $location.url('/home')
      }
    })
  }

  $scope.sign_in = function(){
    $location.url('/login')
    }
  //
  // $scope.register = function(){
  // $scope.modalInstance = $uibModal.open({
  //       animation: true,
  //       ariaLabelledBy: 'modal-title-top',
  //       ariaDescribedBy: 'modal-body-top',
  //       templateUrl: './partials/registration.html',
  //       controller: 'userController'
  //     });
  //     $scope.modalInstance.result.then(function(hello){
  //       console.log('closed')
  //     }, function(){
  //     })
  //   }

}]);
