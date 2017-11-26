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
		
        
            //mobaile-menu
            $('nav#dropdown').meanmenu({
                meanScreenWidth: "991",
                meanMenuContainer: ".mobile-menu-area .container",
            });



             /* magnificPopup video view */
                $('.vedio-wrap a').magnificPopup({
                    type: 'iframe'
                });

               //counter-up
            $('.counter').counterUp();


        
       
        
   
        
              //datepicker
             $('#datetimepicker2').datetimepicker({
                yearOffset:false,
                lang:'ch',
                timepicker:false,
                format:'d/m/Y',
                formatDate:'Y/m/d'
            });


            //timepicker

            $('#datetimepicker1').datetimepicker({
                datepicker:false,
                timepicker:true,
                format:'H:i'
            });

       
        
        
        
            //main-slider

            $('.slider-active').owlCarousel({
                loop:true,
                nav:false,
                dots:true,
                autoplay:true,
                mouseDrag:false,
                touseDrag:false,
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

            $(".slider-active").on("translated.owl.carousel", function(){
                $(".single-slider h1, .single-slider p").addClass("animated fadeInUp").css("opacity", "1"); 
                $(".single-slider a").addClass("animated fadeInLeft").css("opacity", "1");            
            });

            $(".slider-active").on("translate.owl.carousel", function(){
                $(".single-slider h1, .single-slider p").removeClass("animated fadeInUp").css("opacity", "0"); 
                $(".single-slider a").removeClass("animated fadeInLeft").css("opacity", "0"); 
            });
        
        
        
        
        
            //doctor-slide

              $('.doctor-slider').owlCarousel({
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
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            });
        
        
        
        
    });


    jQuery(window).load(function(){
     
        //preloder-area        
        $(".preloder").delay(3000).fadeOut("slow");
        
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