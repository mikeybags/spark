(function () {
  angular
    .module('myApp')
    .directive('navigation', navigation);

  function navigation () {
    return {
      restrict: 'EA',
      templateUrl: '../templates/navigation.html',
      controller: 'navController'
    };
  }

})();
