$(function(){
    $('.header__slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="images/icons/arrow-left.svg" alt="Link to...">',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="images/icons/arrow-right.svg" alt="Link to...">',
        asNavFor: '.slider-panels'
      });
    $('.slider-panels').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider'
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="images/icons/arrow-left.svg" alt="Link to...">',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="images/icons/arrow-right.svg" alt="Link to...">',
        asNavFor: '.slider-map',
    });
    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.surf-slider',
    });


    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
});