var app = angular.module("myApp", ["ngRoute", "ngCookies", "ngFileUpload"]);
app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "../templates/home.html", controller: "userController"
  })
  .when('/register', {
    templateUrl: "../templates/register.html", controller: "userController"
  })
  .otherwise({
    redirectTo: '/'
  })
})
