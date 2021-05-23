// --------------- の動作 --------------
$(function() {
  var $allMsg = $('#title');
  var $wordList = $('#title').html().split("");
  $('#title').html("");
  $.each($wordList, function(idx, elem) {
      var newEL = $("<span/>").text(elem).css({ opacity: 0 });
      newEL.appendTo($allMsg);
      newEL.delay(idx * 70);
      newEL.animate({ opacity: 1 }, 3000);
  });
});

// --------------- 制作物の動作 --------------
$(window).on('load scroll', function(){

  var elem = $('.boxInner');

  elem.each(function () {

    var isPlay = 'isPlay';
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > elemOffset - wh + (wh / 4)){
      $(this).addClass(isPlay);
    }
  });
});

// -------------- ハンバーガ ー-------------
if (window.matchMedia('(max-width: 768px)').matches) {
  //スマホ処理

  $(".openbtn9").click(function () {//ボタンがクリックされたら

    $(this).toggleClass('active');
      $(".nav").fadeToggle(500);
  });

  $(".header_item").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".nav").fadeToggle(500);//ボタンの activeクラスを除去し
      $(".openbtn9").removeClass('active');//ナビゲーションのpanelactiveクラスも除去
  });

}



/*
Background Gradients From --
https://uigradients.com
*/
// --------------- slickの動作 --------------
AOS.init();