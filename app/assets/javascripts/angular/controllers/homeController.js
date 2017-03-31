app.controller('homeController', ['$scope', 'userFactory', '$location', '$cookies',"$uibModal", function($scope, userFactory, $location, $cookies,$uibModal ){
  if ($cookies.get("id")){
    $location.url('/home')
  }
  $scope.sign_in = function(){
    console.log('hello')
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
}])
