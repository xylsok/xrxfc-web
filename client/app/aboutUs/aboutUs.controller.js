'use strict';
(function () {

	function AboutUsController($scope, $state, Auth) {
		$scope.currentUser = Auth.getUser();
		$scope.Sysmenu = [
			{name: '团队介绍', state: '.introduction'},
			{name: '发展历程', state: '.development'},
			{name: '联系我们', state: '.address'}
			//{name: '员工风采', state: '.staff'}
		];
		$scope.isSysmenuActive = function (m) {
			return m.state.indexOf($state.current.name.replace('aboutUs', '')) >= 0;
		}

	}

	angular.module('xrxfcWebApp')
		.controller('AboutUsController', AboutUsController);

})();
