(function () {
    'use strict';
	var app = angular.module('app');
    
	
//Controller	
app.controller('LoginController',['$location','$scope','LoginFactory',function($location,$scope,LoginFactory){
		$scope.login = {};
		$scope.login.submitform = function(){
		var postdata = JSON.stringify($scope.login);
			LoginFactory.login(postdata).success(function(data){
				if(data.response==200){
				
				}else{
					
				}
			});
		};
}]);
	
//Factory
app.factory('LoginFactory', ['$http', function($http) {
	var LoginFactory = {};
		LoginFactory.login = function (data) {
			return $http.post(applicationUrl.login, data);
		};
			
	return LoginFactory;
}]);			
			
})();