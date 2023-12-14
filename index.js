// Enable Bootstrap dropdown hover
$(document).ready(function(){
    $('.navbar .dropdown').hover(function() {
      $(this).find('.dropdown-toggle').trigger('click');
    });
  });

 // Enable Bootstrap carousel for company icons
 $(document).ready(function(){
    $('#customerCarousel').carousel({
      interval: 3000, // Change slide every 3 seconds
    });
  });

  function playVideo() {
    var videoFrame = document.getElementById('videoFrame');
    videoFrame.src += "?autoplay=1";
  }
  function toggleFAQ(faqId) {
    var faqContent = document.getElementById(faqId);
    faqContent.style.display = (faqContent.style.display === 'none' || faqContent.style.display === '') ? 'block' : 'none';
  }

   // Marquee effect
   const marquee = document.querySelector('.testimonial-marquee');
   const testimonials = document.querySelectorAll('.testimonial');
 
   let marqueeWidth = marquee.offsetWidth;
   let contentWidth = 0;
 
   testimonials.forEach(testimonial => {
     contentWidth += testimonial.offsetWidth + parseInt(getComputedStyle(testimonial).marginRight);
   });
 
   marquee.style.animationDuration = (contentWidth / 100) * 3 + 's';

  //Counter

  document.addEventListener("DOMContentLoaded", function () {
    startCounting();
  });

  function startCounting() {
    const experienceCounter = document.getElementById('experienceCounter');
    const projectCounter = document.getElementById('projectCounter');
    const designerCounter = document.getElementById('designerCounter');
    const technologyParteners = document.getElementById('partenerCounter')

    let experience = 0;
    let projects = 0;
    let designers = 0;
    let parteners =0;          
    
    const duration = 5000; // 5 seconds
    const startTime = Date.now();

    function updateCounters() {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / duration;

      experienceCounter.textContent = Math.floor(progress * 35);
      projectCounter.textContent = Math.floor(progress * 9356);
      designerCounter.textContent = Math.floor(progress * 368);
      technologyParteners.textContent = Math.floor(progress * 85);

      if (elapsed < duration) {
        requestAnimationFrame(updateCounters);
      }
    }

    updateCounters();
  }
  
  //testimonial
  $(document).ready(function(){
    $('#testimonialCarousel').carousel();
  });




  jQuery(function ($) {
    "use strict";
    var $window = $(window);
    var windowsize = $(window).width();
    var $root = $("html, body");
    var $this = $(this);
 
 
    /*Testimonials 3columns*/
    $("#testimonial-slider").owlCarousel({
       items: 3,
       autoplay: 2500,
       autoplayHoverPause: true,
       loop: true,
       margin: 30,
       dots: true,
       nav: false,
       responsive: {
          1280: {
             items: 3,
          },
          600: {
             items: 2,
          },
          320: {
            items: 1,
         },
      }
   });


});