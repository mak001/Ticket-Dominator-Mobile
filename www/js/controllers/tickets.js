var ticketsController = angular.module('ticketsController', []);

var ticketList = null;
var lastUpdate = -1;

// ---- List controller ----
ticketsController.controller('ListController', ['$scope', '$http', function($scope, $http) {
	
	getTicketList($scope, $http, function() {
		$scope.tickets = ticketList;
	});
	
}]);

// ---- Details controller ----
ticketsController.controller('DetailsController', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {
	
	// checks if state id is valid (doesnt need to exist in list)
	if ($stateParams['id'] == null || $stateParams['id'] == '' || isNaN($stateParams['id'])) {
		$state.go('tickets');
	}
	
	getTicketList($scope, $http, function() {
		$scope.ticket = ticketList.filter(function(ticket) {
			return ticket.Id == $stateParams['id'];
		})[0];
	});
	
	// checks if it returned anything
	if ($scope.ticket == null || $scope.ticket == '') {
		$state.go('tickets');
	}

}]);

function getTicketList($scope, $http, callback) {
	// if list is null or time to update
	if (ticketList == null || new Date().getTime() - lastUpdate > updateTime) {
		$http.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
	
		$http.get("http://localhost:55178/").success(function(data) {
			ticketList = data;
			lastUpdate = new Date().getTime();
			
			if (callback != null && typeof callback === 'function') {
				callback();
			}
			
		});
	} else {
		if (callback != null && typeof callback === 'function') {
			callback();
		}
	}
}