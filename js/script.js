$(document).ready(function() {

	var mq = window.matchMedia( "(max-width: 991px)" );

	if (mq.matches) {

		$('form').removeClass('forms');
		$('.form-group').addClass('sm-12');
		$('nav').addClass('navbar-fixed-top');
		
	}


	//Populates upcoming events section in footer.
	$('#events').html('None at this time.');

}); // end doc ready