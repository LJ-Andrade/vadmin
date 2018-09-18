$(document).ready(function () {
	
//
// |--------------------------------------------------------------------------
// | Vendor
// |--------------------------------------------------------------------------
//

//
// |--------------------------------------------------------------------------
// | Sliders
// |--------------------------------------------------------------------------
//

	//
	// |--------------------------------------------------------------------------
	// | Navigation
	// |--------------------------------------------------------------------------
	//
	$('#navfull-top-btn, #navfull-bottom-btn').click(function() {
		toggleNav();
	});
	
	window.toggleNav = function()
	{
		const nav = $('#navfull');
		const body = $('body');
		const trigger = $('#navfull-top-btn');
		const bottomTrigger = $('#navfull-bottom-btn');
		
		if(nav.hasClass('navfull-active'))
		{
			nav.removeClass('navfull-active');
			trigger.removeClass('navfull-top-active');
			bottomTrigger.removeClass('navfull-bottom-active');
			body.css('overflow','auto');
		} else {
			nav.addClass('navfull-active');
			trigger.addClass('navfull-top-active');
			bottomTrigger.addClass('navfull-bottom-active');
			body.css('overflow','hidden');
		}
	}
	
	//
	// |--------------------------------------------------------------------------
	// | Forms
	// |--------------------------------------------------------------------------
	//
	
	window.fillDemo = function()
	{
		const message = "Quisiera que me envien una demostración de un e-commerce. Muchas gracias.";
		$('#Form-Textarea').html(message);
		$('#Form-Name-Input').focus();
	}

	//
	// |--------------------------------------------------------------------------
	// | Others
	// |--------------------------------------------------------------------------
	//
		
	// Scroll Smoothing
	// --------------------------------------------------
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname)
			{
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
					scrollTop: target.offset().top
					}, 1000, function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});
	
	// Go to top
	// --------------------------------------------------
	$('#go-to-top').hide();
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#go-to-top').fadeIn('slow');
        } else {
            $('#go-to-top').fadeOut('slow');
        }
    });
    $('#go-to-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
	});
	
}); // Document Ready
