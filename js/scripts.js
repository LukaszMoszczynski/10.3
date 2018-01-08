$(function(){
	var carouselList = $("#carousel ul");
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
	}
	function changeNextSlide() {
		carouselList.animate({"marginLeft":-800}, 500, moveFirstSlide);
	}

	var interval = setInterval(changeNextSlide, 3000);


	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.before(firstItem);
		carouselList.css({marginLeft: -800});
	}
	function changePrevSlide() {
		carouselList.animate({"marginLeft": 0}, 500, moveLastSlide);
	}
	$("#rightArrow").click(function(event) {
		clearInterval(interval);
		changeNextSlide();
		interval = setInterval(changeNextSlide, 3000);
	});
	$("#leftArrow").click(function(event) {	
		clearInterval(interval);
		changePrevSlide();
		interval = setInterval(changeNextSlide, 3000);
	});
	$("#carousel").mouseover(function(event) {
		clearInterval(interval);
	});
	$("#carousel").mouseout(function(event) {
		clearInterval(interval);
		interval = setInterval(changeNextSlide, 3000);
	});
});

