const elContent = document.querySelector('.content');
const elNav = document.querySelector('nav');
navToggleBtn = document.querySelector('.nav-toggle-btn');
navToggleBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  elNav.classList.toggle("nav-20");
  elContent.classList.toggle("content-80");
}

//
//      (function() {
//        var bodyEl = $('body'),
//          navToggleBtn = bodyEl.find('.nav-toggle-btn');
//        navToggleBtn.on('click', function(e) {
//          bodyEl.toggleClass('active-nav');
//
//        });
//
//
//      })();


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".product-2-trigger",
  start: "top center",
  end: "bottom center",
  toggleClass: {
    targets: "#produkt",
    className: "produkt3",
  },
  markers: true,
});
