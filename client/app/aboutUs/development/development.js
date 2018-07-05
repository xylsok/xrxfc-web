'use strict';

angular.module('xrxfcWebApp')
	.config(function ($stateProvider) {
		$stateProvider
			.state('aboutUs.development', {
				url: '/development',
				templateUrl: 'app/aboutUs/development/development.html',
				controller: 'DevelopmentController',
				controllerAs: 'development'
			});
	});
