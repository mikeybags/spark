
app.controller("navController", ["$scope", "userFactory", "$location", "$cookies", "$uibModal", "$rootScope", "$timeout", function($scope, userFactory, $location, $cookies, $uibModal, $rootScope, $timeout){
  if($cookies.get('id')){
    $rootScope.current_user_id = $cookies.get('id')
    $rootScope.signed_in = true
    userFactory.getUser($cookies.get('id'), function(data){
      if(data.err){
        console.log(data.err)
      } else{
        $rootScope.current_user = data
      }
    })
  }else{
    $rootScope.signed_in = false
  }


  $scope.logout = function(){
    $cookies.remove("id");
    $rootScope.signed_in = false
    $rootScope.current_user = {}
    $location.url('/');
  }

  $scope.sign_in = function(){
    $scope.modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title-top',
          ariaDescribedBy: 'modal-body-top',
          templateUrl: '../templates/login.html',
          controller: 'loginController'
        });
        $scope.modalInstance.result.then(function(hello){
          console.log('closed')
        }, function(){
        })
    }

}]);
