app.controller("navController", ["$scope", "userFactory", "$location", "$cookies", function($scope, userFactory, $location, $cookies){
  if($cookies.get('id')){
    $scope.current_user = true
    $scope.current_user_id = $cookies.get('id')
  }

  $scope.logout = function(){
    $scope.currentUser = {};
    $cookies.remove("id");
    $location.url('/home');
  }

  userFactory.getUser($scope.current_user_id, function(data){
    if(data.err){
      console.log(data.err)
    }
    else{
      $scope.current_user = data
    }
  })

  // $scope.login = function(){
  // $scope.modalInstance = $uibModal.open({
  //       animation: true,
  //       ariaLabelledBy: 'modal-title-top',
  //       ariaDescribedBy: 'modal-body-top',
  //       templateUrl: './partials/login.html',
  //       controller: 'userController'
  //     });
  //     $scope.modalInstance.result.then(function(hello){
  //       console.log('closed')
  //     }, function(){
  //     })
  //   }
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
