// index of selected and initial slide
var current_slide = 0;

function slide() {
	abilityToSlide();

	$('.slide:visible').fadeOut('400', function() {
		$('.slide').eq(current_slide).fadeIn();
	});
}

function abilityToSlide() {
	$('.previous, .next').removeClass('disabled');
	var numSlides = $('.slide').length - 1;

	if(current_slide === 0) {
		$('.previous').addClass('disabled');
	}
	if(current_slide === numSlides) {
		$('.next').addClass('disabled');
	}
}

$(function(){
	abilityToSlide();

	$('.next').click(function(e) {
		e.preventDefault();
		current_slide += 1;
		slide();
	});

	$('.previous').click(function(e) {
		e.preventDefault();
		current_slide -= 1;
		slide();
	});
});
