

$(document).ready(function () {

    $('.venobox').venobox();

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        items: 4,
        slideBy: 4,
        responsive:{
            450:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
  
    

    $('.slick__list').slick({
        infinite: true,
        speed: 300,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
