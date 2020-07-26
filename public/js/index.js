/**@author Andrea Mele / https://github.com/isaobushi */

import { launchArchive, loadVideoPlayerArchive } from "./archive/archive.js"
import * as  jQueryVideoStories from "./jquery/videoStories.js";
import memoryWalks from "./memories/memory.js";
import singleMemory from "./memories/singleMemory.js";


let controller;
let slideScene;
let pageScene;
let detailScene;
let landingTextScene;





function animateTextLanding() {

  //init controller
  controller = new ScrollMagic.Controller();
  // Select elements
  const text = document.querySelector(".text-split")
  const heroSection = document.querySelectorAll(".parallax");
  const heroSection1 = document.querySelectorAll(".parallax1");
  //split text helper
  var split = new SplitText(text, { type: "words", duration: 1 });

  //gsap
  const splitWords = gsap.timeline({
    defaults: { duration: 1, ease: "power2.inOut" }
  });

  splitWords
    .to(heroSection, { duration: 1, y: ".5%" })

  splitWords.to(heroSection1, { duration: 1, y: "-25%" }, "-=1")

  splitWords.fromTo(split.words, { y: "-60%", opacity: 0 }, { y: "20%", opacity: 1, stagger: .09, scale: 1 }, "-=1")


  //Create Scene
  slideTextLanding = new ScrollMagic.Scene({
    duration: "40%",
    triggerElement: text,
    triggerHook: 0.85,
    reverse: true
  })
    .setTween(splitWords)
    // .addIndicators({colorStart: "white", colorTrigger: "white", name: "text"})
    .addTo(controller)
}

function animateSlides({ playVideoAutomatically = true, videoPlayerClassName = "video1" }) {
  //Init Controller
  const video = document.querySelectorAll("video")

  if (playVideoAutomatically)
    video.forEach(item => item.play())
  controller = new ScrollMagic.Controller();
  const sliders = document.querySelectorAll(".slide");
  //Loop over each sllide
  sliders.forEach((slide, index, slides) => {
    const revealImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector(`.${videoPlayerClassName}`);
    const revealText = slide.querySelector(".reveal-text");
    //GSAP
    const slideTl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" }
    });
    slideTl.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    slideTl.fromTo(img, { opacity: 0, scale: 2 }, { scale: 1, opacity: 1 }, "-=.5");
    slideTl.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");
    //Create Scene
    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: true
    })
      .setTween(slideTl)
      .addTo(controller);

    //New Animation
    const pageTl = gsap.timeline();

    let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];

    pageTl.fromTo(nextSlide, { y: "0%" }, { y: "50%" });
    pageTl.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 });
    pageTl.fromTo(nextSlide, { y: "50%" }, { y: "0%" }, "-=0.5");
    //Create new scene
    pageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0
    })
      // .addIndicators({
      //   colorStart: "white",
      //   colorTrigger: "white",
      //   name: "page",
      //   indent: 200
      // })
      .setPin(slide, { pushFollowers: false })
      .setTween(pageTl)
      .addTo(controller);
  });
}




//--------------target elements
const mouse = document.querySelector(".cursor");
const mouseTxt = mouse.querySelector("span");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-bar")
//----------------------------
function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}

