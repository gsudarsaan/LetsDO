(function () {
    'use strict';
	var app = angular.module('app', ['ngRoute']);
	app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'assets/login/login.html'
              }).otherwise({ redirectTo: '/login' });
		}]);
})();