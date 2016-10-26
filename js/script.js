$(document).ready(function() {
	var event = 'None at this time.';
	var mq = window.matchMedia( "(max-width: 991px)" );
	var mq2 = window.matchMedia( "(max-width: 767px)" );

	if (mq.matches) {

		$('form').removeClass('forms');
		$('.form-group').addClass('sm-12');
		$('nav').addClass('navbar-fixed-top');
	}

	if (mq2.matches) {
		$('.navbar-brand').html('<img class="img-responsive" alt="brand" src="img/footerlogo.png">');
		$('footer').removeClass('footer');
	}

	//Populates upcoming events section in footer.
	$('#events').html(event);
}); // end doc ready