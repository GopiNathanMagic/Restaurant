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

  // $("#myButton").click(function (event) {
  //   event.preventDefault();
  //   $.scrollTo($("#myDiv"), 1000);
  // });

  /* pop up */
  function deselect(e) {
    $(".pop").slideFadeToggle(function () {
      e.removeClass("selected");
    });
  }

  $(function () {
    $("#contact").on("click", function () {
      if ($(this).hasClass("selected")) {
        deselect($(this));
      } else {
        $(this).addClass("selected");
        $(".pop").slideFadeToggle();
      }
      return false;
    });

    $(".close").on("click", function () {
      deselect($("#contact"));
      return false;
    });
  });

  $.fn.slideFadeToggle = function (easing, callback) {
    return this.animate(
      { opacity: "toggle", height: "toggle" },
      "fast",
      easing,
      callback
    );
  };

  // /* pop up 1 */
  // function deselect(e) {
  //   $(".pop").slideFadeToggle(function () {
  //     e.removeClass("selected");
  //   });
  // }

  // $(function () {
  //   $("#contact").on("click", function () {
  //     if ($(this).hasClass("selected")) {
  //       deselect($(this));
  //     } else {
  //       $(this).addClass("selected");
  //       $(".pop").slideFadeToggle();
  //     }
  //     return false;
  //   });

  //   $(".close").on("click", function () {
  //     deselect($("#contact"));
  //     return false;
  //   });
  // });

  // $.fn.slideFadeToggle = function (easing, callback) {
  //   return this.animate(
  //     { opacity: "toggle", height: "toggle" },
  //     "fast",
  //     easing,
  //     callback
  //   );
  // };
});
