(function($) {
    "use strict";
    
    $(window).on("load", function() {
        $(".typed").typed({
        strings: ["Bundesliga", "La Liga", "Premier League"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
        })
    })
})(jQuery);
