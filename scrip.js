const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp :0.05
    
});



















$(document).ready(function() {
    // Close all accordion items and hide their content on page load
    $(".accordion-item").removeClass("open").find(".accordion-content").hide();
   
    $(".feature-image:first").show();


    $(".accordion-item:first").addClass("open").find(".accordion-content").show();
    $(".accordion-item:first").find(".feature-image").show();
    // Click event handler for accordion headings
    $(".accordion-heading").click(function() {
      var accordionItem = $(this).closest(".accordion-item");
      var content = accordionItem.find(".accordion-content");
      var featureImage = accordionItem.find(".feature-image");

      // Check if the clicked accordion item is already open
      var isOpen = accordionItem.hasClass("open");

      // Toggle visibility of the content
      content.slideToggle("slow");

      // Toggle active class on accordion item
      accordionItem.toggleClass("open");

      // Close other open accordion items
      $(".accordion-item").not(accordionItem).removeClass("open").find(".accordion-content").slideUp("slow");

      // Hide other feature images except for the clicked item if it's not already open
      $(".accordion-item").not(accordionItem).find(".feature-image").fadeOut(20); // Faster fadeout for images
      if (!isOpen) {
        featureImage.fadeIn(150);
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const loadRevealContainer = document.querySelector('.load-reveal');
    
   
    loadRevealContainer.style.display = 'flex';

   
    setTimeout(function() {
        loadRevealContainer.style.display = 'none';
    }, 2000);
});


// $(document).ready(function() {
//     const gradients = $(".gradient");

//     $(document).on("mousemove", function(e) {
//         const mouseX = e.pageX;
//         const mouseY = e.pageY;

//         gradients.each(function() {
//             const gradient = $(this);
//             const rect = gradient[0].getBoundingClientRect();
//             const gradientX = rect.left + rect.width / 2;
//             const gradientY = rect.top + rect.height / 2;
//             const deltaX = mouseX - gradientX;
//             const deltaY = mouseY - gradientY;

//             gradient.css("transform", `translate3d(${deltaX * 0.5}px, ${deltaY * 0.5}px, 0px)`);
//         });
//     });
// });

$(document).ready(function() {
    const gradients = $(".gradient");

    $(document).on("mousemove", function(e) {
        const mouseX = e.pageX;
        const mouseY = e.pageY;

        gradients.each(function() {
            const gradient = $(this);
            const rect = gradient[0].getBoundingClientRect();
            const gradientX = rect.left + rect.width / 2;
            const gradientY = rect.top + rect.height / 2;
            const deltaX = mouseX - gradientX;
            const deltaY = mouseY - gradientY;

            gradient.css("transform", `translate3d(${deltaX * 0.5}px, ${deltaY * 0.5}px, 0px)`);
        });
    });
});


