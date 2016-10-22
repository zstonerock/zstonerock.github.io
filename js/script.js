$(document).ready(function() {

	var count = 0;

	$('#not-done').on('click', function() {

		var phrase = ['lol..wrong!', 'Cant guess it?', 'Dude. Just stop...', 'hahahahahahahahaaaa........stop.', 'Dude. Fail one more time and I will lock you out...', 'GOT YOU! No really I am serious this time..', 'last chance...', 'Buh-Bye!'];

		if ($('#password-check').val() === 'jw') {
			$('#finish').hide();
		} else {
			$('.lol').html(phrase[count]);
		}

		count++;

		if(count >= 8) {
			setTimeout(function() {
				$('.finish-box').html(':)');
			},3000);
		}

	});

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
	}

	//Populates upcoming events section in footer.
	$('#events').html(event);

}); // end doc ready