(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
       
        //wow js
         new WOW().init();
        

           //slicknav
        
        $(".main-menu").slicknav({
            prependTo: ".responsive-menu"
        });
        
        
           /* TOP Menu Stick  */
        $(window).on('scroll',function() {
        if ($(this).scrollTop() > 1){  
            $('#sticky-header').addClass("sticky");
          }
          else{
            $('#sticky-header').removeClass("sticky");
          }
        }); 
        
      /*===owl active====*/  
        $('.my-testimonial').owlCarousel({
            loop:true,
            nav:true,
            pagination:true,
            autoPlay: true, 
            smartSpeed:3000,
            navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
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
        })  
        
        //blog-carousel
        
        $('.blog-carousel').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            autoplay:true,
            smartSpeed:1000,  
            navText:[ '<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
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

        
         /*====SEARCH OVERLAP====*/

           jQuery('.search-open').on('click', function(){
                jQuery('.search-inside').fadeIn();
              });
          jQuery('.search-close').on('click', function(){
                jQuery('.search-inside').fadeOut();
               });		

             $('#Container').mixItUp();

                $('.img-poppu').magnificPopup({
                    type: 'image',
                    gallery:{
                        enabled:true
                    }
                });
        
 
        
           //smooth-scrool
            $('li.smooth-menu a').bind('click', function(event){
                var $anchor = $(this);
                var headerH = '55';
                $('html, body').stop().animate({
                    scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
                }, 1200, 'easeInOutExpo');
                event.preventDefault();
             });



        });

  


    jQuery(window).load(function(){
        
        
          jQuery(".loder-wrap").delay(3000).fadeOut("slow");
        
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