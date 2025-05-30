jQuery(function ($){
    $('.header-button').on('click', function() {
        $('body').toggleClass('open');
    });
});

$(function(){
    $(window).scroll(function (){
        $('.about, .MENU_01, .MENU_02, .GUIDE, .ACCESS').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(this).addClass('active');
            }
        });
    });
});

$(function(){
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      });
});