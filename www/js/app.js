var ticketDominatorApp = angular.module('ticketDominatorApp', ['ionic', 'ticketsController']);

var updateTime = 1800000;

ticketDominatorApp.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		.state('tickets', {
			url: '',
			views: {
				'content': {
					templateUrl: 'views/tickets/list.html',
					controller: 'ListController'
				},
				'header': {
					templateUrl: 'views/tickets/headers/list.html'
				}
			}
		})
		.state('tickets/details', {
			url: 'details/:id',
			views: {
				'content': {
					templateUrl: 'views/tickets/details.html',
					controller: 'DetailsController'
				},
				'header': {
					templateUrl: 'views/tickets/headers/details.html'
				}
			}
		});
	
	$urlRouterProvider.otherwise('');
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