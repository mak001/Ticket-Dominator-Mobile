var ticketDominatorApp = angular.module('ticketDominatorApp', ['ionic', 'ticketsController']);

ticketDominatorApp.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		.state('tickets', {
			url: '',
			templateUrl: 'views/tickets/list.html',
			controller: 'ListController'
		})
		.state('tickets/details', {
			url: 'details/:id',
			templateUrl: 'views/tickets/details.html',
			controller: 'DetailsController'
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