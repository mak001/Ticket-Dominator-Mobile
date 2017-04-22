var ticketDominatorApp = angular.module('ticketDominatorApp', ['ionic', 'ticketsController', 'cartController']);

// around 30 mins - would be shorter in production
var updateTime = 1800000;

ticketDominatorApp.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		
		.state('tickets', {
			url: '/',
			templateUrl: 'views/tickets/list.html',
			controller: 'TicketListController'
				
		})
		
		.state('tickets/details', {
			url: '/details/:id',
			templateUrl: 'views/tickets/details.html',
			controller: 'DetailsController'
		})
		
		.state('cart', {
			url: '/cart',
			templateUrl: 'views/cart/cart.html',
			controller: 'CartController'
		});
	
	$urlRouterProvider.otherwise('/');
});

ticketDominatorApp.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
		}
		
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});