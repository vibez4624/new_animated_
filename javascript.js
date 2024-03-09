// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true,
//     lerp :0.05
    
// });

document.addEventListener('DOMContentLoaded', function() {
    const loadRevealContainer = document.querySelector('.load-reveal');
    
   
    loadRevealContainer.style.display = 'flex';

   
    setTimeout(function() {
        loadRevealContainer.style.display = 'none';
    }, 3000);
});
