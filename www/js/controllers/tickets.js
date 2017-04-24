var ticketsController = angular.module('ticketsController', []);

var ticketList = null;
var lastUpdate = -1;

// ---- List controller ----
ticketsController.controller('TicketListController', ['$scope', '$http', function($scope, $http) {
	
	getTicketList($scope, $http, function() {
		$scope.tickets = ticketList;
	});
	
}]);

// ---- Details controller ----
ticketsController.controller('DetailsController', ['$scope', '$http', '$state', '$stateParams', '$ionicHistory', function($scope, $http, $state, $stateParams, $ionicHistory) {
	
	// checks if state id is valid (doesnt need to exist in list)
	if ($stateParams['id'] == null || $stateParams['id'] == '' || isNaN($stateParams['id'])) {
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$state.go('tabs.tickets');
	}
	
	getTicketList($scope, $http, function() {
		$scope.ticket = ticketList.filter(function(ticket) {
			return ticket.Id == $stateParams['id'];
		})[0];
	});
	
	// checks if it returned anything
	if ($scope.ticket == null || $scope.ticket == '') {
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$state.go('tabs.tickets');
	}
	
	$scope.addToCart = function(id) {
		addToCart(id, $http);
	};
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