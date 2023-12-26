// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function locomotiveAnimation(){
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

locomotiveAnimation()
function navbarAnimation(){
        
gsap.to("#nav-part1 svg",{
    transform:'translateY(-100%)',
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top 0",
        end:"top -5%",
        scrub:true,
    }
})
gsap.to("#nav-part2 #links",{
    transform:'translateY(-100%)',
    opacity:0,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top 0",
        end:"top -5%",
        scrub:true,
    }
})
}

navbarAnimation()

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left:dets.x-50,
            top:dets.y-50,
    
        })
    
    })
    
    // document.querySelector('#child1').addEventListener('mouseenter',function(){
    //     gsap.to('#cursor',{
    //         // transform:'translate(-50%, -50%)',
    //         // scale:1,
    //         transform:'translate(-50%, -50%) scale(1)'
            
    //     })
    // })
    // document.querySelector('#child1').addEventListener('mouseleave',function(){
    //     gsap.to('#cursor',{
    //         // transform:'translate(-50%, -50%)',
    //         // scale:1,
    //         transform:'translate(-50%, -50%) scale(0)'
            
    //     })
    // })
    
    // es tarike se hume har ek child pe lagana padega, so use queryselector all->ot returns nodeList
    
    document.querySelectorAll(".child").forEach(function(elem){
       elem.addEventListener('mouseenter',function(){
        gsap.to('#cursor',{
            transform:'translate(-50%, -50%) scale(1)',
       })
    
    })
    
    elem.addEventListener('mouseleave',function(){
        gsap.to('#cursor',{
            transform:'translate(-50%, -50%) scale(0)',
       })
    
    })
    })
}

cursorAnimation()



function videoconAnimation(){
    const videocon = document.querySelector('#video-container')
    const playbtn = document.querySelector("#play")

videocon.addEventListener('mouseenter',function(){
    // playbtn.style.opacity = 1
    // playbtn.style.scale = 1

    gsap.to(playbtn,{
        scale : 0.8,
        opacity : 1,
    })

})

videocon.addEventListener('mouseleave',function(){
 

    gsap.to(playbtn,{
        scale : 0,
        opacity : 0,
    })

})

videocon.addEventListener('mousemove',function(dets){
    gsap.to(playbtn,{
        left:dets.x-80,
        top:dets.y-80,
        
    })

})

}
videoconAnimation()

function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.8,
        stagger:0.2
    })
    gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity:0,
        delay:1.5,
        duration:0.3,

    })
}

loadingAnimation()




function loadingAnimationPage3(){
    gsap.from("#page3 .child",{
        
       
        
        opacity:0,
        // delay:0.1,
        duration:0.3,
        stagger:0.1,
        
        scrollTrigger:{
            trigger:".child",
            scroller:"#main",
            // markers:true,
            start:"top 60%",
            end:"bottom 40%",
            scrub:true,
    }
})
   
}

loadingAnimationPage3()

function loadingAnimationPage4(){
    gsap.from("#page4 .left h1",{
        
       
        opacity:0,
        
        scrollTrigger:{
            trigger:".left",
            scroller:"#main",
            // markers:true,
            start:"top 90%",
            end:"top -8%",
            scrub:true,
    }
    })
    gsap.from("#page4 .right p",{
        
       
        opacity:0,
        scrollTrigger:{
            trigger:".right",
            scroller:"#main",
            // markers:true,
            start:"top 90%",
            end:"top -5%",

            scrub:true,
    }
    })
    gsap.from("#page4 .right button",{
        
       
        opacity:0,
        scrollTrigger:{
            trigger:".right",
            scroller:"#main",
            // markers:true,
            start:"top 90%",
            end:"top -8%",

            scrub:true,
    }
    })
}

loadingAnimationPage4()

function loadingAnimationPage5(){
    gsap.from("#page5 .bottom",{
        
       
        width:'0%',
        opacity:0,
        
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            // markers:true,
            start:"top 90%",
            end:"top 20%",
            scrub:true,
    }
    })
    
}

loadingAnimationPage5()

function loadingAnimationPage6(){
    gsap.from("#page6 .bottom",{
        
       
        width:'0%',
        opacity:0,
        
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            // markers:true,
            start:"top 90%",
            end:"top 20%",
            scrub:true,
    }
    })
    
}
loadingAnimationPage6()

function loadingAnimationPage6Middle(){
    gsap.from("#page6 .middle",{
        
       
        width:'0%',
        opacity:0,
        
        scrollTrigger:{
            trigger:"#page6 .middle",
            scroller:"#main",
            // markers:true,
            start:"top 50%",
            end:"top 5%",
            scrub:true,
    }
    })
    
}
loadingAnimationPage6Middle()

function loadingAnimationPage7(){
    gsap.from("#page7 .top h1",{
        
       
        opacity:0,
        
        scrollTrigger:{
            trigger:"#page7",
            scroller:"#main",
            // markers:true,
            start:"top 90%",
            end:"top -8%",
            scrub:true,
    }
    })
    
}

loadingAnimationPage7()


var ddc = document.querySelector('#dropdown a span')
var dd = document.querySelector('#dropdown')

function closeSidebar(){
    const closesidebar = document.querySelector("#dropdown");
    closesidebar.style.opacity = 0
}



