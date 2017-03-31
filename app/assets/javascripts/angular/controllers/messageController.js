app.controller('messageController', ['$scope', 'matchFactory', '$location', '$cookies','$interval', function($scope, matchFactory, $location, $cookies, $interval){
  if (!$cookies.get("id")){
    $location.url('/')
  }
  else{
    $scope.messaging_user = {}
    $scope.messages = {}
    $scope.user_id = $cookies.get('id')
    $scope.messenger = false
    $scope.user_matches = function(){
      matchFactory.user_matches($cookies.get('id'), function(data){
        if(data.errers){
          console.log(data)
        }else {
          $scope.matches = data.matches
          if ($cookies.get('message_id')) {
            $scope.message_user($cookies.get('message_id'))
            $cookies.remove('message_id')
          }
        }
      })
    }
    $scope.user_matches()
    $scope.message_user = function(id){
      matchFactory.message_user(id, function(data){
        $scope.messenger = true
        $scope.messaging_user = data.user
        $scope.messages = data.message
      })
    }

    $scope.sendMessage = function(id){
      $scope.message.receiver_id = id
      matchFactory.sendMessage($scope.message, function(data){
        $scope.message = {}
        $scope.message_user(data.id)

      })
    }

    $interval(callAtInterval, 3000);
    function callAtInterval() {
        if($scope.messaging_user.id){
          $scope.message_user($scope.messaging_user.id)
        }
    }
  }
}])
