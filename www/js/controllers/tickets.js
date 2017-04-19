var ticketsController = angular.module('ticketsController', []);

// ---- List controller ----
ticketsController.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
	
	$http.get("http://localhost:55178/").success(function(data) {
		console.log(data);
		$scope.tickets = data;
	}).error(function(data) {
		console.log("error");
	});
}]);

// ---- Details controller ----
ticketsController.controller('DetailsController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
	$http.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
	
	$http.get("http://localhost:55178/").success(function(data) {

		$scope.ticket = data.filter(function(ticket) {
			return ticket.Id == $stateParams['id'];
		})[0];
		
	});
}]);