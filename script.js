gsap.registerPlugin(ScrollTrigger);



ScrollTrigger.create({
    trigger: ".produkt2",
    start: "top center",
    toggleClass: "active2",
    markers: true,
});






//gsap.to(".ball-2", {
//    backgroundColor: "red",
//    ease: "elastic.out(1, 0.3)",
//    scrollTrigger: {
//        trigger: ".ball-2",
//        markers: true,
//        start: "top center",
//        end: "bottom 25%",
//        toggleActions: "play pause resume reset"
//    }
//});
