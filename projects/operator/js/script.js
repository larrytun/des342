$(document).ready(function () {
  var $images = $('.product-image');
  var $texts = $('.product-text');
  var $sectionHeaders = $('.section_header');
  var $sections = $('.section');
  var $demoSection = $('.section-2');

  $('.menu_icon, .close, .link').click(function () {
    $('.top_menu').toggleClass('open');
  });

  // Hiding all images and texts initially
  $images.hide();
  $texts.css("opacity", "0");

  // Showing the first image and text
  $images.first().show();
  $texts.first().css("opacity", "1");

  var index = 0; // starting index
  var isScrollingUp = false; // flag to track scrolling direction

  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var windowWidth = $(window).width(); // Get the window width

    if (scrollPos > ((windowHeight / 7) * (index + 1))) {
      if (!isScrollingUp) {
        $images.eq(index).hide();
        $texts.eq(index).css("opacity", "0");
        index++;
        $images.eq(index).show();
        $texts.eq(index).css("opacity", "1");

        if (index === 7) {
          $(".content-wrapper").css("margin-bottom", "0");
          $sectionHeaders.css("top", windowWidth <= 670 ? "-130px" : "-170px");
          $sections.eq(index - 1).css("opacity", "0");
          $sections.eq(index).css("opacity", "1");
          $demoSection.css("opacity", "1");
        }
      }
    } else if (scrollPos < ((windowHeight / 7) * index)) {
      if (isScrollingUp) {
        $images.eq(index).hide();
        $texts.eq(index).css("opacity", "0");
        index--;
        $images.eq(index).show();
        $texts.eq(index).css("opacity", "1");

        if (index === 6) {
          $(".content-wrapper").css("margin-bottom", "170px");
          $sectionHeaders.css("top", windowWidth <= 670 ? "130px" : "170px");
          $sections.eq(index + 1).css("opacity", "0");
          $sections.eq(index).css("opacity", "1");
          $demoSection.css("opacity", "0");
        }
      }
    }

    isScrollingUp = scrollPos < ((windowHeight / 7) * index);
  });

  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();
    var target = $($.attr(this, 'href'));
    var targetOffset = target.offset().top;
    var headerHeight = $('.header').height();
    $('html, body').animate({
      scrollTop: targetOffset - headerHeight
    }, 800);
  });

  // Scroll to top on page load
  $(window).on('beforeunload', function () {
    $(window).scrollTop(0);
  });
});
