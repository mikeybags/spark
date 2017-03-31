
app.controller("navController", ["$scope", "userFactory", "$location", "$cookies", "$uibModal", "$rootScope", function($scope, userFactory, $location, $cookies, $uibModal, $rootScope){
  if($cookies.get('id')){
    $rootScope.current_user_id = $cookies.get('id')
    $rootScope.signed_in = true
  }else{
    $rootScope.signed_in = false
    $location.url('/login')
  }

  userFactory.getUser($scope.current_user_id, function(data){
    if(data.err){
      console.log(data.err)
    } else{
      $rootScope.current_user = data
    }
  })

  $scope.logout = function(){
    $rootScope.currentUser = {};
    $cookies.remove("id");
    $rootScope.signed_in = false
    $location.url('/');
  }

  $scope.login = function(){
    userFactory.login($scope.login_user, function(data){
      if(data.errors){
        $scope.errors = data.errors
      }
      else{
        $rootScope.signed_in = true
        $rootScope.current_user = data
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
