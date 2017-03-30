app.controller('discoverController', ['$scope', 'matchFactory', '$location', '$cookies', function($scope, matchFactory, $location, $cookies ){
  if (!$cookies.get("user")){
    $cookies.put("user", 1 );

  }
  $scope.getUsers = function(){
    matchFactory.getUsers($cookies.get("user"), function(data){
      $scope.users = data
      console.log(data);
    })
  }
  $scope.getUsers()
}])
