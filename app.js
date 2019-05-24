
 $(document).ready(function() {
  $(window).on('scroll', function() {
    if (Math.round($(window).scrollTop()) > 100) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });
});

wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default

});
wow.init();

  /* -------------------------------------------------------------------------
     begin Scroll Down Button
   * ------------------------------------------------------------------------- */
  (function() {
    'use strict';
  
    var btnScrollDown = document.querySelector('#scroll_down');
  
    function scrollDown() {
      var windowCoords = document.documentElement.clientHeight;
      (function scroll() {
        if (window.pageYOffset < windowCoords) {
          window.scrollBy(0, 10);
          setTimeout(scroll, 0);
        }
        if (window.pageYOffset > windowCoords) {
          window.scrollTo(0, windowCoords);
        }
      })();
    }
  
    btnScrollDown.addEventListener('click', scrollDown);
  })();
    /* -------------------------------------------------------------------------
       end Scroll Down Button
     * ------------------------------------------------------------------------- */


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load
  ('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });



  

