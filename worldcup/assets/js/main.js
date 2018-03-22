(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
          	/*---------------------
             TOP Menu Stick
            --------------------- */
            var s = $("#sticker");
            var pos = s.position();					   
            $(window).on('scroll',function() {
                var windowpos = $(window).scrollTop();
                if (windowpos > pos.top) {
                s.addClass("stick");
                } else {
                    s.removeClass("stick");	
                }
            });	
        
           //smooth-scrool
            $('li.smooth-menu a').bind('click', function(event){
                var $anchor = $(this);
                var headerH = '60';
                $('html, body').stop().animate({
                    scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
                }, 1200, 'easeInOutExpo');
                event.preventDefault();
             });
        
          //mobaile-menu
        
        $('#mobaile-menu').meanmenu({
            meanMenuContainer: '.mobaile-menu',
            meanScreenWidth: "767"
        });


        //counter-up
    $(".rasel").counterUp({
        delay: 10,
        time: 1000
    });
        
          //testimonial
         $('.slide-active').owlCarousel({
            loop:true,
            nav:false,
            autoplay:true,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        }); //testimonial
         $('.testimonial-slide').owlCarousel({
            loop:true,
            nav:false,
            autoplay:true,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
        
              /* magnificPopup video view */
                $('.vedio-bg a, .slide-vedio a').magnificPopup({
                    type: 'iframe'
                });
        



        


    });


    jQuery(window).load(function(){
         //preloder-area        
        $(".preloder").delay(3000).fadeOut("slow");
        
               //scrollup
          $(window).scroll(function () { 
                if($(this).scrollTop() > 100 ) { 
                    $('.scrollup') .fadeIn(); 
                } else { 
                    $('.scrollup') .fadeOut();
                }
            });
      
        $('.scrollup').click(function () {
                $ ("html,body").animate({
                    scrollTop:0
                },500);
                return false;


        });

        
    });


}(jQuery));	