function toggleMenuMobile(is_closed) {

    $(".menu-btn span").removeClass("not-animate");

    if (is_closed) {
      $('.menu-btn').removeClass('active');
      $('.menu-btn').addClass('not-active');
    } else {
      $('.menu-btn').toggleClass('active');
      $('.menu-btn').toggleClass('not-active');
    }
    
    if (!$('#menu').hasClass('responsive') && !is_closed) {
        $('#menu').addClass('responsive')
        $('#mobile-menu').addClass('mobile-menu-active')
        // $('.menu-layout').addClass('menu-mobile-active')
    } else {
        $('#menu').removeClass('responsive')
        $('#menu').addClass('menu')
        $('.mobile-menu').removeClass('mobile-menu-active')
        $('.dropdown-menu .menu-item').removeClass('show-txt-menu');
        $('.dropdown-menu').removeClass('show');
        $('.drop-btn img').removeClass('rotate');
        // $('.menu-layout').removeClass('menu-mobile-active')
    }
}


$(document).ready(function() {

    // TODO: Remover isso quando remover modal do coronga!
    $('body').css('overflow', 'hidden')
   
    // $('body').on('click', '.menu .menu-item', function(e) {

    // toggleMenuMobile()

    // }

    // $(window).load(function(){
    //     $('#cover').fadeOut(1000);
    // });

    $(window).resize(function(){
        if ($(this).width() >= 1120 && $('#menu').hasClass('responsive')){
          toggleMenuMobile()
        }

        // if ($(this).width() >= 1120) {
        //   changeNavColor()
        // }
    });


    $('.mobile-menu').on('click', () => {
        toggleMenuMobile()
    });


    function changeNavColor(_this) {

        const is_scroll = $(_this || window).scrollTop() > 60;
        // const is_scrollBanner = $(_this || window).scrollTop() > 200;

        var pageURL = window.location.pathname;
    
        if (pageURL.indexOf('index') >= 0 || pageURL === '/') {
    
            $('.nav').toggleClass('scroll', is_scroll);
            $('.container-logo').toggleClass('scroll', is_scroll);
            $('.logo-img').toggleClass('scroll', is_scroll);
            $('.dropdown-menu').toggleClass('scroll', is_scroll);

            // $('.banner').toggleClass('move-banner', is_scrollBanner)
    
        }
    }

    changeNavColor()
    

    $(window).scroll(function() {
        
     changeNavColor(this)

        // if ($('.nav').hasClass('scroll')) return

        // if ($('#menu').hasClass('responsive')) {
        //     $('#menu').toggleClass('scroll', is_scroll);
        // }
        
    });

    $('.drop-btn').on('click', () => {
        $('.dropdown-menu').toggleClass('show');
        $('.dropdown-menu .menu-item').toggleClass('show-txt-menu');
        $('.drop-btn img').toggleClass('rotate');
     });

     $(".close-modal").on('click', function(event)  {
      event.preventDefault();
      // $('.content-modal').fadeOut()
      $('.modal-dialog').animate({
        opacity: '0'
      }, 100, function() {
        setTimeout(() => {
          $(this).hide()
          $('body').css('overflow', 'auto')
        }, 100)
      })
      
     });

     $(".open-modal").on('click', function(event)  {
      event.preventDefault();
      // $('.content-modal').fadeOut()
      $('.modal-dialog').show()

      $('.modal-dialog').animate({
        opacity: '1'
      }, 100, function() {
          $('body').css('overflow', 'hidden')
        })
      
     });
      
      

    $(".sponsors-btn, .page-top-btn, .session-btn").on('click', function(event) {

      let top_distance = 80

      if ($(this).hasClass('sponsors-btn')) {
        top_distance = 70
        toggleMenuMobile(true)
      }
      if ($(this).hasClass('session-btn')) {
        top_distance = 110
        toggleMenuMobile(true)
      }
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top - top_distance
          }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          // window.location.hash = hash;
          });
      } // End if
    }); 
  
    $(window).on('click', function(event) {

        if (!event.target.matches('.drop-btn') && 
          !event.target.matches('.rotate') &&
          $('.mobile-menu').is(':hidden')) {
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

    // TOGGLE ORGANIZADORES

    function animateOrgSlide() {
      $('.organizers, .local-organizing, .scicom').stop(true,false)

        if($('#organizers').hasClass('sub-active')) {

            $('.organizers').show()

            $('.organizers').animate({
              left: '0'
            }, 300, 'swing', function(){
              $('.org-wrap').css('height','auto')
            })

            $('.scicom').animate({
              left: '100vw'
            }, 400, 'swing', function(){
              $(this).hide()
              
            })
            $('.local-organizing').animate({
              left: '200vw'
            }, 400, 'swing', function(){
              $(this).hide()
            })
            
        } else if($('#scicom').hasClass('sub-active')) {
         
          $('.scicom').css('display','flex') 
          

          $('.scicom').animate({
            left: '0'
          }, 300, 'swing', function(){
           
          })
          
          $('.org-wrap').css('height', $('.scicom').height() + (+$('.scicom').css('padding-top').replace('px', '')) + 10)


          $('.organizers').animate({
            left: '-100vw'
          }, 400, 'swing', function(){
            $(this).hide()
          })
          $('.local-organizing').animate({
            left: '100vw'
          }, 400, 'swing', function(){
            $(this).hide()
          })
          
 
      } else {

          $('.local-organizing').show()
        
          
          $('.local-organizing').animate({
            left: '0'
          }, 300, 'swing', function(){
            $('.org-wrap').css('height',$('.local-organizing').height() + (+$('.local-organizing').css('padding-top').replace('px', '')) + 10)
          })

          $('.scicom').animate({
            left: '-100vw'
          }, 400, 'swing', function(){
            $(this).hide()
            
          })

          $('.organizers').animate({
            left: '-200vw'
          }, 400, 'swing', function(){
            $(this).hide()
          })
           
        } 
    }

    let tm = null
    $('.org-sub-slick, .program-slick').on('swipe', function(event, slick, direction){
      clearTimeout(tm)
      tm = setTimeout(() => {
        $('.slick-slide .org-sub.sub-active', $(this)).removeClass('sub-active')
        $('.slick-current', $(this)).find('.org-sub').addClass('sub-active')
        
        animateOrgSlide()
            
      }, 0) 
      // tempo que o victor pediu pra animação acontecer
      
      // left
    });

    $('.org-sub').not('.non-clickable').on('click', function() {

        if ($(this).hasClass('sub-active')) return

        $('.org-sub').removeClass('sub-active')

        $(this).addClass('sub-active');

        animateOrgSlide()
            
    });

    $(".load-more-btn").on('click', function() {
    
      $('.load-more').css('display','none')
      $('#gallerypt2').removeClass('force-display-none')

    });

  //  --------- SLICK 

    $('.banner').slick({
        infinite: true,
        speed: 700,
        fade: true,
        appendArrows: $('.overlay'),
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 750,
            settings: {
              arrows: false
            }
          }
        ]
    });

    $('.sponsors').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 3500,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplaySpeed: 3000
                // infinite: true,
                // dots: true
              }
            },
            {
                breakpoint: 780,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  autoplaySpeed: 3000,
                  speed: 500
                }
              },
              {
                breakpoint: 550,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplaySpeed: 3000,
                  speed: 500
                }
              }
            ]
    });


    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

    
    $('.about-main-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 4000,
        asNavFor: '.about-small-img-2'
    });
    
    $('.about-small-img-2').slick({
        slidesToShow: 18,
        slidesToScroll: 1,
        asNavFor: '.about-main-img',
        dots: false,
        focusOnSelect: true,
        infinite: false,
        arrows: false
        // centerMode: true,
        // centerPadding: '60px',
        // infinite: true,
        // autoplay: true,
        // vertical: true,
       
    });


    if ($(window).width() <= 530) {
      $('.org-sub-slick').slick({
          dots: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '50px',
          focusOnSelect: true,
          cssEase: 'ease-in-out',
          speed: 350
      });

      $('.program-slick').slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '70px',
        focusOnSelect: true,
        cssEase: 'ease-in-out',
        speed: 350
     });

    }

          
    $(window).resize(function(){
      if ($(this).width() <= 530) {
        $('.org-sub-slick').slick({
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            focusOnSelect: true,
            cssEase: 'ease-in-out',
            speed: 350
        });

        $('.program-slick').slick({
          dots: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '70px',
          focusOnSelect: true,
          cssEase: 'ease-in-out',
          speed: 350
       });

      } else {
        $('.org-sub-slick').slick('unslick');
        $('.program-slick').slick('unslick');
      }
    })

  // --------- UNITE GALLERY

    $('#gallery').unitegallery({
        tiles_type:"justified"
        // lightbox_textpanel_width: 230
    }); 


    $('#gallerypt2').unitegallery({
      tiles_type:"justified"
      // lightbox_textpanel_width: 230
  }); 



});