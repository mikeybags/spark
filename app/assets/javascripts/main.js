var app = angular.module("myApp", ["ngRoute", "ngCookies"]);
app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "../templates/home.html", controller: "userController"
  })
  .when('/home', {
    templateUrl: "../templates/welcome.html", controller: "userController"
  })
  .when('/profile', {
    templateUrl: "../templates/profile.html", controller: "userController"
  })
  .otherwise({
    redirectTo: '/'
  })
})
