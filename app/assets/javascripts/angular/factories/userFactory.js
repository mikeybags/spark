app.factory("userFactory", ['$http', '$cookies', function($http, $cookies){
 var factory = {}
 factory.updatePersonality = function(result, callback){
   $http.post('/users/personality', {"personality": result, "user": $cookies.get("user")}).then(function(){
     callback()
   })
 }
 return factory
}])
