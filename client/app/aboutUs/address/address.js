'use strict';

angular.module('xrxfcWebApp')
	.config(function ($stateProvider) {
		$stateProvider
			.state('aboutUs.address', {
				url: '/address',
				templateUrl: 'app/aboutUs/address/address.html',
				controller: 'AddressController',
				controllerAs: 'address'
			});
	});
