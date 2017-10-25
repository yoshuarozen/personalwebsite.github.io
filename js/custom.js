$(function() {

	"use strict";

    var wind = $(window);

    var main_height = $(".main-height").outerHeight();

    $(".sub-height").outerHeight(main_height);


    // color switch
    $(".color-switch").on("click", "button", function() {

        $(this).addClass("active").siblings().removeClass("active");

        $("link[href*='color']").attr("href", "css/theme-color-" + $(this).val() + ".css")

    });

    $(".color-switch").on("click", ".icon", function(){

        $(".color-switch").toggleClass("switch-active");

    });

    // // typejs
    // $('.header .caption h6').typed({
    //     strings: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "UI/UX  Designer", "Photography"],
    //     loop: true,
    //     startDelay: 1000,
    //     backDelay: 1000,
    //     typeSpeed: 30,
    //     showCursor: true,
    //     cursorChar: '|',
    //     autoInsertCss: true
    // });


    //button
    $('.butn')
    .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    });

    $('[href=#]').click(function(){return false});


    // counterUp
    $('.numbers .counter').counterUp({
        delay: 10,
        time: 1500
    });


	// owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        

        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: false
                  },
                  600: {
                    items: 2,
                    nav: false
                  },
                  1000: {
                    items: 3,
                    nav: false,
                    loop: false,
                    margin: 20
                  }
                }

    });



	// scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',         // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -60            // offste (in px) for fixed top navigation
    });


    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-default");

        if(bodyScroll > 300){

            navbar.addClass("nav-scroll");

        }else{

            navbar.removeClass("nav-scroll");
        }
    });


    // button scroll to top
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            button_top = $(".button-top");

        if(bodyScroll > 700){

            button_top.addClass("button-show");

        }else{

            button_top.removeClass("button-show");
        }
    });


	// stellar
    wind.stellar();


    // progress bar
    wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });



    // isotope
    $('.gallery').isotope({
      // options
      itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });


    // magnificPopup
    $('.portfolio .link').magnificPopup({
      delegate: 'a',
      type: 'image'
    });
    

});

$(window).on("load",function (){

    // Preloader
    $(".loading").fadeOut(500);


    // contact form
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.html";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});
