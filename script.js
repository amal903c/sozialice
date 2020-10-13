const elNav = document.querySelector('nav');
const elBtn = document.querySelector('button');
navToggleBtn = document.querySelector('.nav-toggle-btn');
navToggleBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    elNav.classList.toggle("nav-20");

    elBtn.classList.toggle("nav-toggle-btn-80");
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
    //    end: "bottom center",
    toggleClass: {
        targets: "#produkt",
        className: "produkt2",
    },
});


ScrollTrigger.create({
    trigger: ".product-3-trigger",
    start: "top center",
    //    end: "bottom center",
    toggleClass: {
        targets: "#produkt",
        className: "produkt3",
    },
});


ScrollTrigger.create({
    trigger: ".product-4-trigger",
    start: "top center",
    //    end: "bottom center",
    toggleClass: {
        targets: "#produkt",
        className: "produkt4",
    }
});





var rellax = new Rellax(".rellax", {
    center: true,
});
