'use strict';
(function () {

	function AddressController($http) {
		pageEventSender.send($http,8);

	}

	angular.module('xrxfcWebApp')
		.controller('AddressController', AddressController);

})();
