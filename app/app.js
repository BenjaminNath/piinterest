(function () {
  'use strict';

	angular
	  .module('app', ['ui.router'])
	  .config(config)
		.run(run);
  
	function config($stateProvider, $urlRouterProvider) {
	  //default route
		$urlRouterProvider.otherwise("/");
	  
		$stateProvider
		  .state('home', {
			  url: '/',
				templateUrl: 'home/index.html',
				controller: 'home.IndexController',
				controllerAs: 'vm',
				data: { activeTab: 'home' }
			})
			.state('account', {
			  url: '/account', 
				templateUrl: 'account/index.html',
				controller: 'Account.IndexController',
				controllerAs: 'vm',
				data: { activeTab: 'account' }
			});
	}
	function run($http, $rootScope, $window) {
	  $http.defaults.headers.common['Authorization'] = 'Bearer ' +$window.jwtToken;

		//update active tab on state change
		$rootScope.$on('$staeChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		  $rootScope.activeTab = toState.data.activeTab;
		});
	}
	//manually bootstrap angular after the JWT token is retrieved from the server
	$(function () {
	  //get JWT toekn from server
		$.get('/app/token', function(token) {
		  window.jwtToken = token;

			angular.bootstrap(document, ['app']);
		});
	});
})();

