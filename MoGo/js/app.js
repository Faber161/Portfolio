$(function() {

	// Fixed Header
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle");
	let burger = $("#burger-btn")

	checkScroll(scrollPos, introH)

	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH)
	});

		function checkScroll(scrollPos, introH) {
			if( scrollPos > introH) {
				header.addClass("header--fixed");
			} else {
				header.removeClass("header--fixed");
			}
		};


	//Smooth Scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;

		nav.removeClass("active");
		burger.removeClass("active");

		$("html, body").animate({
			scrollTop: elementOffset
		}, 700);
	});



	//Nav Toggle
	navToggle.on("click", function(event){
		event.preventDefault();
		nav.toggleClass("active");
		burger.toggleClass("active");
	});

	//Collapse
	$("[data-collapse]").on("click", function(event){
			event.preventDefault();

			let $this = $(this);

			$this.toggleClass("active");
	});

	//Slider
	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});
});