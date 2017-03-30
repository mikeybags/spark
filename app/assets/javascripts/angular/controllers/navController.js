
app.controller("navController", ["$scope", "userFactory", "$location", "$cookies", "$uibModal", function($scope, userFactory, $location, $cookies, $uibModal){
  if($cookies.get('id')){
    $scope.current_user_id = $cookies.get('id')
    $scope.current_user = true
  }else{
    $scope.current_user=false
    $location.url('/login')
  }

  userFactory.getUser($scope.current_user_id, function(data){
    if(data.err){
      console.log(data.err)
    } else{
      $scope.current_user = data
    }
  })
  
  $scope.logout = function(){
    $scope.currentUser = {};
    $cookies.remove("id");
    $scope.current_user = false
    $location.url('/');
  }

  $scope.login = function(){
    console.log($scope.login_user)
    userFactory.login($scope.login_user, function(data){
      if(data.errors){
        console.log(data.errors)
        $scope.errors = data.errors
      }
      else{
        $scope.current_user = true
        $cookies.put("id", data.user.id)
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
