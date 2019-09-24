var item = $('.mainMenu .menu-item');

// 메인 메뉴 제어를 위한 함수
item.on('mouseover focusin', function(){
  item.removeClass('.active')
  $(this).addClass('.active');
});