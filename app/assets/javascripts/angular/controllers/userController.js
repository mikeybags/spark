app.controller('userController', ['$scope', 'userFactory', '$location', '$cookies','Upload', function($scope, userFactory, $location, $cookies, Upload){
console.log($cookies.get('id'))
if($cookies.get('id')){
  $scope.view = 2
}else{
  $scope.view = 0
}
$scope.user = {body_type: "no answer", religion: "no answer", feet: "-", inches: "-", relationship_status: "never married", have_children: "false", want_children: "no answer", number_children: '0', salary:
'no answer', smoker: 'no answer', drinker: 'no answer', education_level: 'no answer'}
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
        console.log(data.errors)
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
        console.log(data.errors)
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
    userFactory.updateMoreAttributes($scope.user, function(data){
      if(data.errors){
        console.log(data.errors)
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
        console.log(data.errors)
      }else {
        $scope.user = data.user
        $cookies.put('view', 5)
        $scope.view = 5
      }
    })
  }
  $scope.uploadFiles = function(file, errFiles) {
      $scope.f = file;
      $scope.errFile = errFiles && errFiles[0];
      if (file) {
          file.upload = Upload.upload({
              url: '/users/image/' + $cookies.get('id'),
              method: 'POST',
              data: {file: file}
          }).then(function(response){
            if(response.err){
              console.log(err)
            }
            else{
              $location.url('/');
            }
          });
          };
      }
  $scope.previousPage = function(){
    $scope.view -= 1
    $cookies.put('view', $scope.view)
  }
  $scope.nextPage = function(){
    $scope.view += 1
    $cookies.put('view', $scope.view)
  }
}])
