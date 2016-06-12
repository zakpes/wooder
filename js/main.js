jQuery(function ($) {

    // Smooth scroll between sections

    smoothScroll(1000);

    function smoothScroll(duration) {
        $("a[href*='#']").click(function(event) {

            var target = $( $(this).attr("href") );

            if (target.length) {
                event.preventDefault();
                $("html, body").animate({
                    scrollTop: target.offset().top
                }, duration);
            }
        });
    }

    // Navbar button toggle X
    $(".navbar-toggle").click(function() {
        $(".bar-top").toggleClass("bar-top-x");
        $(".bar-mid").toggleClass("bar-mid-x");
        $(".bar-bot").toggleClass("bar-bot-x");
    });

    // Add .animate-plus to all .title-line and .p-line
    $(".title-line").addClass("animate-plus").attr({"data-animations": "fadeInDownBig",
                                                    "data-animation-when-visible": "true",
                                                    "data-animation-delay": "0.2s"});

    $(".p-line").addClass("animate-plus").attr({"data-animations": "fadeInUpBig",
                                                    "data-animation-when-visible": "true",
                                                    "data-animation-delay": "0.4s"});
});
