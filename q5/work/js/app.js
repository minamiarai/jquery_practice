$(function () {
  //.dropdwn の中にある liにマウスカーソルが乗った時と、外れた時のイベントを設定
  $(".dropdwn li").hover(
    function () {
      //$(this)（マウスが乗っている li）の直下にある ul 要素だけを探して取得
      $(this).children("ul").stop().slideDown();
    }, function () {
      //現在実行中、あるいは順番待ちに入っているアニメーション処理をその場で一時停止・クリア
      $(this).children("ul").stop().slideUp();
    }
  );
});