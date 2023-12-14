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
  
  //testimonial
  $(document).ready(function(){
    $('#testimonialCarousel').carousel();
  });