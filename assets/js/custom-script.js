(function ($) {
  "use strict";

// when the DOM is ready
$(document).ready(function() {
  
//Rmove #id from redirecting from new link 
setTimeout( function(){

  if (window.location.hash) {
    
      setTimeout(()=>{
            // call removeHash function after set timeout
            removeHash();
      }, 5);
    
    }
  }, 2000);


// Removing #id from url (custom code for service)

  // get the anchor link buttons
  const menuBtn = $('.scrollingToLink');
  // scrollTop: $( $('.scrollingToLink').attr('href') ).offset().top - 117 + 'px'
  // when each button is clicked
  menuBtn.click(()=>{   
    // set a short timeout before taking action
    // so as to allow hash to be set
    setTimeout(()=>{
              // this line is for testing
              // scrollTop: $($(this).attr("href")).offset()
            
      // call removeHash function after set timeout
      removeHash();
    }, 5); // 5 millisecond timeout in this case
  });

  // removeHash function
  // uses HTML5 history API to manipulate the location bar
  function removeHash(){
    history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
  }
});


/**
* another way to skin the same cat 
*
* $('.links').click(function(e){ 
*    $('html, body').animate({
*   scrollTop: $( $.attr(this, 'href') ).offset().top - $('.nav').height()
*    }, 1000);
*  return false;
* });
*/

  // update 18-05-2022
  // function SmoothMenuScroll2() {
  //   var anchor = $(".scrollToLink");
  //   if (anchor.length) {
  //     anchor.children("a").bind("click", function (event) {
  //       if ($(window).scrollTop() > 10) {
  //         var headerH = "70";
  //       } else {
  //         var headerH = "70";
  //       }
  //       var target = $(this);
  //       $("html, body")
  //         .stop()
  //         .animate(
  //           {
  //             scrollTop: $(target.attr("href")).offset().top - headerH + "px"
  //           },
  //           1200,
  //           "easeInOutExpo"
  //         );
  //       anchor.removeClass("current");
  //       target.parent().addClass("current");
  //       event.preventDefault();
  //     });
  //   }
  // }
  // SmoothMenuScroll2();

  // function OnePageMenuScrollTwo() {
  //   var windowScroll = $(window).scrollTop();
  //   var menuWrapper = $(".one-page-scroll-menu");
  //   if (windowScroll >= 100) {
  //     menuWrapper
  //       .find(".scrollToLink")
  //       .find("a")
  //       .each(function () {
  //         // grabing section id dynamically
  //         var sections = $(this).attr("href");
  //         $(sections).each(function () {
  //           // checking is scroll bar are in section
  //           if ($(this).offset().top <= windowScroll + 500) {
  //             // grabing the dynamic id of section
  //             var Sectionid = $(sections).attr("id");
  //             // removing current class from others
  //             menuWrapper.find("li").removeClass("current");
  //             // adding current class to related navigation
  //             menuWrapper
  //               .find("a[href*=\\#" + Sectionid + "]")
  //               .parent()
  //               .addClass("current");
  //             menuWrapper.attr("data-section-class", "");
  //             menuWrapper.attr("data-section-class", Sectionid);
  //           }
  //         });
  //       });
  //   } else {
  //     $(".one-page-scroll-menu li.current").removeClass("current");
  //     $(".one-page-scroll-menu li:first").addClass("current");
  //   }
  // }

  
  // dynamically add current menu class to menu
  function dynamicCurrentMenuClass(selector) {
    let FileName = window.location.href.split("/").reverse()[0];

    selector.find("li").each(function () {
      let anchor = $(this).find("a");
      if ($(anchor).attr("href") == FileName) {
        $(this).addClass("current");
      }
    });
    // if any li has .current elmnt add class
    selector.children("li").each(function () {
      if ($(this).find(".current").length) {
        $(this).addClass("current");
      }
    });
    // if no file name return
    if ("" == FileName) {
      selector.find("li").eq(0).addClass("current");
    }
  }

  if ($(".main-menu .navigation").length) {
    // dynamic current class
    let mainNavUL = $(".main-menu .navigation");
    dynamicCurrentMenuClass(mainNavUL);
  }

  // if ($(".checkout__payment__title").length) {
  //   $(".checkout__payment__item").find(".checkout__payment__content").hide();
  //   $(".checkout__payment__item--active")
  //     .find(".checkout__payment__content")
  //     .show();

  //   $(".checkout__payment__title").on("click", function (e) {
  //     e.preventDefault();

  //     $(this)
  //       .parents(".checkout__payment")
  //       .find(".checkout__payment__item")
  //       .removeClass("checkout__payment__item--active");
  //     $(this)
  //       .parents(".checkout__payment")
  //       .find(".checkout__payment__content")
  //       .slideUp();

  //     $(this).parent().addClass("checkout__payment__item--active");
  //     $(this).parent().find(".checkout__payment__content").slideDown();
  //   });
  // }

 
  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".preloader").length) {
      $("body").addClass("page-loaded");
      $(".preloader").delay(300).fadeOut(0);
    }
  }

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var sticky_header = $(".main-header .sticky-header");
      if (windowpos > 120) {
        siteHeader.addClass("fixed-header");
        sticky_header.addClass("animated slideInDown");
      } else {
        siteHeader.removeClass("fixed-header");
        sticky_header.removeClass("animated slideInDown");
      }
    }
  }

  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".main-header li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown > a").append(
      '<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".side-menu__block").length) {
    var mobileMenuContent = $(".main-header .nav-outer .main-menu").html();
    var mobileNavContainer = $(".mobile-nav__container");
    mobileNavContainer.append(mobileMenuContent);

    //Dropdown Button
    mobileNavContainer
      .find("li.dropdown .dropdown-btn")
      .on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $(this).parent("a").parent("li").children("ul").slideToggle(500);
      });
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $(".side-menu__block").addClass("active");
    });

    $(".side-menu__block-overlay,.side-menu__toggler, .scrollToLink").on(
      "click",
      function (e) {
        $(".side-menu__block").removeClass("active");
        e.preventDefault();
      }
    );
  }

 
  //Custom Cursor
  if ($(".custom-cursor__overlay").length) {
    // / cursor /
    var cursor = $(".custom-cursor__overlay .cursor"),
      follower = $(".custom-cursor__overlay .cursor-follower");

    var posX = 0,
      posY = 0;

    var mouseX = 0,
      mouseY = 0;

    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
          css: {
            left: posX - 22,
            top: posY - 22
          }
        });

        TweenMax.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY
          }
        });
      }
    });

    $(document).on("mousemove", function (e) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      mouseX = e.pageX;
      mouseY = e.pageY - scrollTop;
    });
    $("button, a").on("mouseenter", function () {
      cursor.addClass("active");
      follower.addClass("active");
    });
    $("button, a").on("mouseleave", function () {
      cursor.removeClass("active");
      follower.removeClass("active");
    });
    $(".custom-cursor__overlay").on("mouseenter", function () {
      cursor.addClass("close-cursor");
      follower.addClass("close-cursor");
    });
    $(".custom-cursor__overlay").on("mouseleave", function () {
      cursor.removeClass("close-cursor");
      follower.removeClass("close-cursor");
    });
  }

  //Main Slider / Banner Carousel
  if ($(".banner-carousel").length) {
    $(".banner-carousel").owlCarousel({
      loop: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoplay: 6000,
      autoplayTimeout: 8000,
      navText: [
        '<span class="icon fa fa-angle-left"></span>',
        '<span class="icon fa fa-angle-right"></span>'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        800: {
          items: 1
        },
        992: {
          items: 1
        }
      }
    });
  }



  //Single Item Carousel
  // if ($(".single-item-carousel").length) {
  //   $(".single-item-carousel").owlCarousel({
  //     loop: true,
  //     margin: 30,
  //     nav: true,
  //     smartSpeed: 500,
  //     autoplay: 5000,
  //     autoplayTimeout: 5000,
  //     navText: [
  //       '<span class="icon fa fa-angle-left"></span>',
  //       '<span class="icon fa fa-angle-right"></span>'
  //     ],
  //     responsive: {
  //       0: {
  //         items: 1
  //       },
  //       600: {
  //         items: 1
  //       },
  //       800: {
  //         items: 1
  //       },
  //       1024: {
  //         items: 1
  //       }
  //     }
  //   });
  // }


  //Custom Seclect Box
  if ($(".custom-select-box").length) {
    $(".custom-select-box")
      .selectmenu()
      .selectmenu("menuWidget")
      .addClass("overflow");
  }

  //Datepicker
  if ($(".date-picker").length) {
    $(".date-picker").datepicker();
  }


  //Contact Form Validation
  if ($("#contact-form").length) {
    $("#contact-form").validate({
      rules: {
        username: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true
        },
        subject: {
          required: true
        },
        message: {
          required: true
        }
      }
    });
  }

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top
        },
        1000
      );

      return false;
    });
  }

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

