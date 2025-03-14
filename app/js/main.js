$(function () {
    $('.slider__items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1250,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000
              }
            },
          ]
    });

    $(".menu a").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

    $('.filters__btn').on('click', function(){
        $('.filters').toggleClass('filters--active');         
        $('.filters__btn').toggleClass('filters__btn--active');
    });

    $('.menu-btn-inner').on('click', function(){
        $('.menu').toggleClass('menu--active');
        $('.header').toggleClass('header--active');
    });

    $('.register__btn-inner').on('click', function(){
        $('.register').toggleClass('register--active');
        $('.header').toggleClass('header--active');
    });


    $('.filter-type__title').on('click', function(){
        $('.filter-type__title').toggleClass('filter-type__title--active');
        $('.filter-type__form').toggleClass('filter-type__form--active');
    });

    $('.filter-price__title').on('click', function(){
        $('.filter-price__title').toggleClass('filter-price__title--active');
        $('.filter-price__form').toggleClass('filter-price__form--active');
    });

    $('.filter-size__title').on('click', function(){
        $('.filter-size__title').toggleClass('filter-size__title--active');
        $('.filter-size__form').toggleClass('filter-size__form--active');
    });

    $('.filter-spacific__title').on('click', function(){
        $('.filter-spacific__title').toggleClass('filter-spacific__title--active');
        $('.filter-spacific__form').toggleClass('filter-spacific__form--active');
    });

    $('.product-one__tabs-title').on('click', function(e){
        e.preventDefault();
        $('.product-one__tabs-title').removeClass('product-one__tabs-title--active');
        $(this).addClass('product-one__tabs-title--active');

        $('.product-one__tabs-content').removeClass('product-one__tabs-content--active');
        $($(this).attr('href')).addClass('product-one__tabs-content--active');
    });
    

});
    
