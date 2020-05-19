// sports.js

$(function(){
    // 2단계 메뉴 닫힘 (초기화)
    $('#gnb .depth2').hide();

    // hover
    $('#gnb .depth1 > li').hover(
    // mouseover
        function(){
            // 전체 열림
            // $('#gnb .depth2').stop().slideDown();

            // 해당 메뉴만 열림
            $(this)
                .children('.depth2')
                .stop().slideDown();
        },
    // mouseout
        function(){
            $('#gnb .depth2').stop().slideUp();
        },
    );
})