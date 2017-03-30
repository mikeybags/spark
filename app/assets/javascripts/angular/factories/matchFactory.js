app.factory("matchFactory", ['$http', function($http){
 var factory = {}
  factory.getUsers = function(user_id, start, callback){
    $http.get(`/users/${user_id}/discover/${start}`).then(function(data){
      callback(data.data);
    })
  }
  factory.match = function(sender, receiver, callback){
    $http.post(`/users/${sender}/matches`, {"receiver":receiver}).then(function(data){
      console.log(data);
      callback(data.data)
    })
  }
  factory.getSentMatches = function(user, callback){
    $http.get(`/users/${user}/sent_requests`).then(function(data){
      callback(data.data)
    })
  }
  factory.getMatches = function(user, callback){
    $http.get(`/users/${user}/matches`).then(function(data){
      callback(data.data);
    })
  }
  factory.getPendingMatches = function(user, callback){
    $http.get(`/users/${user}/matches/pending`).then(function(data){
      callback(data.data);
    })
  }
  factory.getRejectedMatches = function(user, callback){
    $http.get(`/users/${user}/matches/rejected`).then(function(data){
      callback(data.data);
    })
  }
  factory.reject = function(user, requester, callback){
    $http.post(`/users/${user}/reject`, {"requester":requester}).then(function(data){
      callback(data.data)
    })
  }
 return factory

}])
