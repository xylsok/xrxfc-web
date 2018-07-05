'use strict';

angular.module('xrxfcWebApp')
	.config(function ($stateProvider) {
		$stateProvider
			.state('aboutUs', {
				url: '/aboutUs',
				templateUrl: 'app/aboutUs/aboutUs.html',
				controller: 'AboutUsController',
				controllerAs: 'aboutUs'
			});
	});
