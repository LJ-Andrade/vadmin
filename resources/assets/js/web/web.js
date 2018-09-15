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

	var mySwiper2 = new Swiper('.portfolio-slider .swiper-container', {
		grabCursor: true,
		autoplay: true,
		autoHeight: true,
		spaceBetween: 150,
		autoplay: {
			delay: 4000,
		},
		loop: true,
		speed: 2000
	});
	
	
	//
	// |--------------------------------------------------------------------------
	// | Navigation
	// |--------------------------------------------------------------------------
	//
	
	$('#navfull-top-btn, #navfull-bottom-btn').click(function() {
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
	});
	
	
}); // Document Ready