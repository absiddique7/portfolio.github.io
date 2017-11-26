(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        
        //mobaile-menu
        $('nav#dropdown').meanmenu({
            meanScreenWidth: "991",
            meanMenuContainer: ".mobile-menu-area .container",
        });	
   
         new WOW().init();
        
        
         //d-sm-slider owl carosel
        
        $('.d-sm-slider-1').owlCarousel({
            loop:true,
            nav:false,
            autoplay:true,
            items:1,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                }
            }
        });
        
       
  
        
            // mixitup ////
        $('#Container').mixItUp();


        
        	//Magnific Popup
            $('.img-poppu').magnificPopup({
                type: 'image',
                gallery:{
                    enabled:true
                }
            });


        //owl carosel
        
            $('.slider-active').owlCarousel({
                loop:true,
                nav:false,
                autoplay:true,
                smartSpeed:1000,
                responsive:{
                    0:{
                        items:1
                    }
                }
            });
        
        
        //owl carosel
        
        $('.agent-active-s').owlCarousel({
            loop:true,
            nav:false,
            autoplay:true,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                }
            }
        });
        
        
        //owl carosel
        
        $('.dream-slider').owlCarousel({
            loop:true,
            nav:false,
            autoplay:true,
            items:1,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                }
            }
        });


       
     



    });
    


    jQuery(window).load(function(){
        
       jQuery(".loder-wrap").delay(3000).fadeOut("slow");
    	/*------------- preloader js --------------*/
        
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