// var item = $('.mainMenu .menu-item');

// 메인 메뉴 제어를 위한 함수
// item.on('mouseover focusin', function(){
//  item.removeClass('.active')
//  $(this).addClass('.active');
// });

$(function(){
	$("#allmenudown ul li a").click(function(){
		$("#allmenudown .depth1").slideUp();
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	})
})