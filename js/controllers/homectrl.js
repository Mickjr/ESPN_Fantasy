demo.controller('HomeCtrl',[
	"$scope",
	"$http",
	function ($scope, $http){
		

		var json = "accounts.php";

		    $http.get(json)
			.then(function(loadPlayerJSON){
		    	$scope.accounts = loadPlayerJSON.data
		    	console.log($scope.accounts);

	})	 
			
	}
]);