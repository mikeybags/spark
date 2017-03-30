app.factory("matchFactory", ['$http', function($http){
 var factory = {}
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
    })
  }
 return factory

}])
