$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $(".testi-slider").slick({
    arrows: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });

  /*scroll */

  // $("#myproduct").click(function () {
  //   $.scrollTo($("#myproduct-scroll"), 1000);
  // });

  //   $('#myproduct').click(function(event) {
  //     event.preventDefault();
  //   $.scrollTo($('#myproduct-scroll'), 1000);
  // });
});
