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

  /* pop up 1 */
  function deselect(e) {
    $(".pop").slideFadeToggle(function () {
      e.removeClass("selected");
    });
  }

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

  $.fn.slideFadeToggle = function (easing, callback) {
    return this.animate(
      { opacity: "toggle", height: "toggle" },
      "fast",
      easing,
      callback
    );
  };

  /* pop up 2*/
  function deselect1(e) {
    $(".pop1").slideFadeToggle(function () {
      e.removeClass("selected1");
    });
  }

  $("#contact1").on("click", function () {
    if ($(this).hasClass("selected1")) {
      deselect($(this));
    } else {
      $(this).addClass("selected1");
      $(".pop1").slideFadeToggle();
    }
    return false;
  });

  $(".close1").on("click", function () {
    deselect1($("#contact1"));
    return false;
  });

  $.fn.slideFadeToggle = function (easing, callback) {
    return this.animate(
      { opacity: "toggle", height: "toggle" },
      "fast",
      easing,
      callback
    );
  };

  /* mobile nav */
  $(".mobile-menu").click(function () {
    $("#header-menu").toggleClass("show-mobile-menu");
    $(".mobile-menu").toggle();
  });

  $(".mobile-menu-close").click(function () {
    $("#header-menu").toggleClass("show-mobile-menu");
    $(".mobile-menu").toggle();
  });

  /* scroll */

  $(document).on("click", ".scrollbtn", function (e) {
    //console.log("On click");
    e.preventDefault();

    var dest = $(this).attr("href");

    if (dest) {
      $("html, body").animate(
        {
          scrollTop: $(dest).offset().top,
        },
        2000
      );
    }
  });
});
