team - slider;

// review slider

$(".text-slide").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-img",
});
$(".slider-img").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".text-slide",
  prevArrow: "arrow-left",
  nextArrow: "arrow-right",
  dots: false,
  centerMode: true,
  centerPadding: "0px",
  focusOnSelect: true,
});
