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
    $('.travel__slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="images/icons/arrow-left.svg" alt="Link to...">',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="images/icons/arrow-right.svg" alt="Link to...">',
    });
    $('.shop__slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="images/icons/arrow-left.svg" alt="Link to...">',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="images/icons/arrow-right.svg" alt="Link to...">',
    });


    $(".rate-star").rateYo({
        rating: 5,
        spacing: "10px",
        ratedFill: "#4AF6CD",
        starWidth: "22px",
        readOnly: true,
    });
// ANIMATION
    // $(window).scroll(function() {
    //     $('.shop-product__image').each(function(){
    //         var imagePos = $(this).offset().top;

    //         var topOfWindow = $(window).scrollTop();
    //         if (imagePos > topOfWindow+800) {
    //             $(this).addClass("surfUpAnimation");
    //         }
    //     });
       
    // });

    wow = new WOW(
        {
        boxClass:     'wow',
        animateClass: 'animated', 
        offset:       0,         
        mobile:       true,      
        live:         true   
      }
      )
      wow.init();
      
// Smooth Scrolling
    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { 
            return false;
            } else {
            $target.attr('tabindex','-1'); 
            $target.focus();
            };
        });
        }
    }
    });
    // SEARCH FORM
    $('.header__search').on('click', function (){
        $('.header__search-form').slideToggle();
    });
    
});