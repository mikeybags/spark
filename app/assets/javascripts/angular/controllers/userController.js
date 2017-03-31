app.controller('userController', ['$scope', 'userFactory', '$location', '$cookies','Upload', "$routeParams", "$rootScope", function($scope, userFactory, $location, $cookies, Upload, $routeParams, $rootScope){
console.log($cookies.get('id'))
if($cookies.get('id')){
  $location.url('/home')
}else{
  $scope.view = 0
  $scope.prefs = {}
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
        $scope.view = 1
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
       $scope.view = 3
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

  $scope.setPreferences = function() {
    $scope.prefs.user_id = $scope.user.id
    if ($scope.prefs.max_feet && $scope.prefs.max_inches){
      $scope.prefs.maximum_height = (Number($scope.prefs.max_feet) * 12) + Number($scope.prefs.max_inches)
    }
    if ($scope.prefs.min_feet && $scope.prefs.min_inches){
      $scope.prefs.minimum_height = (Number($scope.prefs.min_feet) * 12) + Number($scope.prefs.min_inches)
    }

    var bt_arr = []
    var bt = ''
    for(key in $scope.prefs.body_type){
      if(key == 'a' && $scope.prefs.body_type.a == true){
        bt = "Slender"
        bt_arr.push(bt)
      } else if (key == 'b' && $scope.prefs.body_type.b == true) {
        bt = "Athletic and toned"
        bt_arr.push(bt)
      } else if (key == 'c'&& $scope.prefs.body_type.c == true) {
        bt = "Heavyset"
        bt_arr.push(bt)
      } else if (key == 'd' && $scope.prefs.body_type.d == true) {
        bt = "A few extra pounds"
        bt_arr.push(bt)
      } else if (key == 'e' && $scope.prefs.body_type.e == true) {
        bt = "Stocky"
        bt_arr.push(bt)
      }
    }
    $scope.prefs.body_type = bt_arr

    var rel_arr = []
    var rel = ''
    for (key in $scope.prefs.relationship_status) {
      if(key == 'a' && $scope.prefs.relationship_status.a == true){
        rel = "Never married"
        rel_arr.push(rel)
      }
      if(key == 'b' && $scope.prefs.relationship_status.b == true){
        rel = "Currently separated"
        rel_arr.push(rel)
      }
      if(key == 'c' && $scope.prefs.relationship_status.c == true){
        rel = "Divorced"
        rel_arr.push(rel)
      }
      if(key == 'd' && $scope.prefs.relationship_status.d == true){
        rel = "Widow/Widower"
        rel_arr.push(rel)
      }
    }
    $scope.prefs.relationship_status = rel_arr

    var smoke_arr = []
    var smoke = ''
    for (key in $scope.prefs.smokes) {
      if(key == 'a' && $scope.prefs.smokes.a == true){
        smoke = "No way"
        smoke_arr.push(smoke)
      }
      if(key == 'b' && $scope.prefs.smokes.b == true){
        smoke = "Occasionally"
        smoke_arr.push(smoke)
      }
      if(key == 'c' && $scope.prefs.smokes.c == true){
        smoke = "Daily"
        smoke_arr.push(smoke)
      }
      if(key == 'd' && $scope.prefs.smokes.d == true){
        smoke = "Cigar aficionado"
        smoke_arr.push(smoke)
      }
      if(key == 'e' && $scope.prefs.smokes.e == true){
        smoke = "Yes, but trying to quit"
        smoke_arr.push(smoke)
      }
    }
    $scope.prefs.smokes = smoke_arr

    var drink_arr = []
    var drink = ''
    for (key in $scope.prefs.drinks) {
      if(key == 'a' && $scope.prefs.drinks.a == true){
        drink = "Never"
        drink_arr.push(drink)
      }
      if(key == 'b' && $scope.prefs.drinks.b == true){
        drink = "Social drinker"
        drink_arr.push(drink)
      }
      if(key == 'c' && $scope.prefs.drinks.c == true){
        drink = "Regularly"
        drink_arr.push(drink)
      }
      if(key == 'd' && $scope.prefs.drinks.d == true){
        drink = "Moderately"
        drink_arr.push(drink)
      }
    }
    $scope.prefs.drinks = drink_arr

    var race_arr = []
    var race = ''
    for (key in $scope.prefs.ethnicity) {
      if(key == 'a' && $scope.prefs.ethnicity.a == true){
        race = "Asian"
        race_arr.push(race)
      }
      if(key == 'b' && $scope.prefs.ethnicity.b == true){
        race = "Black/African Descent"
        race_arr.push(race)
      }
      if(key == 'c' && $scope.prefs.ethnicity.c == true){
        race = "Latino"
        race_arr.push(race)
      }
      if(key == 'd' && $scope.prefs.ethnicity.d == true){
        race = "White/Caucasian"
        race_arr.push(race)
      }
      if(key == 'e' && $scope.prefs.ethnicity.e == true){
        race = "Other"
        race_arr.push(race)
      }
    }
    $scope.prefs.ethnicity = race_arr

    var religion_arr = []
    var religion = ''
    for (key in $scope.prefs.religion) {
      if(key == 'a' && $scope.prefs.religion.a == true){
        religion = "Atheist"
        religion_arr.push(religion)
      }
      if(key == 'b' && $scope.prefs.religion.b == true){
        religion = "Christian"
        religion_arr.push(religion)
      }
      if(key == 'c' && $scope.prefs.religion.c == true){
        religion = "Jewish"
        religion_arr.push(religion)
      }
      if(key == 'd' && $scope.prefs.religion.d == true){
        religion = "Muslim"
        religion_arr.push(religion)
      }
      if(key == 'e' && $scope.prefs.religion.e == true){
        religion = "Other"
        religion_arr.push(religion)
      }
    }
    $scope.prefs.religion = religion_arr

    var education_arr = []
    var education = ''
    for (key in $scope.prefs.education) {
      if(key == 'a' && $scope.prefs.education.a == true){
        education = "High school"
        education_arr.push(education)
      }
      if(key == 'b' && $scope.prefs.education.b == true){
        education = "Some college"
        education_arr.push(education)
      }
      if(key == 'c' && $scope.prefs.education.c == true){
        education = "Associates degree"
        education_arr.push(education)
      }
      if(key == 'd' && $scope.prefs.education.d == true){
        education = "Bachelors degree"
        education_arr.push(education)
      }
      if(key == 'e' && $scope.prefs.education.e == true){
        education = "Graduate degree"
        education_arr.push(education)
      }
      if(key == 'f' && $scope.prefs.education.f == true){
        education = "PhD/Post doctoral"
        education_arr.push(education)
      }
    }
    $scope.prefs.education = education_arr

    var salary_arr = []
    var salary = ''
    for (key in $scope.prefs.salary) {
      if(key == 'a' && $scope.prefs.salary.a == true){
        salary = "Less than $25,000"
        salary_arr.push(salary)
      }
      if(key == 'b' && $scope.prefs.salary.b == true){
        salary = "$25,001 to $35,000"
        salary_arr.push(salary)
      }
      if(key == 'c' && $scope.prefs.salary.c == true){
        salary = "$35,001 to $50,000"
        salary_arr.push(salary)
      }
      if(key == 'd' && $scope.prefs.salary.d == true){
        salary = "$50,001 to $75,000"
        salary_arr.push(salary)
      }
      if(key == 'e' && $scope.prefs.salary.e == true){
        salary = "$75,001 to $100,000"
        salary_arr.push(salary)
      }
      if(key == 'f' && $scope.prefs.salary.f == true){
        salary = "$100,001 to $150,000"
        salary_arr.push(salary)
      }
      if(key == 'g' && $scope.prefs.salary.g == true){
        salary = "$150,001+"
        salary_arr.push(salary)
      }
    }
    $scope.prefs.salary = salary_arr

    userFactory.setPreferences($scope.prefs, function(data){
      if(data.errors){
        $scope.errors = data.errors
      }
      else{
        $rootScope.current_user = data.user
        $location.url('/questionnaire')
      }
    })
  }
}])
