'use strict';
(function () {

	function IntroductionController($http) {
		pageEventSender.send($http,4);
	}

	angular.module('xrxfcWebApp')
		.controller('IntroductionController', IntroductionController);

})();
