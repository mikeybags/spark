app.controller('profileController', ['$scope', '$http', 'userFactory', 'matchFactory', '$location', '$cookies','Upload', "$routeParams", function($scope, $http, userFactory, matchFactory, $location, $cookies, Upload, $routeParams){
  if (!$cookies.get("id")){
    $location.url('/')
  }
  else{
    $scope.profile_id = $routeParams.id
    $scope.feet = 0
    $scope.inches = 0
    $scope.already_matched = false
    $scope.matchable = false
    $scope.showUser = function() {
      userFactory.showUser($scope.profile_id, function(data){
        if(data.err){
          console.log(data.err)
        }
        else{
          if (data.match){
            if (data.match.accepted){
              $scope.already_matched = true
            }
            else if (data.match.requester_id == $scope.profile_id) {
              $scope.matchable = true
            }
          }
          else {
            $scope.matchable = true
          }
          $scope.user = data.user
          $scope.preferences = data.preferences
          $scope.findLocation($scope.user)
          $scope.heightInFeet($scope.user.height)
        }
      })
    }
    $scope.showUser();

    $scope.calculateAge = function (birthday) {
      var birthDate = new Date(birthday)
      var ageDifMs = Date.now() - birthDate.getTime();
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    $scope.findLocation = function(user) {
      $http.post("http://maps.googleapis.com/maps/api/geocode/json?address=" + user.zipcode).then(function(data){
        console.log(data.data.results[0])
        $scope.location = data.data.results[0]
      })
    }

    $scope.heightInFeet = function(height) {
      $scope.feet = Math.floor(height/12)
      $scope.inches = height % 12
    }
    $scope.match = function(receiver){
      matchFactory.match($cookies.get("id"), receiver, function(data){
      })
    }

    $scope.upload = function (file) {
      $scope.user.id = Number($cookies.get('id'))
       Upload.upload({
         url: 'users/image/' + $scope.user.id,
         method: 'PUT',
         headers: { 'Content-Type': false },
         fields: {
           'user[profile_picture]': file
         },
         file: file,
         sendFieldsAs: 'json'
       }).then(function (resp) {
         console.log('Success ' + resp.config.file.name + 'uploaded. Response: ' + resp.data);
         $scope.user = resp.data.user
       }, function (resp) {
         console.log('Error status: ' + resp.status);
       }, function (evt) {
         var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
         console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
       });
     };
   }
}]);
