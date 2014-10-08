
angular.module('queComo')

.config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.
    
    when('/sugerir', {
      templateUrl: 'partials/sugerir.html',
      controller: 'SugerirCtrl'
    }).

    when('/mostrar-platos', {
      templateUrl: 'partials/showData.html',
      controller: 'ShowDataCtrl'
    }).

    otherwise({
      redirectTo: '/sugerir'
    });

}]);