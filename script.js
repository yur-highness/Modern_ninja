function inti(){
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
inti()
const curs = document.querySelector(".cursor")
const main = document.querySelector(".main")
main.addEventListener("mousemove", (dets)=> {
  curs.style.left = dets.x + 20 +"px"
  curs.style.top = dets.y+ 20 +"px"
})



gsap.from(".page1 h1,.page1 h2,.page1 h3", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7
})

const boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem) {
  elem.addEventListener("mouseenter",function(){
      elem.style.backgroundColor = "red";
      var att = elem.getAttribute("data-image");
      // console.log(att);
      curs.style.width = "300px";
      curs.style.height = "250px";
      // curs.style.borderRadius = "0";
      curs.style.backgroundImage = `url(${att})`;
    })
    elem.addEventListener("mouseleave",function(){
      elem.style.backgroundColor = "transparent";
      curs.style.width = "20px";
      curs.style.height = "20px";
      // curs.style.borderRadius = "0";
      curs.style.backgroundImage = `url(${none})`;
   
    })
  })



const tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#text1",
        scroller: ".main",
        // markers:true,
        start:"top 27%",
        end:"top 0",
        scrub:3
    }
})
tl.to("#text1",{
    x: -100
},"anim")
tl.to("#text2",{
    x: 100
},"anim")
tl.to("#text3",{
    x: 250
},"anim")
tl.to("#video",{
  width:"90%"
},"anim")


const tl2 = gsap.timeline({
  scrollTrigger:{
    
      scroller: ".main",
      // markers:true,
      start:"top -115%",
      end:"top -120%",
      scrub:3
  }
})
tl2.to(".main",{
    backgroundColor:"#fff",
  })

const tl3 = gsap.timeline({
    scrollTrigger:{
      
        scroller: ".main",
        // markers:true,
        start:"top -420%",
        end:"top -440%",
        scrub:3
    }
  })

  tl3.to(".main",{
    backgroundColor:"#0F0D0D"
  })

