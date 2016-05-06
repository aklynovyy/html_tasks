$(document).ready(function(){

	// One page scroll
	onepage_scroll = $(".main").onepage_scroll({
	  sectionContainer: "section",
	  animationTime: 800,
	  easing: "cubic-bezier(0.175, 0.885, 0.420, 1.310)",
	  responsiveFallbackWidth: 767,
	  responsiveFallbackHeight: 600
	});

	// refresh hesh
	$(".header-navbar-nav li a").on('click', function(e){
		e.preventDefault();

		if ($(window).width() > 767) {
			$(".main").data("onepage_scroll").moveTo( $(this).data("index") );
		} else {
			var id = $(this).attr('href');
			
			$('.header-navbar-collapse').collapse('hide');
			$('html, body').animate({
        scrollTop: $(id).offset().top
	    }, 800);
		}
		// location.hash = $(this).attr("href");
		// console.log( $(this).attr("href") );

	});
	// end
});
