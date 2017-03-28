app.factory("userFactory", ['$http', '$cookies', function($http, $cookies){
  var factory = {}
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
  return factory
}])
