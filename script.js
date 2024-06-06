var staggerParent = document.querySelectorAll("nav .stagger_parent");
var navStaggerEffect = document.querySelectorAll("nav .nav_stagger_effect");
var hrLine = document.querySelector("nav .hr_line");

var element = [];
for (let elm of navStaggerEffect) {
    element.push(elm);
}

staggerParent.forEach(elm => {
    elm.addEventListener("mouseenter", () => {
        let tl = gsap.timeline();
        tl.to(elm, {
            opacity: .5,
            color: "red"
        }, "same");
        tl.to(hrLine, {
            height: "170px",
            bottom: "-192px"
        }, "same");
        tl.from(".nav_stagger_effect li", {
            y: 10
        }, "anchor")
        tl.to(".nav_stagger_effect li", {
            stagger: .04,
            opacity: 1,
        }, "anchor")
    });
    elm.addEventListener("mouseleave", () => {
        let tl = gsap.timeline();
        tl.from(".nav_stagger_effect li", {
            y: 10
        }, "anchor");
        tl.to(".nav_stagger_effect li", {
            stagger: .04,
            opacity: 0,
        }, "anchor");
        tl.to(elm, {
            opacity: 1,
            color: "white"
        }, "same");
        tl.to(hrLine, {
            height: "1px",
            bottom: "-32px"
        }, "same");
    });
});