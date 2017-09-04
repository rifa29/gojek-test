$(document).ready(function(){
	$('.collapsible h3').click(function(){
		$(this).parents().siblings().children('ul').removeClass('show');
		$(this).next('ul').toggleClass('show');
		$(this).toggleClass('expand');
	});

	//show hide mobile menu
	$('.icon-menu').click(function(){
		$('.mobile-menu').addClass('show');
		$('.overlay').removeClass('hide');
	});
	$('.overlay').click(function(){
		$(this).addClass('hide');
		$('.mobile-menu').removeClass('show');
	});
});