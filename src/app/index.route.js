(function() {
  'use strict';

  angular
    .module('goo')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/forecast5' , {
        templateUrl: 'app/forecast/forecast5.html',
        controller: 'Forecast5Controller',
        controllerAs: 'forecast5'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
