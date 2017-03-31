app.controller('matchController', ['$scope', 'matchFactory', 'userFactory', '$location', '$cookies', function($scope, matchFactory, userFactory, $location, $cookies ){
  if (!$cookies.get("id")){
    $location.url('/')
  }
  else{
    $scope.matches = [];
    $scope.pending = [];
    $scope.rejected = [];
    $scope.propertyName = '-updated_at';
    $scope.matchPropertyName = 'username';
    $scope.page = true
    $scope.getMatches = function(){
      $scope.page = true
      matchFactory.getMatches($cookies.get("id"), function(data){
        for (var i = 0; i < data.matches.length; i++) {
          data.user_matches[i].matched_on = data.matches[i].updated_at
        }
        $scope.matches = data.user_matches
      })
    }
    $scope.getPendingMatches = function(){
      matchFactory.getPendingMatches($cookies.get("id"), function(data){
        $scope.page = false
        $scope.pending = data
      })
    }
    $scope.getRejectedMatches = function(){
      matchFactory.getRejectedMatches($cookies.get("id"), function(data){
        $scope.page = false
        $scope.rejected = data
      })
    }
    $scope.match = function(receiver){
      matchFactory.match($cookies.get("id"), receiver, function(data){
      })
    }
    $scope.reject = function(receiver){
      matchFactory.reject($cookies.get("id"), receiver, function(data){
      $scope.getRejectedMatches()
      })
    }
  $scope.showUser = function() {
    userFactory.showUser($cookies.get('id'), function(data){
      if(data.errors){
        console.log(data.errors)
      }
      else{
        $scope.user = data.user
      }
    })
  }
  $scope.sendAMessage = function(id){
    $cookies.put('message_id', id)
    $location.url('/messages')
  }
  $scope.matchPage = function(bool){
    $scope.page = bool;
  }
  $scope.getMatches()
  $scope.showUser()
}
}])
