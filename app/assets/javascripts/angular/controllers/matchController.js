app.controller('matchController', ['$scope', 'matchFactory', 'userFactory', '$location', '$cookies', function($scope, matchFactory, userFactory, $location, $cookies ){
  $scope.matches = [];
  $scope.pending = []
  $scope.getMatches = function(){
    matchFactory.getMatches($cookies.get("id"), function(data){
      for (var i = 0; i < data.matches.length; i++) {
        data.user_matches[i].matched_on = data.matches[i].updated_at
      }
      $scope.matches = data.user_matches
    })
  }
  $scope.getPendingMatches = function(){
    matchFactory.getPendingMatches($cookies.get("id"), function(data){
      console.log($scope.pending);
      $scope.pending = data
    })
  }
  $scope.match = function(receiver){
    matchFactory.match($cookies.get("id"), receiver, function(data){
      $scope.getMatches()
    })
  }
  $scope.getMatches()
  $scope.getPendingMatches()
}])
