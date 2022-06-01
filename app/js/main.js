$(document).ready(function () {

  $('.header__burger').on('click', function () {
    $('.header-pop-up').addClass('active');
  });

  $('.header-pop-up__close-button').on('click', function () {
    $('.header-pop-up, .header-pop-up__second-pop-up, .header-pop-up__thirth-pop-up').removeClass('active');
    $('body').removeClass('blocked');

  });

  $('.header-pop-up__link, .header-pop-up__second-link').on('click', function () {
    $(this).parent().parent().parent().addClass('blocked');
    $('body').addClass('blocked');
    $(this).next().addClass('active');

  });

  $('.header-pop-up__back-button').on('click', function () {
    $(this).parent().parent().removeClass('active');
    $(this).parent().parent().parent().parent().parent().removeClass('blocked');

  });


  $('.staff__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: $(".staff__button--before"),
    nextArrow: $(".staff__button--next"),
    dots: true,
    dotsClass: 'slick-dots slider__dots',

    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


