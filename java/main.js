$(window).scroll(function(){
    if($(this).scrollTop()>100)
    {
        $(".arrow").show()
        $(".bg-light").addClass( "sticky")
    }
    else
    {
        $(".arrow").hide()
        $(".bg-light").removeClass("sticky")
       
    }
});

AOS.init();






$(document).ready(function(){
    $(".move").owlCarousel(
        {
            items:3,
            loop:true,
            nav:false,
            margin:20,
            autoplay:true,
            autoplayTimeout:1500,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:false,
                }
            }
        })
        $(".move1").owlCarousel(
            {
                items:2,
                loop:true,
                nav:false,
                margin:20,
                autoplay:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:2,
                        nav:false,
                    }
                }
            });
        }
    );


	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


$('#number1').jQuerySimpleCounter({end: 133,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 122,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 133,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 136,duration: 2500});
