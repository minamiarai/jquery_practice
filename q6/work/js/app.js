$(function () {
  $(".select-box").on("change", function () {
    var b = $(this).val(),          // 選択された値を取得
      c = $(".food-list li");     // 絞り込む対象の全リスト項目を取得

    "all" === b
      ? c.show()                    // "all" が選ばれた場合は全て表示
      : $.each(c, function (e, a) { // それ以外はリストを1つずつチェック
        var d = $(a).data("category-type"); // liの data-category-type 属性を取得
        b === d ? $(a).show() : $(a).hide(); // 値が一致すれば表示、違えば非表示
      });
  });
});