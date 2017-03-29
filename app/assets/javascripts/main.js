var app = angular.module("myApp", ["ngRoute", "ngCookies", "ngFileUpload", "ui.bootstrap"]);
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
    controller: "userController"
  })
  .when('/users/:id', {
    templateUrl: "../templates/profile.html",
    controller: "userController"
  })
  .when('/login', {
    templateUrl: "../templates/login.html",
    controller: "navController"
  })
  .when('/messages', {
    templateUrl: "../templates/messages.html"
    controller: "messageController"
  })
  .otherwise({
    redirectTo: '/'
  })
})
