/**
 * All functions for post template, etc
 */
(function ($) {
    $(document).ready(function () {
        // console.log('post template!');
        $('#search-icon').click(function () {
            $('#search').toggle();
            // console.log('toggle search');
        });
        var triggerBttn = $('#trigger-overlay'),
            overlay = $('.overlay');
        /**
         * Menu interaction
         */
        //  Bind scroll to anchor links
        triggerBttn.on("click", function () {
            overlay.toggleClass('open');
            triggerBttn.toggleClass('is-active');
        });

        $(document).on("click", "a[href^='#']", function (e) {
            var id = $(this).attr("href");

            if ($(id).length > 0) {
                e.preventDefault();
                overlay.removeClass('open');
                triggerBttn.removeClass('is-active');
                // trigger scroll
                controller.scrollTo(id);
                // console.log(id);
                // If supported by the browser we can also update the URL
                if (window.history && window.history.pushState) {
                    history.pushState("", document.title, id);
                }
                var anchor = id.slice(1); // remove # from #anchorname
                currentSlideIndex = anchors.indexOf(anchor);
                // console.log('anchor = ' + anchor + ' currentSlideIndex =' + currentSlideIndex);
                // console.log('anchors.id = ' + anchors[anchor]);
            }

        });

        var main = document.getElementById('main');

        function appearance() {
            var tl = new TimelineMax();
            tl.to(main, 0.1, {autoAlpha: 1, zIndex: 2});
            tl.from(main, 1, {y: '+=1000'}, 1);
            return tl;
        }

        window.addEventListener('load', function () {
            appearance();
        });
    });

})(jQuery);