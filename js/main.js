$(document).ready(function(){
	// Scroll 
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 50){
		$(".priv").css("opacity","1");
		$(".priv").css("height","55px");
		$(".priv").css("margin-top","0");
		$(".priv").css("z-index","99");
    	$(".priv").css("background","#fff");
    	$(".priv").css("transition","all 0.3s linear");
    } 
    if (wn < 50){
		$(".priv").css("opacity","0");
		$(".priv").css("height","0");
		$(".priv").css("margin-top","91px");
		$(".priv").css("z-index","-1");
    	$(".priv").css("transition","all 0.1s linear");
    }
  });

  	// Phone Input
	const phoneInputField = document.querySelector("#number");
	const phoneInput = window.intlTelInput(phoneInputField, {
		utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
	});



	
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


// Taps
function tabs(evt, steps) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tabcontent");

	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");

	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(steps).style.display = "block";

	evt.currentTarget.className += " active";
}


function tabss(evt, steps) {
	var i, tabcontentt, tablinkss;

	tabcontentt = document.getElementsByClassName("tabcontentt");

	for (i = 0; i < tabcontentt.length; i++) {
		tabcontentt[i].style.display = "none";
	}

	tablinkss = document.getElementsByClassName("tablinkss");

	for (i = 0; i < tablinkss.length; i++) {
		tablinkss[i].className = tablinkss[i].className.replace(" active", "");
	}

	document.getElementById(steps).style.display = "block";
	
	evt.currentTarget.className += " active";
}
