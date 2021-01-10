function gnbMenuFnc() {
    $('.btn-allmenu').on('click', function() {
        $(this).toggleClass('on');
        if ($(this).hasClass('on')) {
            $('html').addClass("ovh");
        } else {
            $('html').removeClass("ovh");
        }
    });

    $('#gnb-menu-wrap .gnb > li > a').on('click', function() {
        $('#gnb-menu-wrap .on').removeClass('on');
        $(this).addClass('on');
    });
}

function mainVisualSlideFnc() {
    $('.main-visual-slide').slick({
        'dots': true
    });
}

function loadingBarHideFnc() {
    $('.loadingbar').delay(1000).fadeOut(300);
}
$(function() {
    mainVisualSlideFnc();
    gnbMenuFnc();
    loadingBarHideFnc();
});