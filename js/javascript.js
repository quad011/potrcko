
$(document).ready(function(){

	$('.flexslider').flexslider();

	  $(window).scroll(function(){
	  	var scroll = $(window).scrollTop();
		  if (scroll > 30) {
		    $(".navbar").css("background-color" , "rgba(175, 176, 181, 0.7)");
		  }
		  	  else{
			  $(".navbar").css("background-color" , "transparent");  	
		  }
	  })
	//smooth scroll

	$("a[href^='#']").click(function(e) {
		e.preventDefault();
		
	var position = $($(this).attr("href")).offset().top;

		$("body, html").animate({
			scrollTop: position
		}, 1000 );
	});
	// to top(logo)
	$("a[href='#top']").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		 return false;
	});

	$('.nav').find('a').click(function() {
		$('.navbar-collapse').collapse('hide')
	})
	// $(document).scroll(function () {
 //    	var y = $(this).scrollTop();   
 //    	if (y > 500) {
 //        	$('.totop').fadeIn();
 //    	  } else {
 //        		$('.totop').fadeOut();
 //    	}
	// });
});



