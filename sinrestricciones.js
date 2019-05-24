
 $(document).ready(function() {
    $(window).on('scroll', function() {
      if (Math.round($(window).scrollTop()) > 100) {
        $('.navbar').addClass('scrolled');
      } else {
        $('.navbar').removeClass('scrolled');
      }
    });
  });
   
  
  
  //$('.animated').addClass('animated fadeIn');//
  
  
  wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
    
  })
  wow.init();
  
  