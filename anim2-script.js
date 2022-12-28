gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('.a1, .a3');
sections.forEach(a =>{
    gsap.fromTo(a.children, {x: "-=100", opacity: 0}, {x: 0, opacity: 1, stagger: .2, duration: 1, ease: "easeInOut", scrollTrigger: {
        trigger: a,
        start: "top 30%",
        markers: true
    }});
});
const a2 = document.querySelector('.a2');

gsap.fromTo(a2.children, {y: +100, opacity: 0}, {y: 0, opacity: 1, stagger: .2, duration: 1, ease: "easeInOut", scrollTrigger: {
    trigger: ".a2",
    start: "top 30%",
    markers: true
}});