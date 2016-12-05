var demo = angular.module('demo', ['ngRoute']);

demo.config([
"$routeProvider",
function ($routeProvider){
	
	$routeProvider
		
		.when("/", {
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl'
	})
}]);

