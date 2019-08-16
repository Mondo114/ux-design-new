$(document).ready(function () {

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            var $navname = $(".nav-name");
            var $navlink = $(".nav-link");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            $navname.toggleClass('scrolled', $(this).scrollTop() > $navname.height());
            $navlink.toggleClass('scrolled', $(this).scrollTop() > $navlink.height());
        });
    });

    $('.logo').on("click", function () {
        $(window).scrollTop(100);
    });


});