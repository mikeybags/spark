app.factory("matchFactory", ['$http', function($http){
 var factory = {}
  factory.getUsers = function(user_id, callback){
    $http.get(`/users/${user_id}/discover`).then(function(data){
      callback(data.data);
    })
  }
 return factory

}])
