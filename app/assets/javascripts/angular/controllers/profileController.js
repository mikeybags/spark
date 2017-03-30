app.controller('profileController', ['$scope', '$http', 'userFactory', '$location', '$cookies','Upload', "$routeParams", function($scope, $http, userFactory, $location, $cookies, Upload, $routeParams){
  $scope.profile_id = $routeParams.id
  $scope.feet = 0
  $scope.inches = 0
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.showUser = function() {
    userFactory.showUser($scope.profile_id, function(data){
      if(data.err){
        console.log(data.err)
      }
      else{
        $scope.user = data.user
        $scope.preferences = data.preferences
        $scope.images = data.images
        console.log($scope.images)
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


}]);
