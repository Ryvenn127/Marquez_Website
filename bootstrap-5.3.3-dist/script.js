// window scroll

$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 50){
        $('body').addClass('fixed-header')
    } else {
        $('body').removeClass('fixed-header')
    }
});

//document ready

$(document).ready(function() {

    //typing animation
    new Typed('#type-it', {
        strings: ['Developer','Designer', 'Gamer'],
        typeSpeed: 100,
        loop: true
      });

      // Owl Carousel
      $('.owl-carousel').owlCarousel({
        loop:true,
        items:2,
        margin:30,
        autoplay: true,
        autoPlayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            },
        }
    });

    //One Page Scroll
    $.scrollIt({
        easing: 'linear',      // the easing function for animation
        topOffset: -70         // offset (in px) for fixed top navigation   
});

}); 

