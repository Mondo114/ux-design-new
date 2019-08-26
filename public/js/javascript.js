$(document).ready(function () {

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            var $navlink = $(".nav-link");

            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            $navlink.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

            if ($(this).scrollTop() > $nav.height()) {
                $nav.removeClass('navbar-dark');
                $nav.addClass('navbar-light');
            } else {
                $nav.addClass('navbar-dark');
            }
        });
    });

    $(function (){
        $(window).scroll(function() {
            var scroll = $(window).scrollTop(); // how many pixels you've scrolled
            var os = $('.banner-subtitle').offset().top; // pixels to the top of div1
            var ht = $('.banner-subtitle').height(); // height of div1 in pixels
            // if you've scrolled further than the top of div1 plus it's height
            // change the color. either by adding a class or setting a css property
            if (scroll > os + ht){
                $('.projects-link').addClass('projects-link-text');
            }
            else {
                $('.projects-link').removeClass('projects-link-text');
            }
        });
    });


});