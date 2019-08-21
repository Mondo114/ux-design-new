$(document).ready(function () {

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            var $navname = $(".nav-name");
            var $navlink = $(".nav-link");

            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            $navname.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            $navlink.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

            if ($(this).scrollTop() > $nav.height()) {
                $nav.removeClass('navbar-dark');
                $nav.addClass('navbar-light');
            } else {
                $nav.addClass('navbar-dark');
            }

        });
    });

    // $('.logo-footer').on("click", function () {
    //     $(window).scrollTop(100);
    // });


});