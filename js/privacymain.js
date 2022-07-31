$(document).ready(function(){
	// Start NavBar
	$(function () {
		var winH = $(window).height();
		// $('.overlay').height(winH + ('9px'));
		$('.btn').click(function() {
			$('.toggle').css("display", "block");
			$('.toggle').addClass("antim");
			$('.toggle').removeClass("aniti");
		});
		$('.close').click(function() {
			// $('.toggle').css("display", "none");
			$('.toggle').addClass("aniti");
			$('.toggle').removeClass("antim");
		});
		$('.cl').click(function() {
			$('.toggle').addClass("aniti");
			$('.toggle').removeClass("antim");
		});
		$(window).scroll(function() {
			$('.toggle').addClass("aniti");
			$('.toggle').removeClass("antim");
		});
	});

});