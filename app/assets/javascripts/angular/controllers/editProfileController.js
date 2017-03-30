app.controller('editProfileController', ['$scope', '$http', 'userFactory', '$location', '$cookies','Upload', "$routeParams", function($scope, $http, userFactory, $location, $cookies, Upload, $routeParams){
  if ($cookies.get("id") != $routeParams.id){
    $location.url('/users/' + $routeParams.id)
  }
  $scope.prefs = {}
  $scope.profile_id = $routeParams.id
  $scope.feet = 0
  $scope.inches = 0

  $scope.showUser = function() {
    userFactory.showUser($scope.profile_id, function(data){
      if(data.err){
        console.log(data.err)
      } else{
        $scope.prefs = data.preferences
        $scope.heightInFeet($scope.prefs.maximum_height)
        $scope.prefs.max_feet = String($scope.feet)
        $scope.prefs.max_inches = String($scope.inches)
        $scope.heightInFeet($scope.prefs.minimum_height)
        $scope.prefs.min_feet = String($scope.feet)
        $scope.prefs.min_inches = String($scope.inches)
        $scope.prefs.has_children = String($scope.prefs.has_children)
        var races = $scope.prefs.ethnicity
        var types = $scope.prefs.body_type
        var relationships = $scope.prefs.relationship_status
        var smokes = $scope.prefs.smokes
        var drinks = $scope.prefs.drinks
        var religions = $scope.prefs.religion
        var education_levels = $scope.prefs.education
        var salaries = $scope.prefs.salary
        $scope.prefs.body_type = {}
        $scope.prefs.smokes = {}
        $scope.prefs.drinks = {}
        $scope.prefs.ethnicity = {}
        $scope.prefs.education = {}
        $scope.prefs.salary = {}
        $scope.prefs.relationship_status = {}
        $scope.prefs.religion = {}

        for (race in races){
          if (races[race] == 'Asian') {
            $scope.prefs.ethnicity.a = true
          }
          if (races[race] == 'Black/African Descent') {
            $scope.prefs.ethnicity.b = true
          }
          if (races[race] == 'Latino') {
            $scope.prefs.ethnicity.c = true
          }
          if (races[race] == 'White/Caucasian') {
            $scope.prefs.ethnicity.d = true
          }
          if (races[race] == 'Other') {
            $scope.prefs.ethnicity.e = true
          }
        }

        for (type in types) {
          if (types[type] == 'Slender') {
            $scope.prefs.body_type.a = true
          }
          if (types[type] == 'Athletic and toned') {
            $scope.prefs.body_type.b = true
          }
          if (types[type] == 'Heavyset') {
            $scope.prefs.body_type.c = true
          }
          if (types[type] == 'A few extra pounds') {
            $scope.prefs.body_type.d = true
          }
          if (types[type] == 'Stocky') {
            $scope.prefs.body_type.e = true
          }
        }

        for (i in relationships) {
          if (relationships[i] == 'Never married'){
            $scope.prefs.relationship_status.a = true
          }
          if (relationships[i] == 'Currently separated'){
            $scope.prefs.relationship_status.b = true
          }
          if (relationships[i] == 'Divorced'){
            $scope.prefs.relationship_status.c = true
          }
          if (relationships[i] == 'Widow/Widower'){
            $scope.prefs.relationship_status.d = true
          }
        }

        for (i in smokes) {
          if (smokes[i] == 'No way'){
            $scope.prefs.smokes.a = true
          }
          if (smokes[i] == 'Occasionally'){
            $scope.prefs.smokes.b = true
          }
          if (smokes[i] == 'Daily'){
            $scope.prefs.smokes.c = true
          }
          if (smokes[i] == 'Cigar aficionado'){
            $scope.prefs.smokes.d = true
          }
          if (smokes[i] == 'Yes, but trying to quit'){
            $scope.prefs.smokes.e = true
          }
        }

        for (i in drinks) {
          if (drinks[i] == 'Never'){
            $scope.prefs.drinks.a = true
          }
          if (drinks[i] == 'Social drinker'){
            $scope.prefs.drinks.b = true
          }
          if (drinks[i] == 'Regularly'){
            $scope.prefs.drinks.c = true
          }
          if (drinks[i] == 'Moderately'){
            $scope.prefs.drinks.d = true
          }
        }

        for (i in religions) {
          if (religions[i] == 'Atheist'){
            $scope.prefs.religion.a = true
          }
          if (religions[i] == 'Christian'){
            $scope.prefs.religion.b = true
          }
          if (religions[i] == 'Jewish'){
            $scope.prefs.religion.c = true
          }
          if (religions[i] == 'Muslim'){
            $scope.prefs.religion.d = true
          }
          if (religions[i] == 'Other'){
            $scope.prefs.religion.e = true
          }
        }

        for (i in education_levels){
          if (education_levels[i] == 'High school') {
            $scope.prefs.education.a = true
          }
          if (education_levels[i] == 'Some college') {
            $scope.prefs.education.b = true
          }
          if (education_levels[i] == 'Associates degree') {
            $scope.prefs.education.c = true
          }
          if (education_levels[i] == 'Bachelors degree') {
            $scope.prefs.education.d = true
          }
          if (education_levels[i] == 'Graduate degree') {
            $scope.prefs.education.e = true
          }
          if (education_levels[i] == 'PhD/Post doctoral') {
            $scope.prefs.education.f = true
          }
        }

        for (i in salaries){
          if (salaries[i] == 'Less than $25,000'){
            $scope.prefs.salary.a = true
          }
          if (salaries[i] == '$25,001 to $35,000'){
            $scope.prefs.salary.b = true
          }
          if (salaries[i] == '$35,001 to $50,000'){
            $scope.prefs.salary.c = true
          }
          if (salaries[i] == '$50,001 to $75,000'){
            $scope.prefs.salary.d = true
          }
          if (salaries[i] == '$75,001 to $100,000'){
            $scope.prefs.salary.e = true
          }
          if (salaries[i] == '$100,001 to $150,000'){
            $scope.prefs.salary.f = true
          }
          if (salaries[i] == '$150,001+'){
            $scope.prefs.salary.g = true
          }
        }



        $scope.user = data.user
        console.log("User is", $scope.user);
        var races = $scope.user.ethnicity.split(", ")
        $scope.user.ethnicity = {}
        for (race in races){
          if (races[race] == 'Asian') {
            $scope.user.ethnicity.a = true
          }
          if (races[race] == 'Black/African Descent') {
            $scope.user.ethnicity.b = true
          }
          if (races[race] == 'Latino') {
            $scope.user.ethnicity.c = true
          }
          if (races[race] == 'White/Caucasian') {
            $scope.user.ethnicity.d = true
          }
          if (races[race] == 'Other') {
            $scope.user.ethnicity.e = true
          }
        }
        $scope.heightInFeet($scope.user.height)
        $scope.user.feet = String($scope.feet)
        $scope.user.inches = String($scope.inches)
        $scope.user.have_children = String($scope.user.have_children)
      }
    })
  }
  $scope.showUser();

  $scope.heightInFeet = function(height) {
    $scope.feet = Math.floor(height/12)
    $scope.inches = height % 12
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

   $scope.setPreferences = function() {
     $scope.prefs.user_id = $scope.profile_id
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
         $scope.prefs = data.preferences
         $scope.user = data.user
         $scope.showUser();
       }
     })
   }

   $scope.updateProfile = function() {

     var race_arr = []
     var race = ''
     for (key in $scope.user.ethnicity) {
       if(key == 'a' && $scope.user.ethnicity.a == true){
         race = "Asian"
         race_arr.push(race)
       }
       if(key == 'b' && $scope.user.ethnicity.b == true){
         race = "Black/African Descent"
         race_arr.push(race)
       }
       if(key == 'c' && $scope.user.ethnicity.c == true){
         race = "Latino"
         race_arr.push(race)
       }
       if(key == 'd' && $scope.user.ethnicity.d == true){
         race = "White/Caucasian"
         race_arr.push(race)
       }
       if(key == 'e' && $scope.user.ethnicity.e == true){
         race = "Other"
         race_arr.push(race)
       }
     }
     $scope.prefs.ethnicity = race_arr
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
}]);