// original menu scroll down
  function SmoothMenuScroll() {
    var anchor = $(".scrollToLink");
    if (anchor.length) {
      anchor.children("a").bind("click", function (event) {
        if ($(window).scrollTop() > 10) {
          var headerH = "117";
        } else {
          var headerH = "117";
        }
        var target = $(this);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $(target.attr("href")).offset().top - headerH + "px"
            },
            1200,
            "easeInOutExpo"
          );
        anchor.removeClass("current");
        target.parent().addClass("current");
        event.preventDefault();
      });
    }
  }
  SmoothMenuScroll();

  // function OnePageMenuScroll() {
  //   var windscroll = $(window).scrollTop();
  //   if (windscroll >= 117) {
  //     var menuAnchor = $(".one-page-scroll-menu .scrollToLink").children("a");
  //     menuAnchor.each(function () {
  //       // grabing section id dynamically
  //       var sections = $(this).attr("href");
  //       $(sections).each(function () {
  //         // checking is scroll bar are in section
  //         if ($(this).offset().top <= windscroll + 100) {
  //           // grabing the dynamic id of section
  //           var Sectionid = $(sections).attr("id");
  //           // removing current class from others
  //           $(".one-page-scroll-menu").find("li").removeClass("current");
  //           // adding current class to related navigation
  //           $(".one-page-scroll-menu")
  //             .find("a[href*=\\#" + Sectionid + "]")
  //             .parent()
  //             .addClass("current");
  //         }
  //       });
  //     });
  //   } else {
  //     $(".one-page-scroll-menu li.current").removeClass("current");
  //     $(".one-page-scroll-menu li:first").addClass("current");
  //   }
  // }

  /* ==========================================================================
	   When document is Scrollig, do
	   ========================================================================== */

  $(window).on("scroll", function () {
    headerStyle();
    // OnePageMenuScroll();
    // OnePageMenuScrollTwo();
    if ($(".scroll-to-top").length) {
      var strickyScrollPos = 100;
      if ($(window).scrollTop() > strickyScrollPos) {
        $(".scroll-to-top").fadeIn(500);
      } else if ($(this).scrollTop() <= strickyScrollPos) {
        $(".scroll-to-top").fadeOut(500);
      }
    }
  });

  /* ==========================================================================
	   When document is Resized, do
	   ========================================================================== */

  $(window).on("resize", function () {});

  /* ==========================================================================
	   When document is loading, do
	   ========================================================================== */

  $(window).on("load", function () {
    // swiper slider

    const swiperElm = document.querySelectorAll(".thm-swiper__slider");

    swiperElm.forEach(function (swiperelm) {
      const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
      let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
    });

    handlePreloader();


  });


})(window.jQuery);
