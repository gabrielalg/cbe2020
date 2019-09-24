function toggleMenuMobile(){
    $('.menu-btn').toggleClass('active');
    $('.menu-btn').toggleClass('not-active');
    if (!$('#menu').hasClass('responsive')) {
        $('#menu').addClass('responsive')
        $('#mobile-menu').addClass('mobile-menu-active')
        // $('.menu-layout').addClass('menu-mobile-active')
    } else {
        $('#menu').removeClass('responsive')
        $('#menu').addClass('menu')
        $('.mobile-menu').removeClass('mobile-menu-active')
        // $('.menu-layout').removeClass('menu-mobile-active')
    }
}

$(document).ready(function() {

    $('.mobile-menu').on('click', () => {
        toggleMenuMobile()
    });

    // $('body').on('click', '.menu .menu-item', function(e) {

    // toggleMenuMobile()

    // }

    $(window).resize(function(){
        if ($(this).width() >= 1240 && $('#menu').hasClass('responsive')){
          toggleMenuMobile()
        }
      })

    $('.banner').slick({
        infinite: true,
        speed: 700,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear'
    });

    $('.sponsors').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000
    });

    $(window).scroll(function() {
        
        const is_scroll = $(this).scrollTop() > 80;

        $('.nav').toggleClass('scroll', is_scroll);
        $('.container-logo').toggleClass('scroll', is_scroll);
        $('.logo-img').toggleClass('scroll', is_scroll);

        if ($('#menu').hasClass('responsive')) {
            $('#menu').toggleClass('scroll', is_scroll);
        }
        
    });

    // new Glide('.glide-sponsors', {
    //     type: 'carousel',
    //     startAt: 0,
    //     perView: 4,
    //     autoplay: 3000,
    //     gap: 30
    // }).mount()

    // new Glide('.glide-banner', {
    //     type: 'carousel',
    //     startAt: 0,
    //     perView: 1,
    //     // autoplay: 3000,
    //     // gap: 30
    // }).mount()
 

});