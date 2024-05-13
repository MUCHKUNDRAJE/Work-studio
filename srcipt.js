function loading(){

    var tl = gsap.timeline();
    
    tl.to("#loder #yellow", {
      y: "-100%",
      delay: 0.2,
      duration: 0.5,
      ease: "expo.out",
    });
    
    tl.from(
      "#loder #yellow2",
      {
        y: "100%",
        delay: 0.2,
        duration: 0.5,
        ease: "expo.out",
      },
      "anime"
    );
    
    tl.to(
      "#loder h1",
      {
        color: "black",
        duration: 0.7,
        delay: 0.2,
        ease: "expo.out",
      },
      "anime"
    );
    
    tl.to(
      "#loder ",
      {
  
        display: "none",
      },
      "anime"
    );
    
}
loading();


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var icon = document.querySelector("nav #cross i");
 var flag =0


icon.addEventListener("click",function(){

    if(flag==0) {

        gsap.to(document.querySelectorAll('nav #contain h3'),{
            x:"700%",
            opacity:0.2,
            duration:0.5,
            ease: "expo.out",
           
         
           })
           gsap.to(document.querySelector('nav #contain h3'),{
               x:"570%",
               opacity:1,
             
              })
              gsap.to(document.querySelector('nav #contain h3'),{
               x:"570%",
              })
              gsap.to(document.querySelector("nav #cross  #div"),{
                rotate:45
              })
   
          flag=1
       }

       else{
        gsap.to(document.querySelectorAll('nav #contain h3'),{
            x:"0%",
            opacity:1,
            duration:1,
            ease: "expo.out",
         
           })
           gsap.to(document.querySelector('nav #contain h3'),{
               x:"0%",
               opacity:1,
               duration:0.5,
               ease: "expo.out",
             
              })
              gsap.to(document.querySelector('nav #contain h3'),{
               x:"0%",
              })
              gsap.to(document.querySelector("nav #cross  #div"),{
                rotate:0
              })
        
          flag=0
       }


})

var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector('#page2');

elems.forEach(function(ele) {
    ele.addEventListener("mouseenter", function() {
        var bg = ele.getAttribute("data-img");
        page2.style.backgroundImage = `url(${bg})`;
    });
});



function locog() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  

  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  

}
locog();




gsap.from(".elempack .elem1", {
  y: 200,
  opacity: 0,
  delay: 0.2,
  duration: 0.9,
  stagger: 0.10, // Reduce stagger value
  ease: "expo.inOut", // Use a standard easing function

  scrollTrigger: {
    trigger: "#page3",
    start: "top 40%",
    end: "bottom bottom",
    // markers: true,
    // scrub: 0.1, // You can experiment with scrub value

    scroller: "#main"
  }
});







