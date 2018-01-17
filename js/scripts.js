$(function(){
	var carouselList = $("#carousel .images");
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft: -800});
	}
	function changeNextSlide() {
		carouselList.animate({"marginLeft": -1600}, 500, moveFirstSlide);
	}

	var interval = setInterval(changeNextSlide, 3000);


	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({"marginLeft": -800});
	}
	function changePrevSlide() {
		carouselList.animate({"marginLeft": 0}, 500, moveLastSlide);
	}
	$("#rightArrow").click(function(event) {
	//	clearInterval(interval);
		changeNextSlide();
	//	interval = setInterval(changeNextSlide, 3000);
	});
	$("#leftArrow").click(function(event) {	
		//clearInterval(interval);
		changePrevSlide();
		//interval = setInterval(changeNextSlide, 3000);
	});
	$("#carousel").mouseover(function(event) {
		clearInterval(interval);
	});
	$("#carousel").mouseout(function(event) {
		clearInterval(interval);
		interval = setInterval(changeNextSlide, 3000);
	});
	var numberOfElements = carouselList.find("li").length;
	for (var i=0; i < numberOfElements; i++) {
		$("#carousel .dots").append('<li data-number="' + i + '"></li>');
		$("#carousel .dots").find("li:first").addClass("active");
	}
	$("#carousel .dots li").click(function(event) {
		var prevSlideNumber = $("#carousel .dots .active").attr('data-number');
		$("#carousel .dots li").removeClass("active");
		$(this).toggleClass("active");
		var acctiveSlideNumber = $(this).attr('data-number');
		if (acctiveSlideNumber > prevSlideNumber){
			var change = acctiveSlideNumber - prevSlideNumber;
			for (var j=0; j < change; j++){
				changeNextSlide();
			}
		}
		if (acctiveSlideNumber < prevSlideNumber){
			var prev = prevSlideNumber - acctiveSlideNumber;
			for (var k=0; k < prev; k++){
				changePrevSlide();
			}
		}
	});

});

