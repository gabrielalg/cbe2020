$(document).ready(function() {

    $(window).scroll(function() {
        
        const is_scroll = $(this).scrollTop() > 50;

        $('.nav').toggleClass('scroll', is_scroll);
        $('.container-logo').toggleClass('scroll', is_scroll);
        $('.logo-img').toggleClass('scroll', is_scroll);
    });

});