app.controller('resultsController', ['$scope', 'userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies ){
  if (!$cookies.get("id")){
    $location.url('/')
  }
}])
