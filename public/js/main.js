angular.module('smartchat', ['ngRoute', 'ngResource', 'ngAnimate', 'ui.bootstrap']).config(function($routeProvider, $httpProvider, $locationProvider) {

	// $httpProvider.interceptors.push('meuInterceptor');

  $routeProvider.when('/index', {
    templateUrl: 'partials/index.html',
    controller: 'IndexController' 
  });

  $routeProvider.otherwise({
    redirectTo: '/index'
  });

}).factory('authHttpResponseInterceptor',['$q','$location',function($q,$location){
    return {
        response: function(response){
            if (response.status === 401) {
                console.log("Response 401");
            }
            return response || $q.when(response);
        },
        responseError: function(rejection) {
            if (rejection.status === 401) {
                console.log("Response Error 401",rejection);
                $location.path('/#/index');
            }
            return $q.reject(rejection);
        }
    };
}])
.config(['$httpProvider',function($httpProvider) {
    //Http Intercpetor to check auth failures for xhr requests
    $httpProvider.interceptors.push('authHttpResponseInterceptor');
}]);
