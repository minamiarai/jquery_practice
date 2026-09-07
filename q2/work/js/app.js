$(function () {
    //クリックでモーダルを表示
    $(".modal_open_button").click(function () {
        //背景をフェードイン
        $(".modal_win").fadeIn()
    });
    //クリックでモーダルを非表示
    $(".modal_close_button").click(function () {
        //背景をフェードアウト
        $(".modal_win").fadeOut()
    })
})