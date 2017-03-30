app.factory("matchFactory", ['$http', function($http){
 var factory = {}
<<<<<<< HEAD
  factory.user_matches = function(id, callback){
    $http.post('/matches/'+id).then(function(data){
      callback(data.data)
    })
  }
  factory.message_user = function(id, callback){
    $http.post('/messages/'+id).then(function(data){
      callback(data.data)
    })
  }
  factory.sendMessage = function(message, callback){
    $http.post('/messages/create', message).then(function(data){
      callback(data.data)
=======
  factory.getUsers = function(user_id, callback){
    $http.get(`/users/${user_id}/discover`).then(function(data){
      callback(data.data);
>>>>>>> 1c115e93d3490bf7fb10db344536de9e430b72e9
    })
  }
 return factory

}])