function activeCursor(e) {
  const item = e.target;
  if (item.id === "logo" || item.classList.contains("burger")) {
    mouse.classList.add("nav-active")
  } else {
    mouse.classList.remove("nav-active")
  }

  if (item.classList.contains("explore")) {
    gsap.to(".title-swipe", .5, { y: "100%" })
    mouse.classList.add("explore-active")
  } else {
    mouse.classList.remove("explore-active")
    gsap.to(".title-swipe", .5, { y: "0%" })
  }

}

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active")
    gsap.to(".line1", 0.3, { rotate: "45", y: 5, background: "black" });
    gsap.to(".line2", 0.3, { rotate: "-45", y: -5, background: "black" });
    gsap.to(".nav-bar", .75, { clipPath: "circle(4500px at 100% -10%)" })
    gsap.to("#logo", 1, { color: "black" })
    document.body.classList.add("hide")
    document.getElementById("logo").style.display = "none"
  } else {
    e.target.classList.remove("active")
    gsap.to(".line1", 0.3, { rotate: "0", y: 0, background: "white" });
    gsap.to(".line2", 0.3, { rotate: "0", y: 0, background: "white" });
    gsap.to(".nav-bar", .75, { clipPath: "circle(50px at 100% -10%)" })
    gsap.to("#logo", 1, { color: "white" })
    document.getElementById("logo").style.display = "block"
    document.body.classList.remove("hide")
  }
}
function navToggle2(e) {
  if (e.target.classList.contains("active")) {
    gsap.to(".line1", 0.3, { rotate: "45", y: 5, background: "black" });
    gsap.to(".line2", 0.3, { rotate: "-45", y: -5, background: "black" });
    gsap.to(".nav-bar", .75, { clipPath: "circle(4500px at 100% -10%)" })
    gsap.to("#logo", 1, { color: "black" })
    document.getElementById("logo").style.display = "none"

    document.body.classList.add("hide")
  } else {
    burger.classList.remove("active")
    gsap.to(".line1", 0.3, { rotate: "0", y: 0, background: "white" });
    gsap.to(".line2", 0.3, { rotate: "0", y: 0, background: "white" });
    gsap.to(".nav-bar", .75, { clipPath: "circle(50px at 100% -10%)" })
    gsap.to("#logo", 1, { color: "white" })
    document.getElementById("logo").style.display = "block"

    document.body.classList.remove("hide")
  }
}
// barba page transitions
const logo = document.querySelector("#logo")
const videoStories = document.querySelector(".video-stories-link")
var destroyArchive
barba.init({
  prevent: ({ el }) => el.classList && el.classList.contains('prevent'),

  views: [
    {
      namespace: "home",
      beforeEnter() {
        animateTextLanding();
        logo.href = "./index.html";
        window.location.hash = ""
        
      },
      afterEnter(){
        window.removeEventListener("wheel", rotate, { passive: false })
        
      },
      beforeLeave() {
        window.location.hash = ""
        slideTextLanding.destroy();
        detailScene.destroy();
        controller.destroy();

      }
    },
    {
      namespace: "documentary",
      beforeEnter() {
        logo.href = "./index.html";
      },
      beforeLeave() {
        controller.destroy();
        window.location.hash = ""
      }
    },
    {
      namespace: "archive",
      beforeEnter() {
        let body = document.querySelector("body");
        let main = document.querySelector("main");
        main.setAttribute("class", "main-archive")
        body.setAttribute("class", "body-archive");
        logo.href = "./index.html";
        destroyArchive = launchArchive();
        detailAnimation();
      },
      afterEnter() {
        const videoPlayerClassName = "plyr__video-embed";
        loadVideoPlayerArchive({
          videoPlayerClassName: videoPlayerClassName,
        });
      },
      beforeLeave() {
        let body = document.querySelector("body");
        body.removeAttribute("class", "body-archive");
        controller.destroy();
        destroyArchive();
        window.location.hash = ""
      }
    },

    {
      namespace: "videostories",
      beforeEnter() {
        logo.href = "./index.html";
        console.log("inside")

      },
      afterEnter() {
        const videoPlayerClassName = "plyrVideoPlayer";
        jQueryVideoStories.callApiVideoStories({
          videoPlayerClassName: videoPlayerClassName,
          callback: ({ videoPlayerClassName }) => {
            animateSlides({ playVideoAutomatically: false, videoPlayerClassName: videoPlayerClassName });
          }
        });
      },
      beforeLeave() {
        slideScene.destroy();
        pageScene.destroy();
        controller.destroy();
        window.location.hash = ""
      }
    },
    {

      /** Memories */
      namespace: "memorywalks",

      beforeEnter() {
        logo.href = "./index.html";
        console.log(window.location.hash)
        memoryWalks()
      },
      afterEnter() {
        console.log("inside afterEnter", window.location.hash === "")
        dispatchEvent(new Event('load'));

        if (window.location.hash === "") {
          console.log("inside reload")
          window.location = window.location + '#loaded';
          window.location.reload();
        }
        detailAnimation()


      },
      beforeLeave() {
        const videoPlayerClassName = "plyrVideoPlayer";
        jQueryVideoStories.callApiVideoStories({
          videoPlayerClassName: videoPlayerClassName,
          callback: ({ videoPlayerClassName }) => {
            animateSlides({ playVideoAutomatically: false, videoPlayerClassName: videoPlayerClassName });
          }
        });
        console.log("read")
        detailScene.destroy();
        controller.destroy();

        window.location.hash = ""
      }
    },
    {
      namespace: "singleMemory",
      beforeEnter() {
        logo.href = "./index.html";
        singleMemory()
      },
      afterEnter() {

      },
      beforeLeave() {
        window.location.hash = ""
      }
    }
  ],
  transitions: [
    {
      leave({ current, next }) {
        let done = this.async();
        //An Animation
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.fromTo(current.container, 1, { opacity: 1 }, { opacity: 0 });
        tl.fromTo(
          ".swipe",
          0.5,
          { x: "-100%" },
          { x: "0%", onComplete: done },
          "-=0.5"
        );
        tl.fromTo(
          ".nav-header",
          1,
          { y: "-100%" },
          { y: "0%", ease: "power2.inOut" },
          "-=1.5"
        );
      },
      enter({ current, next }) {
        let done = this.async();
        //Scroll to the top
        window.scrollTo(0, 0);
        //An Animation
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.fromTo(
          ".swipe",
          .5,
          { x: "0%" },

          { x: "100%", stagger: 0.2, onComplete: done }
        );
        tl.fromTo(next.container, 1, { opacity: 0 }, { opacity: 1 });

        tl.fromTo(
          ".nav-header",
          1,
          { y: "-100%" },
          { y: "0%", ease: "power2.inOut" },
          "-=1.5"
        );
      }
    }
  ]
})


