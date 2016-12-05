var demo = angular.module('demo', ['ngRoute','ui.bootstrap']);


demo.config([
"$routeProvider",
function ($routeProvider){
	
	$routeProvider
		
		.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl'
	})
	
}]);


