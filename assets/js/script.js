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
   
    // $('body').on('click', '.menu .menu-item', function(e) {

    // toggleMenuMobile()

    // }

    // $(window).load(function(){
    //     $('#cover').fadeOut(1000);
    // });

    $(window).resize(function(){
        if ($(this).width() >= 1240 && $('#menu').hasClass('responsive')){
          toggleMenuMobile()
        }
    });


    $('.mobile-menu').on('click', () => {
        toggleMenuMobile()
    });


    $(window).scroll(function() {
        
        const is_scroll = $(this).scrollTop() > 80;

        var pageURL = window.location.pathname;

        if (pageURL.indexOf('index') >= 0) {

            $('.nav').toggleClass('scroll', is_scroll);
            $('.container-logo').toggleClass('scroll', is_scroll);
            $('.logo-img').toggleClass('scroll', is_scroll);
            $('.dropdown-menu').toggleClass('scroll', is_scroll);

        } else {

            return
        }
        

        // if ($('.nav').hasClass('scroll')) return

        // if ($('#menu').hasClass('responsive')) {
        //     $('#menu').toggleClass('scroll', is_scroll);
        // }
        
    });

    $('.drop-btn').on('click', () => {
        $('.dropdown-menu').toggleClass('show'); 
        $('.drop-btn img').toggleClass('rotate');
     });
      

    $(".sponsors-btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
        }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
        });
    } // End if
    }); 


  
    $(window).on('click', function(event) {

        if (!event.target.matches('.drop-btn') && !event.target.matches('.rotate')) {
          var dropdowns = document.getElementsByClassName("dropdown-menu");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              $('.dropdown-menu').removeClass('show');
              $('.drop-btn img').removeClass('rotate');
            }
          }
        }
    }); 


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

    
    $('.about-main-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000
        // asNavFor: '.about-small-img'
    });
    
    $('.about-small-img').slick({
        // infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.about-main-img',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true
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