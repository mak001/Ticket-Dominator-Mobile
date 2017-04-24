var ticketDominatorApp = angular.module('ticketDominatorApp', ['ionic', 'ticketsController', 'cartController']);

// around 30 mins - would be shorter in production
var updateTime = 1800000;

ticketDominatorApp.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		
		.state('tabs', {
			url: '/',
			abstract: true,
			templateUrl: 'views/tabs.html'
		})
		
		.state('tabs.tickets', {
			url: 'tickets',
			views: {
				'tickets-tab': {
					templateUrl: 'views/tickets/list.html',
					controller: 'TicketListController'
				}
			}
		})
		
		.state('tabs.tickets/details', {
			url: 'tickets/details/:id',
			views: {
				'tickets-tab': {
					templateUrl: 'views/tickets/details.html',
					controller: 'DetailsController'
				}
			}
		})
		
		.state('tabs.cart', {
			url: 'cart',
			views: {
				'cart-tab': {
					templateUrl: 'views/cart/cart.html',
					controller: 'CartController'
				}
			}
		});
	
	$urlRouterProvider.otherwise('/tickets');
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