
function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});
const tl=gsap.timeline();
 
tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
  .from(
    ".line-3",
    { scaleX: 0, transformOrigin: "left center", ease: "none" },
    0
  )
  .to(".purple", { backgroundColor: "#28a92b" }, 0);

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}


function navAnimation() {
    var nav = document.querySelector("nav");

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline();
        
        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.2
        })
        .set(".nav2 h5", {
            display: "block"
        })
        .fromTo(".nav2 h5 span", {
            y: 25
        }, {
            y: 0,
            duration: 0.3,
            stagger: {
                amount: 0.5
            }
        });
    });

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline();

        tl.to(".nav2 h5 span", {
            y: 25,
            duration: 0.3,
            stagger: {
                amount: 0.2
            }
        })
        .set(".nav2 h5", {
            display: "none"
        })
        .to("#nav-bottom", {
            height: 0,
            duration: 0.2
        });
    });
}



function  page2Animation(){

    let rightElems=document.querySelectorAll(".right-elem")
    rightElems.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1
        })
        console.log(elem.getBoundingClientRect())
    })
    
    
        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.childNodes[3],{
                opacity:0,
                scale:0
        })
    }
        )
        elem.addEventListener("mousemove",function(dets){
            gsap.to(elem.childNodes[3],{
                x:dets.x - elem.getBoundingClientRect().x-50,
                y:dets.y - elem.getBoundingClientRect().y-130
            })
        })
    })
    
}


function page3VideoAnimation(){
    let page3Center=document.querySelector(".page3-center");
var video=document.querySelector("#page3 video")
let isPlaying=false;
let icon=document.querySelector(".page3-center .icon")
page3Center.addEventListener("click",function(){

    if(isPlaying){
        video.pause();
        gsap.to(video,{
            transform:"scaleX(0.7) scaleY(0)",
            opacity:0,
            borderRadius:"30px"
        })
      icon.style.opacity=1;
    }
    else{
        video.play();
        gsap.to(video,{
            transform:"scaleX(1) scaleY(1)",
            opacity:1,
            borderRadius:0
        })
        setTimeout(() => {
            icon.style.opacity=0; 
        }, 3000);
        page3Center.addEventListener("mousemove",function(){
            setTimeout( () => {
                icon.style.opacity=1;
                setTimeout(() => {
                    icon.style.opacity=0; 
                }, 1000);
            },1000)
        })
    }
    isPlaying=!isPlaying;
    
   

})
}
function opacityAnimation(){
let sections=document.querySelectorAll(".sec-right");
sections.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity=1;
        elem.childNodes[3].play();
  
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity=0;
        elem.childNodes[3].load  ();
       
    })
         
})
}

function arrow() {
    let details = document.querySelectorAll("details");

    details.forEach(function(elem) {
        let icon = elem.querySelector("summary h1 span i");

        if (elem.open) {
            icon.className = "ri-arrow-down-s-line";
        } else {
            icon.className = "ri-arrow-up-s-line";
        }

        elem.addEventListener("toggle", function() {
            if (elem.open) {
                icon.className = "ri-arrow-down-s-line";
            } else {
                icon.className = "ri-arrow-up-s-line";
            }
        });
    });
}

function page10Animation() {
    let parts = document.querySelectorAll("#page10 .bottom10-parts");
    parts.forEach(function(part) {
        let h4Elements = part.querySelectorAll("h4");
        h4Elements.forEach(function(h4) {
            gsap.from(h4, {
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: h4,
                    scroller: "#main",
                    start: "top 80%",
                    end: "top 10%",
                    scrub: true
                }
            });
        });
    });
}
/* gsap.to("#bottom10-part2 h4",{
    x:0,
    duration:1,
    stagger:{
        amount:-0.3
    },
    scrollTrigger:{
        trigger:"#bottom10-part2",
        scroller:"body",
        markers:true,
        start:"top 90%",
        end:"top -10%",
        scrub:true,
    },
}) */
    


    document.addEventListener("DOMContentLoaded", function() {
locomotiveAnimation(); 
page10Animation();
opacityAnimation();
arrow();   
navAnimation()
page2Animation()
page3VideoAnimation()
    }
)