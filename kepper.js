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

 // pie Chart
 var ctxP = document.getElementById('pieChart').getContext('2d');
 var myPieChart = new Chart(ctxP, {
   type: 'pie',
   data: {
     labels: ['Apple iphone', 'Samsung SM-J700M Galaxy J7 2015'],
     datasets: [
       {
         data: [3.9, 61.6],
         backgroundColor: ['#9232B3', '#56D9C9', '#FDB45C', '#949FB1', '#4D5360'],
         hoverBackgroundColor: ['#c564e6', '#83f7ea', '#FFC870', '#A8B3C5', '#616774'],
       },
     ],
   },
   options: {
     responsive: true,
   },
 });



 /* Demo purposes only */
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);








 
