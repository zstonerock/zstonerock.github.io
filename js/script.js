$(document).ready(function() {

	var event = 'None at this time.';
	var mq = window.matchMedia( "(max-width: 991px)" );

	if (mq.matches) {

		$('form').removeClass('forms');
		$('.form-group').addClass('sm-12');
		$('nav').addClass('navbar-fixed-top');

		if ($('.index-footer').length) {
			$('#slideshow').addClass('index-margin');
		}
	
	}

	//Populates upcoming events section in footer.
	$('#events').html(event);

}); // end doc ready