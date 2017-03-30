app.controller('userController', ['$scope', 'userFactory', '$location', '$cookies','Upload', "$routeParams", "$rootScope", function($scope, userFactory, $location, $cookies, Upload, $routeParams, $rootScope){
console.log($cookies.get('id'))
if($cookies.get('id')){
  $location.url('/home')
}else{
  $scope.view = 0
}

$scope.user = {body_type: "No Answer", religion: "No Answer", feet: "-", inches: "-", relationship_status: "Never Married", have_children: "False", want_children: "No Answer", number_children: '0', salary:
'No Answer', smoker: 'No Answer', drinker: 'No Answer', education_level: 'No Answer'}
$scope.createUser = function(){
  if($cookies.get('id')){
    $scope.errors = 'Cannot Go Back'
  }
  else{
    userFactory.createUser($scope.user, function(data){
      if(data.errors){
        $scope.errors = data.errors
      }else{
        $cookies.put('id', data.user.id)
        $scope.user = data.user
        $cookies.put('view', 1)
        console.log($cookies.get('view'))
        $scope.view = 1
        $rootScope.signed_in = true
        $rootScope.current_user = data
        console.log($rootScope.current_user);
        }
      })
    }
  }

  $scope.updateProfile = function(){
    console.log($scope.user)
    $scope.user.id = Number($cookies.get('id'))
    $scope.user.height = (Number($scope.user.feet) * 12) + Number($scope.user.inches)
    $scope.user.number_children = Number($scope.user.number_children)
    $scope.user.ethnicity = ''
    for(key in $scope.user.race){
      if($scope.user.race[key] == true){
        if (key == 'a') {
          $scope.user.ethnicity += "Asian, "
        } else if (key == 'b') {
          $scope.user.ethnicity += "Black/African Descent, "
        } else if (key == 'c') {
          $scope.user.ethnicity += "Latino, "
        } else if (key == 'd') {
          $scope.user.ethnicity += "White/Caucasian, "
        }  else if (key == 'd') {
          $scope.user.ethnicity += "Other, "
        }
      }
    }
    $scope.user.ethnicity = $scope.user.ethnicity.slice(0, -2);
    userFactory.updateProfile($scope.user, function(data){
      if(data.errors){
        $scope.errors = data.errors
      }else {
        $scope.user = data.user
        $cookies.put('view', 2)
        $scope.view = 2
      }
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

  $scope.previousPage = function(){
    $scope.view -= 1
    $cookies.put('view', $scope.view)
    $scope.errors = {}
  }
  $scope.nextPage = function(){
    $scope.view += 1
    $cookies.put('view', $scope.view)
    $scope.errors = {}
  }

  $scope.messaging = function(number){
    userFactory.messaging(number, function(data){
      console.log(data)
    })
  }

}])
