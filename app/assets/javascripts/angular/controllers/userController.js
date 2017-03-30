app.controller('userController', ['$scope', 'userFactory', '$location', '$cookies','Upload', "$routeParams", function($scope, userFactory, $location, $cookies, Upload, $routeParams){
console.log($cookies.get('id'))
if($cookies.get('id')){
  $scope.view = 4
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
        }
      })
    }
  }
  $scope.updateTraits = function(){
    console.log($scope.user)
    $scope.user.id = Number($cookies.get('id'))
    $scope.user.height = (Number($scope.user.feet) * 12) + Number($scope.user.inches)
    userFactory.updateTraits($scope.user, function(data){
      if(data.errors){
        $scope.errors = data.errors
      }
      else{
        $cookies.put('id', data.user.id)
        $scope.user = data.user
        $cookies.put('view', 2)
        $scope.view = 2
      }
    })
  }
  $scope.updateRelationship = function(){
    console.log($scope.user)
    $scope.user.id = Number($cookies.get('id'))
    $scope.user.number_children = Number($scope.user.number_children)
    userFactory.updateRelationship($scope.user, function(data){
      if(data.errors){
        $scope.errors = data.errors
      }else {
        console.log('working')
        $scope.user = data.user
        $cookies.put('view', 3)
        $scope.view = 3
      }
    })
  }
  $scope.updateMoreAttributes = function(){
    $scope.user.id = Number($cookies.get('id'))
    $scope.user.ethnicity = ''
    for(key in $scope.user.race){
      if($scope.user.race[key] == true){
        $scope.user.ethnicity += key
        $scope.user.ethnicity += ', '
      }
    }
    $scope.user.ethnicity = $scope.user.ethnicity.slice(0, -2);
    userFactory.updateMoreAttributes($scope.user, function(data){
      if(data.errors){
        $scope.errors = data.errors
      }
      else{
        $scope.user = data.user
        $cookies.put('view', 4)
        $scope.view = 4
      }
    })
  }
  $scope.updateBio = function(){
    $scope.user.id = Number($cookies.get('id'))
    userFactory.updateBio($scope.user, function(data){
      if(data.errors){
        $scope.errors = data.errors
      }else {
        $scope.user = data.user
        $cookies.put('view', 5)
        $scope.view = 5
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
