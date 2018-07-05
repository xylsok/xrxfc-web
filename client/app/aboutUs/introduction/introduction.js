'use strict';

angular.module('xrxfcWebApp')
	.config(function ($stateProvider) {
		$stateProvider
			.state('aboutUs.introduction', {
				url: '/introduction',
				templateUrl: 'app/aboutUs/introduction/introduction.html',
				controller: 'IntroductionController',
				controllerAs: 'introduction'
			});
	});
