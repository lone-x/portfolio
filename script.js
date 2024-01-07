const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const text1 = new SplitType('.top-h1');
const text2 = new SplitType('.bottom-h1');


gsap.registerPlugin(ScrollTrigger);
const tll = gsap.timeline({
    duration:0.8,ease:"power3.Out"
})

function openMenu(){
    menu.classList.toggle("active");
    document.body.classList.toggle("sidebar-open");

    tll.to(menu, {
        x: menu.classList.contains("active") ? "0" : "100%",
    });

    gsap.fromTo(
        menuItems, {
            x:150,
        },
        {
            x:0,
            duration:0.2,
            stagger:0.05,
            ease:"power4.Out"
        }
    );
}
gsap.to(menuBtn, {
    scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
            gsap.to(menuBtn, {scale: 1});
        },
        onEnterBack: () => {
            gsap.to(menuBtn, {scale: 0});
        },
    },
    duration:0.25,
    ease: "power3.Out",
});
menuBtn.addEventListener("click", openMenu);


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
    margin: "0% 0",   
  }, 'b')
  .from(".hero .img", {
    y:'100%',
    scale: 0,
    opacity: 0
  }, '-=.4')
  .from(".content h1", {
    xPercent: 100,
    opacity: 0,
    ease: "ease.in.out",
}, '-=.4')
.from(".subheader", {
    xPercent: 60,
    opacity: 0,
    ease: "ease.in.out",
}, '-=.4')
.from(".btn_main", {
    xPercent: 60,
    opacity: 0,
    ease: "ease.in.out",
}, '-=.4');

  
gsap.from(".char", {
    yPercent: -130,
    stagger: 0.02,
    ease: "back.out",
    duration: 1,    
});
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second",
        start: () => window.innerWidth > 1024 ? "0% 50%" : "0% 60%",
        end: () => window.innerWidth > 1024 ? "0% 0%" : "30% 0%",
        scrub: true,
        markers: false,
        pin: false
    }
});
tl2.from(".second-h2", {
    xPercent: -100,
    opacity: 0,
    ease: "ease.in",
    duration: 1,
},'-=.4')
.from (".tribox", {
    yPercent: 100,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out",
    duration: 1,
},'-=.4');


