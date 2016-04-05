$(function(){

	$('input').hover(function(){
		$(this).siblings('div').addClass('show');
	});

	$('input').mouseout(function(){
		$(this).siblings('div').removeClass('show');
	});

	$('input').focusin(function(){
		$(this).siblings('div').addClass('show');
	});

	$('input').focusout(function(){
		$(this).siblings('div').removeClass('show');
	});
	

	$('button').click(function(){
		$('.hint').addClass('show');
	});

})

