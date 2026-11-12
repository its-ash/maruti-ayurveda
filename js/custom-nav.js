// Function to initialize SlickNav
function initSlickNav() {
    console.log('Initializing SlickNav...');

    if (typeof jQuery !== 'undefined' && jQuery.fn.slicknav) {
        var $ = jQuery;

        // Check if elements exist
        if ($('#responsive-menu').length > 0 && $('#slicknav-mobile').length > 0) {
            // Destroy existing instance
            if ($('#responsive-menu').hasClass('slicknav_menu')) {
                $('#responsive-menu').slicknav('destroy');
            }

            // Initialize SlickNav
            $('#responsive-menu').slicknav({
                duration: 500,
                easingOpen: 'easeInExpo',
                easingClose: 'easeOutExpo',
                closedSymbol: '<i class="fa fa-angle-down"></i>',
                openedSymbol: '<i class="fa fa-angle-up"></i>',
                prependTo: '#slicknav-mobile',
                allowParentLinks: true,
                label: "",
                duplicate: true,
                init: function() {
                    console.log('SlickNav initialized successfully 12');
                }
            });
        } else {
            console.warn('SlickNav elements not found');
        }
    } else {
        console.warn('jQuery or SlickNav not available');
    }
}

/*======== Document Ready Function =========*/
jQuery(document).ready(function () {
    /**
     * Sticky Header
     */
    $(window).scroll(function(){
        if( $(window).scrollTop() > 10 ){
            $('.navbar').addClass('navbar-sticky-in')
        } else {
            $('.navbar').removeClass('navbar-sticky-in')
        }
    });

    /**
     * Main Menu Slide Down Effect
     */
    var selected = $('#navbar li');
    // Mouse-enter dropdown
    selected.on("mouseenter", function() {
        $(this).find('ul').first().stop(true, true).delay(350).slideDown(500, 'easeInOutQuad');
    });

    // Mouse-leave dropdown
    selected.on("mouseleave", function() {
        $(this).find('ul').first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
    });

    /**
     *  Arrow for Menu has sub-menu
     */
    if ($(window).width() > 992) {
        $(".navbar-arrow ul ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-right'></i>");
    }
});
