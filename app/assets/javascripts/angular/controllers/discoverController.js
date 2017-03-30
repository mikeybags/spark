app.controller('discoverController', ['$scope', 'matchFactory', 'userFactory', '$location', '$cookies', function($scope, matchFactory, userFactory, $location, $cookies ){
  $scope.getSentMatches = function(){
    matchFactory.getSentMatches($cookies.get("id"), function(data){
      $scope.sent_matches = data
      $scope.getUsers()
    })
  }
  $scope.getSentMatches()
  $scope.busy = false;
  $scope.done = false;
  $scope.users = [];
  $scope.start = 0;
  $scope.match_alert = ""
  $scope.specs
  $scope.getUsers = function(){
    if ($scope.busy || $scope.done) {
      return;
    }
    $scope.busy = true;
    matchFactory.getUsers($cookies.get("id"), $scope.start,  function(data){
      if (data.length < 1){
        $scope.done = true
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].compatability > 10){
          if ($scope.sent_matches[data[i].id]){
          }
          else {
            $scope.users.push(data[i])
          }
        }
      }
      $scope.busy = false
      $scope.start += data.length
    })
  }
  $scope.propertyName = '-compatability';
  $scope.match = function(receiver){
    matchFactory.match($cookies.get("id"), receiver, function(data){
      if (data.saved){
        $scope.match_alert = "You have a new match!"
      }
    })
  }
}])
