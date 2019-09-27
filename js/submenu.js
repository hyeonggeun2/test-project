// var item = $('.mainMenu .menu-item');

// 메인 메뉴 제어를 위한 함수
// item.on('mouseover focusin', function(){
//  item.removeClass('.active')
//  $(this).addClass('.active');
// });

// $(function(){
// 	$("#allmenudown ul li a").click(function(){
// 		$("#allmenudown .depth1").slideUp();
// 		if(!$(this).next().is(":visible"))
// 		{
// 			$(this).next().slideDown();
// 		}
// 	})
// })

var viewport = window.matchMedia('(max-width:1299px)');
$(window).resize(function () {
	location.reload();
});

if (viewport.matches) {
	var body = $('.body');
var btnopen = $('.dropbtn');
var btnclose = $('.mobileMenu_closeBtn');
var menudiv = $('.allMenuContents');
var menua = $('.menu-item-btn');
var submenu = $('.depth1');
var submenua = $('.submenu-item-btn');

btnopen.on('click', function (e) {
	e.preventDefault();
	body.addClass('body-hidden');
	menudiv.addClass('menu-act');
	btnclose.addClass('show');
});

btnclose.on('click', function (e) {
	e.preventDefault();
	body.removeClass('body-hidden');
	menudiv.removeClass('menu-act');
	btnclose.removeClass('show');
});

menua.on('click', function (e) {
	e.preventDefault();
	$(this).parent().siblings().children().removeClass('menu-act');
	$(this).siblings('ul').toggleClass('menu-act');
});


submenua.on('click', function (e) {
	e.preventDefault();
	$(this).parent().siblings().children().removeClass('menu-act');
	$(this).siblings('ul').toggleClass('menu-act');
});

} else {
	function myFunction() {
		document.getElementById("allmenudown").classList.toggle("show");
	}

	// Close the dropdown if the user clicks outside of it
	window.onclick = function (event) {
		if (!event.target.matches('.dropbtn')) {
			var dropdowns = document.getElementsByClassName("allMenuContents");
			console.log('2번째', dropdowns.length)
			if (dropdowns.classList.contains('show')) {
				dropdowns.classList.remove('show');
			}
		}
	}
}