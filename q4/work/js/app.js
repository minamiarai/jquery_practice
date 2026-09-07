$(function () {
  $(".nav li").click(function () {
    //クリックされた項目が「何番目か」を取得
    var a = $(".nav li").index(this);
    // 説明文のエリアを一旦すべて非表示にする
    $(".description li").addClass("is-hidden");
    //クリックされた番号と同じ説明文だけを表示する
    $(".description li").eq(a).removeClass("is-hidden")
  })
});