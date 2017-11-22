(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        //wow.js
        new WOW().init();
        
        
        //scroll-spy
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset:95
        });
        
        
        //popup
         $('.img-poppu').magnificPopup({
                    type: 'image',
                    gallery:{
                        enabled:true
                    }
                });


      /*==== Nav ====*/
    $('.navbar-collapse a').on('click',function(){
    	$(".navbar-collapse").collapse('hide');
    });
        
            /*==== Smoothscroll ====*/    
	$('#home a, .custom-navbar a').on('click', function(event) {
		var $anchor = $(this);
		  $('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 64
		 }, 1000);
		  event.preventDefault();
	});	
        
         

    
	/*==== Sticky ====*/
	$("#header").sticky({topSpacing:0});
        
        
      //counter-up
        $('.counter').counterUp({
            delay: 15,
            time: 4000
        });
        
        
        //testimonial
         $('.testi-active').owlCarousel({
            loop:true,
            nav:false,
            dots:true,
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
                $('.vedio-wrap a').magnificPopup({
                    type: 'iframe'
                });
        
             //mixitup
       $('#Container').mixItUp();  
        
          $('.img-poppu').magnificPopup({
                    type: 'image',
                    gallery:{
                        enabled:true
                    }
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