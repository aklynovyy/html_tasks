$(document).ready(function(){

	// One page scroll
	$('.main').onepage_scroll({
	  sectionContainer: "section"
	});

	// refresh hesh
	$('.header-navbar-nav li a').on('click', function(e){
		e.preventDefault();
		$('.main').moveTo( $(this).data('index') );
		location.hash = $(this).attr('href');
		// console.log( $(this).attr("href") );
	});
	// end
});
