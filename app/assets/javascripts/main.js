var app = angular.module("myApp", ["ngRoute", "ngCookies"]);
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
  .otherwise({
    redirectTo: '/'
  })
})
