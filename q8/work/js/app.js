$(function () {
  // 検索結果を描画する
  function renderResults(data) {
    $(".message").remove();
    var items;

    // 検索結果の件数が1件以上ある場合
    if (0 < (null == (items = data[0].items) ? void 0 : items.length)) {
      $.each(data[0].items, function (index, item) {
        var html = '<li class="lists-item"><div class="list-inner">' +
          '<p>タイトル：' + (item.title ? item.title : "タイトル不明") + '</p>' +
          '<p>作者：' + (item["dc:creator"] ? item["dc:creator"] : "作者不明") + '</p>' +
          '<p>出版社：' + (item["dc:publisher"] ? item["dc:publisher"][0] : "出版社不明") + '</p>' +
          '<a href="' + item.link["@id"] + '" target="_blank">書籍情報</a>' +
          '</div></li>';

        $(".lists").prepend(html);
      });
    } else {
      // 該当データがない場合のメッセージ表示
      $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>');
    }
  }

  var page = 1;         // 現在のページ番号
  var lastKeyword = ""; // 直前に検索したキーワード

  // 「検索」ボタンをクリックした時の処理
  $(".search-btn").on("click", function () {
    var keyword = $("#search-input").val();

    // 前回と異なるキーワードならページ数を初期化して一覧を空にする
    if (keyword !== lastKeyword) {
      page = 1;
      $(".lists").empty();
      lastKeyword = keyword;
    } else {
      // 同じキーワードで連続クリックした場合はページを更新
      page++;
    }

    // APIへリクエストを送信
    $.ajax({
      url: "https://ci.nii.ac.jp/books/opensearch/search?title=" + keyword + "&format=json&p=" + page + "&count=20",
      method: "GET"
    }).done(function (response) {
      renderResults(response["@graph"]);
    }).fail(function (xhr) {
      $(".lists").empty();
      $(".message").remove();

      // エラーのステータスコードに応じたメッセージ表示
      if (xhr.status === 0) {
        $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
      } else if (xhr.status === 400) {
        $(".lists").before('<div class="message">検索キーワードが有効ではありません。<br>1文字以上で検索してください。</div>');
      } else {
        $(".lists").before('<div class="message">予測せぬエラーが起きました。<br>再読み込みを行ってください。</div>');
      }
    });
  });

  // 「リセット」ボタンをクリックした時の処理
  $(".reset-btn").on("click", function () {
    page = 1;
    lastKeyword = "";
    $(".lists").empty();
    $(".message").remove();
    $("#search-input").val("");
  });
});