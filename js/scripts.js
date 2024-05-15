var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {

});

$(document).scroll(function() {

});

$(document).ready(function() {

    if( $(".ucd_slider_1").length > 0 ) {
        $(".ucd_slider_1").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 2000,
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 2,
            centerMode: true
        });
    }

    if( $(".ucd_slider_2").length > 0 ) {
        $(".ucd_slider_2").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 2000,
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 3,
            centerMode: true
        });
    }

    // --------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

});