

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        left:dets.x,
        top:dets.y,
    })
})
// function cursoranimation(){
// // var a = document.querySelectorAll(".child")
// // a.forEach(function(elem){
// //     elem.addEventListener("mouseenter",function(){
// //         gsap.to(".cursor",{
// //             transform: 'translate(-50%,-50%) scale(1)',
// //         })
        
// //     })
// // });
// //     a.forEach(function(elem){
// //         elem.addEventListener("mouseleave",function(){
// //             gsap.to(".cursor",{
// //                 transform: 'translate(-50%,-50%) scale(1)',
// //             })
// //         })
// // });

// }
// cursoranimation();


function loadinganimation(){
    
gsap.from(".page1 h1",{
    y:100,
    // duration:.9,
    delay:.5,
    opacity:0,
    stagger:0.3,

})
gsap.from(".page1 #video-container",{
    scale:0.95,
    duration:.5,
    delay:1.3,
    opacity:0,
    // stagger:0.2,

})
}
loadinganimation ();

function videoconanimation(){
    
var videocon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")

videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        opacity:1,
        scale:1,
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        opacity:0,
        scale:0,
    })
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-80,
        top:dets.y-80,
    })
})

}
videoconanimation();