export const detailAnimation = () => {
  controller = new ScrollMagic.Controller();
  let slides = document.querySelectorAll(".detail-slide");

  const isMobile = window.innerWidth < 500 ? true : false
  const videos = document.querySelectorAll("video")
  videos.forEach(item => item.play())
  slides.forEach((slide, index, slides) => {

    const slideTl = gsap.timeline({ defaults: { duration: 1 } });

    let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];

    const nextImg = nextSlide.querySelector("video");
    // if(isMobile){

    // }
    slideTl.fromTo(slide, { opacity: 1 }, { opacity: 0 });
    slideTl.fromTo(nextSlide, { opacity: 0 }, { opacity: 1 }, "-=1");
    slideTl.fromTo(nextImg, { x: "50%" }, { x: "0%" });

    // Scene
    detailScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0
    })
      .setPin(slide, { pushFollowers: false })
      .setTween(slideTl)
      // .addIndicators({
      //   colorStart: "white",
      //   colorTrigger: "white",
      //   name: "detailScene"
      // })
      .addTo(controller);
  });
}






var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  console.log("prevScrollpos", prevScrollpos, currentScrollPos)
  if (window.innerWidth < 500 & prevScrollpos - currentScrollPos === -1) {
    console.log("reset")
    document.querySelector(".nav-header").style.top = "0";
  } else if (window.innerWidth > 500 & prevScrollpos > currentScrollPos) {
    document.querySelector(".nav-header").style.top = "0px";
  } else document.querySelector(".nav-header").style.top = "-150px";
  prevScrollpos = currentScrollPos;
}
//event listeners
burger.addEventListener("click", navToggle);
nav.addEventListener("click", navToggle2)
// window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor)





// const css = "body{background-color: red !important}"