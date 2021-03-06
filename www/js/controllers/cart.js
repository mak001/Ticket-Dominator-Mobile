var cartController = angular.module('cartController', []);

// ---- List controller ----
cartController.controller('CartController', ['$scope', '$http', function($scope, $http) {
	
	$http.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
	
	$http.get("http://localhost:55178/Cart").success(function(data) {
		console.log(data);
		if (data != null && data.length > 0) {
			$scope.cart = data;
		} else {
			$scope.cart = null;
		}
		
	});
	
}]);

function addToCart(id, $http) {
	$http.post('http://localhost:55178/Cart/AddToCart', {
		id: id,
		mobile: true
	},{
		// can't do this on localhost
		// withCredentials: true
	}).success(function(data) {
		console.log("added to " + id + " cart");
		console.log(data);
	});
}