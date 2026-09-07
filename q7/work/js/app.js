$(function () {
  //送信ボタン（クラス名: btn__submit）がクリックされたタイミングで、中の処理が実行。
  $(".btn__submit").on("click", function () {
    console.log("名字");
    console.log($("#family__name").val());
    //#family__name や #email などの ID やクラスから、ユーザーが入力した値を取得。
    console.log("名前");
    console.log($("#given__name").val());

    console.log("生年月日");
    console.log($(".year").val() + "年" + $(".month").val() + "月" + $(".day").val() + "日");
    //name="gender"のうち、現在チェックがついている項目（:checked）の値のみを取得。
    console.log("性別");
    console.log($('[name="gender"]:checked').val());

    console.log("職業");
    console.log($(".occupation").val());

    console.log("アカウント名");
    console.log($("#account__name").val());

    console.log("メールアドレス");
    console.log($("#email").val());

    console.log("パスワード");
    console.log($("#password").val());

    console.log("確認用パスワード");
    console.log($("#duplication__password").val());

    console.log("住所");
    console.log($("#address").val());

    console.log("電話番号");
    console.log($("#tel").val());
    //name="subscription"は複数選択が可能なチェックボックスであるため、チェックされている要素すべてに対してループ処理を行い、選択された値を1つずつ出力している。
    console.log("購読情報");
    $('[name="subscription"]:checked').each(function () {
      console.log($(this).val());
    });
  });
});