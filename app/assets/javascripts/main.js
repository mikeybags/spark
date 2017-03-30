var app = angular.module("myApp", ["ngRoute", "ngCookies", "ngFileUpload", "ui.bootstrap", "infinite-scroll"]);
app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "../templates/home.html",
    controller: "userController"
  })
  .when('/questionnaire', {
    templateUrl: "../templates/questionnaire.html",
    controller: "questionnaireController"
  })
  .when('/results', {
    templateUrl: "../templates/results.html",
    controller: "resultsController"
  })
  .when('/register', {
    templateUrl: "../templates/register.html",
    controller: "userController"
  })
  .when('/home', {
    templateUrl: "../templates/welcome.html",
    controller: "matchController"
  })
  .when('/users/:id', {
    templateUrl: "../templates/profile.html",
    controller: "profileController"
  })
  .when('/login', {
    templateUrl: "../templates/login.html",
    controller: "navController"
  })
  .when('/messages', {
    templateUrl: "../templates/messages.html",
    controller: "messageController"
  })
  .when('/discover', {
    templateUrl: "../templates/discover.html",
    controller: "discoverController"
  })
  .when('/matches', {
    templateUrl: "../templates/matches.html",
    controller: "matchController"
  })
  .otherwise({
    redirectTo: '/'
  })
})
.filter('ageFilter', function() {
   return function(birthdate) {
     birthdate = new Date(birthdate)
     var ageDifMs = Date.now() - birthdate.getTime();
     var ageDate = new Date(ageDifMs); // miliseconds from epoch
     return Math.abs(ageDate.getUTCFullYear() - 1970);
   };
});
