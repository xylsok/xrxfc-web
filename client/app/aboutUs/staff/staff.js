'use strict';

angular.module('xrxfcWebApp')
	.config(function ($stateProvider) {
		$stateProvider
			.state('aboutUs.staff', {
				url: '/staff',
				templateUrl: 'app/aboutUs/staff/staff.html',
				controller: 'StaffController',
				controllerAs: 'staff'
			});
	});
