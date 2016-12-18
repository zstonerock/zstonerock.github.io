SF.router = (function(SF, $){

	function init() {

		var body = $('body');

		///////////////////////
		// Auto start        //
		///////////////////////
		SF.header.init();
		///////////////////////
		// Conditional Start //
		///////////////////////
		if(body.hasClass('index')) {
			//index module inits here
			// SF.index.init();
		}

	}

	return {
		init: init
	};

})(SF, jQuery);

SF.router.init();