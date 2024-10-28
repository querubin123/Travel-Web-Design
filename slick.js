$(document).ready(function(){
    $('.image-slider').slick({
        centerMode: true,
      arrows:true,
      slidesToShow: 5,
      prevArrow:
        '<i class="bi bi-arrow-left-circle-fill arrow-left"></i>',
      nextArrow:
            '<i class="bi bi-arrow-right-circle-fill arrow-right"></i>',
        responsive: [
            {
                breakpoint: 768, // For tablets
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // For mobile phones
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
    });
});
$(document).ready(function(){
    $('.image-slider1').slick({
        centerMode: true,
      arrows:true,
      slidesToShow: 4, slidesToScroll: 4,
      prevArrow:
        '<i class="bi bi-arrow-left-circle-fill arrow-left"></i>',
      nextArrow:
            '<i class="bi bi-arrow-right-circle-fill arrow-right"></i>',
        responsive: [
            {
                breakpoint: 768, // For tablets
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // For mobile phones
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
    });
});
