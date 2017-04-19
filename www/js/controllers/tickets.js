var ticketsController = angular.module('ticketsController', []);

// ---- List controller ----
ticketsController.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
	
	$http.get("http://localhost:55178/").success(function(data) {
		console.log(data);
		$scope.tickets = data;
	});
}]);