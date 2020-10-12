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
