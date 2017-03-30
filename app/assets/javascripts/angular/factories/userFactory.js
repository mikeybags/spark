app.factory("userFactory", ['$http', '$cookies', function($http, $cookies){
  var factory = {}

  factory.getUser = function(user_id, callback){
    console.log('check')
    $http.get('/sessions/'+user_id).then(function(data){
      callback(data.data)
    })
  }

  factory.showUser = function(user_id, callback) {
    $http.get('users/'+user_id).then(function(data){
      callback(data.data)
    })
  }

  factory.createUser = function(user, callback){
    console.log(user)
    $http.post('/users/new', user).then(function(data){
      callback(data.data)
    })
  }
  factory.updateTraits = function(user, callback){
    console.log(user)
    $http.post('/users/traits', user).then(function(data){
      callback(data.data)
    })
  }
  factory.updateRelationship = function(user, callback){
    console.log(user)
    $http.post('/users/relationship', user).then(function(data){
      callback(data.data)
    })
  }
  factory.updateMoreAttributes = function(user, callback){
    $http.post('/users/attributes', user).then(function(data){
      callback(data.data)
    })
  }
  factory.updateBio = function(user, callback){
    $http.post('/users/bio', user).then(function(data){
      callback(data.data)
    })
  }
  factory.updatePersonality = function(result, callback){
    $http.post('/users/personality', {"personality": result, "user": $cookies.get("user")}).then(function(){
      callback()
    })
  }
  factory.login = function(user, callback){
    console.log(user)
    $http.post('/users/login', user).then(function(data){
      callback(data.data)
    })
  }
  factory.messaging = function(id, callback){
    $http.post('/users/messaging/'+id).then(function(data){
      callback(data.data)
    })
  }
  return factory
}])
