
console.log("profile.js loaded");



var $nav = $(".profile-box");

	$(window).on("scroll", function () {
		//console.log(".sticky-nav scrolled:" + $nav.offset().top);


		var sticky_position = 80;
		if (window.matchMedia('(min-width: 512px)').matches) {
			console.log("min-width: 512px");
			sticky_position = 130;
		}

		if (window.matchMedia('(min-width: 768px)').matches) {
			console.log("min-width: 768px");
			sticky_position = 210;
		}



		if (window.matchMedia('(min-width: 992px)').matches) {
			console.log("min-width: 992px");
			sticky_position = 230;
		}



		if($(window).scrollTop()  > sticky_position) {
			$nav.addClass("sticky");
		} else {
			$nav.removeClass("sticky");
		}



	});