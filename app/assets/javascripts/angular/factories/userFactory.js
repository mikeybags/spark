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
      console.log(data)
      callback(data.data)
    })
  }

  factory.createUser = function(user, callback){
    console.log(user)
    $http.post('/users/new', user).then(function(data){
      callback(data.data)
    })
  }
  factory.updateProfile = function(user, callback){
    console.log(user)
    $http.post('/users/profile', user).then(function(data){
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
  factory.updatePersonality = function(result, id, callback){
    $http.post('/users/personality', {"personality": result, "user": id}).then(function(){
      callback()
    })
  }
  factory.login = function(user, callback){
    $http.post('/users/login', user).then(function(data){
      callback(data.data)
    })
  }
  factory.messaging = function(id, callback){
    $http.post('/users/messaging/'+id).then(function(data){
      callback(data.data)
    })
  }
  factory.setPreferences = function(preferences, callback){
    console.log(preferences)
    $http.post('/users/preferences', preferences).then(function(data){
      callback(data.data)
    })
  }
  return factory
}])
