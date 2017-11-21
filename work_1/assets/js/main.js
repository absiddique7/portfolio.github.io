(function ($) {
	"use strict";
    
     
      

    jQuery(document).ready(function($){
        
     
        /* TOP Menu Stick  */
        $(window).on('scroll',function() {
        if ($(this).scrollTop() > 1){  
            $('#sticky-header').addClass("sticky");
          }
          else{
            $('#sticky-header').removeClass("sticky");
          }
        }); 
        
          //smooth-scrool
            $('li.smooth-menu a').bind('click', function(event){
                var $anchor = $(this);
                var headerH = '70';
                $('html, body').stop().animate({
                    scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
                }, 1200, 'easeInOutExpo');
                event.preventDefault();
             });
        


          //main-slider
        
        $('.slider-active').owlCarousel({
            loop:true,
            nav:false,
            autoplay:true,
            items:1,
            smartSpeed:2500,
            responsive:{
                0:{
                    items:1
                }
            }
        });    
        
        //main-slider
        
        $('.testimonial-active').owlCarousel({
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
                    items:2
                }
            }
        });  
        
        //main-slider
        
        $('.blog-carousel').owlCarousel({
            loop:true,
            nav:false,
            autoplay:true,
            items:1,
            smartSpeed:1000,
              responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
        });
        
        //main-slider
        
        $('.brand-active').owlCarousel({
            loop:true,
            nav:false,
            autoplay:true,
            items:1,
            dots:false,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
        
          // Initializing Skillbar Animation
    $('.skill').waypoint({
      handler: function(direction) {
        if (direction == "up") {
            $('.skillbar').each(function(){
                $(this).find('.skillbar-bar').css("width","0");
            });
        }
        else if(direction == "down"){
            $('.skillbar').each(function(){
                $(this).find('.skillbar-bar').animate({
                    width:jQuery(this).attr('data-percent')
                },2000);
            });
        }       
      },
      offset: 'bottom-in-view'
    });


          //mixitup
       $('#Container').mixItUp();  
        
          $('.img-poppu').magnificPopup({
                    type: 'image',
                    gallery:{
                        enabled:true
                    }
                });
        
      //responsive-menu
        $(".navbar-toggle").click(function(){
            $("body").addClass("mobile-menu-activeted");            
        });
          
        $("ul.nav.navbar-nav li a").click(function(){
            $(".navbar-collapse").removeClass("in");            
        });
      
          

    });


    jQuery(window).load(function(){
        
         //preloder
       jQuery(".preloader").delay(3000).fadeOut("slow");
        
        //scrollup
          $(window).scroll(function () { 
                if($(this).scrollTop() > 10 ) { 
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