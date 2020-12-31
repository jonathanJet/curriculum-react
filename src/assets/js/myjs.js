const $ = window.$ 
const WOW = window.WOW
	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	/*$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});*/

$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		$('.header').sticky({
			topSpacing: 0
		});

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})


	/* ---------------------------------------------- /*
		 * Home BG
		/* ---------------------------------------------- */

		$(".screen-height").height($(window).height());

		$(window).resize(function(){
			$(".screen-height").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({'background-attachment': 'scroll'});
		} else {
			$('#home').parallax('50%', 0.1);
		}

	/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		var wow = new WOW({
			mobile: false
		});
		wow.init();

		/* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */

		

		$(window).scroll(function() {

			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}

			if (window.scrollY == 0){
				$('.wow').removeClass('animated').css('visibility','hidden').css('animation-name','none');
				wow = new WOW({
					mobile: false
				});
				wow.init();
			}

		});

		setTimeout(function(){
			$('.loader').fadeOut()
			$('body').css('overflow-y',"auto")
		  },3000);

});


$(document).on('click','a[href*=\\#]',function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
	  scrollTop: $(anchor.attr('href')).offset().top
	}, 1000);
	e.preventDefault();
})