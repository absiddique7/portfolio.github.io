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
                var headerH = '110';
                $('html, body').stop().animate({
                    scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
                }, 1200, 'easeInOutExpo');
                event.preventDefault();
             });
        
           //responsive-menu
        $(".navbar-toggle").click(function(){
            $("body").addClass("mobile-menu-activeted");            
        });
          
        $("ul.nav.navbar-nav li a").click(function(){
            $(".navbar-collapse").removeClass("in");            
        });
        
        
        
          //slider
          
         $(".mySlider").owlCarousel({
          items: 1,
          loop: true,
          nav: true,         
          autoplay: true,
          touseDrag:false,
          smartSpeed:3000,
          animateOut: 'fadeOut',
          autoplayTimeout:10000,
          navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
          
      });
	
	
	var itemBg = $('.itemBg');
	
	
	$('.mySlider .singleSlide').each(function(){
		var itmeImg = $(this).find('.itemBg img').attr('src');
		$(this).css({
			background: 'url(' + itmeImg + ')'
		});
	});
	
	function mySlideFunc(){
	
		$('.owl-item').removeClass('next prev');
		
		var currenSlide = $('.mySlider .owl-item.active');
		currenSlide.next('.owl-item').addClass('next');
		currenSlide.prev('.owl-item').addClass('prev');

		var nextSlideImg = $('.owl-item.next').find('.itemBg img').attr('src');
		var prevSlideImg = $('.owl-item.prev').find('.itemBg img').attr('src');

		$('.owl-nav .owl-prev').css({
			background: 'url(' + prevSlideImg + ')'
		})

		$('.owl-nav .owl-next').css({
			background: 'url(' + nextSlideImg + ')'
            
		})
	
	}
	
	mySlideFunc();
	
	$(".mySlider").on('translated.owl.carousel', function(){
		mySlideFunc();
	});
	
	
	$(".mySlider").on('translate.owl.carousel', function(){
		$('.singleSlide h1').removeClass('fadeInRight animated').hide();
		$('.singleSlide p').removeClass('fadeInRight animated').hide();
		$('.singleSlide .learn-btn').removeClass('fadeInRight animated').hide();
	});	
	
	$(".mySlider").on('translated.owl.carousel', function(){
		$('.owl-item.active .singleSlide h1').addClass('fadeInRight animated').show();
		$('.owl-item.active .singleSlide p').addClass('fadeInRight animated').show();
		$('.owl-item.active .singleSlide .learn-btn').addClass('fadeInRight animated').show();
	});
        
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
        
        
        
                // init Isotope
            var $grid = $('.grid').isotope({
              // options
            });

                $('.grid').isotope({
              itemSelector: '.grid-item',
              percentPosition: true,
              masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1
              }
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