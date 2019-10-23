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
});