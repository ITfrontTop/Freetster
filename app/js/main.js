$(function () {
    $('.slider__items').slick({
        slidesToShow: 3,
        variableWidth: true
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

    

});
    
