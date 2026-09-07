$(function () {
  //ボタンの見た目を切り替える
  $(".drawer_button").click(function () {
    //背景を、フェードイン／フェードアウトで交互に表示・非表示
    $(this).toggleClass("active"); $(".drawer_bg").fadeToggle();
    //メニュー本体を出したり引っ込めたりする
    $("nav").toggleClass("open")
  }); $(".drawer_bg").click(function () {
    //背景を非表示にする
    $(this).hide();
    //ボタンを通常状態に戻す
    $(".drawer_button").removeClass("active");
    //メニューを閉じる
    $("nav").removeClass("open")
  })
});