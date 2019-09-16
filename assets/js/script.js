$(document).ready(function() {

    $(window).scroll(function() {
        
        const is_scroll = $(this).scrollTop() > 50;

        $('.nav').toggleClass('scroll', is_scroll);
        $('.container-logo').toggleClass('scroll', is_scroll);
        $('.logo-img').toggleClass('scroll', is_scroll);
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