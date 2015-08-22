var RemoteControl = (function () {

	'use strict';

	if (!window.WebSocket) {
		throw new Error('WebSockets is not available.');
	}

	var RemoteControl = function () {

	};

	return RemoteControl;

})();