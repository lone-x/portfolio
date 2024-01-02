gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".main",
        start: "50% 50%",
        end: "150% 50%",
        scrub: true,
        pin: true,
    }
});

tl.to(".hero", {}, 'a')
  .to(".top", {top: "-50%"}, 'a')
  .to(".bottom", {bottom: "-50%"}, 'a')
  .to(".top-h1", {top: "60%"}, 'a')
  .to(".bottom-h1", {bottom: "60%"}, 'a')
  .to(".hero .content", {
    top: "-30%",
    delay: -0.4,
    margin: "10% 0",   
  }, 'b')
  .from(".hero .img", {
    y:'100%',
    scale: 0,
    opacity: 0
  }, '-=.4');
