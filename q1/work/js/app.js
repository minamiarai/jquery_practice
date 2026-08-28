//Q1-1
$(function () {
  //読み込んだ時にq1の文字色を緑に変更
  $("#q1").css("color", "green");
});

//Q1-2
$(function () {
  //q2ボタンをクリックすると色が変わる。
  $("#q2").click(function () {
    $(this).css("background", "pink");
  });
});

//Q1-3
$(function () {
  //q3ボタンをクリックすると3秒かけてフェードアウトする。
  $("#q3").click(function () {
    $(this).fadeOut(3000);
  });
});

//Q1-4
$(function () {
  //q4ボタンをクリックするとサイズが変わる。
  $("#q4").click(function () {
    $(this).addClass("large");
  });
});

//Q1-5
$(function () {
  //q5ボタンをクリックするとボタンの内側の先頭にDOMが挿入される。
  $("#q5").click(function () {
    $(this).prepend("DOMの中の前");
  });
});

//Q1-6
$(function () {
  //q6ボタンをクリックすると2秒かけて移動する。
  $("#q6").click(function () {
    $(this).animate({ "margin-top": 100, "margin-left": 100 }, 2000);
  });
});

//Q1-7
$(function () {
  //q7ボタンをクリックするとコンソールにidを表示する。
  $("#q7").click(function () {
    console.log(this);
  });
});

//Q1-8
$(function () {
  //q8ボタンにカーソルを合わせる、外すとサイズが変わる。
  $("#q8").on({
    mouseenter: function () {
      $(this).addClass("large")
    },
    mouseleave: function () {
      $(this).removeClass("large")
    }
  });
});

//Q1-9
$(function () {
  //q9列をクリックすると配列のアラート表示される。
  $("#q9 li").on("click", function () {
    var a = $(this).index(); alert(a)
  });
});

//Q1-10
$(function () {
  //q10列をクリックするとq11列が連動する。
  $("#q10 li").on("click", function () {
    var a = $(this).index();

    $("#q11 li").eq(a).addClass("large-text");
  });
})
