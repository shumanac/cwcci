  
 $(document).ready(function($) {

  //preloader//
  $(window).load(function() {
    $('.loading').delay(2000).fadeOut('slow', function() {
      $(this).remove();
    });
    setTimeout(function() {
      $('.landing').addClass('loaded');
    }, 2000);
    setTimeout(function() {
      $('body').addClass('loaded');
    }, 2000);
    setTimeout(function() {
      $('.landing h2').addClass('loaded');
    }, 3500);
  });
(function($) {
    "use strict"; // Start of use strict
    
       
 

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })
    
})(jQuery); // End of use strict
  
