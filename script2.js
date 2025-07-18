const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstpage(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y:-'-10',
        opacity:0,
        ease: Expo.easeInOut,
        duration:1.5
    })
    .to(".boundingelem",{
        y:0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger:.2,
        delay:-1
    })
    .from("#hero-footer",{
        y:'-10',
        opacity:0,
        ease: Expo.easeInOut,
        duration: 1.1,
        delay:-1
    })
    
}

function circlemousefollower(){
    window.addEventListener("mousemove",function(evt){
        document.querySelector("#minicircle").style.transform=`translate(${evt.clientX}px,${evt.clientY}px)`;

    
})
}
circlemousefollower();
firstpage();

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var diffrot=0
    elem.addEventListener("mouseleave",function(evt){
        
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
            duration:0.5,
        });


    });

    elem.addEventListener("mousemove",function(evt){
        var diff=evt.clientY - elem.getBoundingClientRect().top;
        diffrot=evt.clientX - rotate;
        rotate = evt.clientX;
        
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: diff,
            left:evt.clientX,
            rotate:gsap.utils.clamp(-20,20,diffrot)

        })


    });
});