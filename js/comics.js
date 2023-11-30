let timeline = gsap.timeline({
    defaults : { duration: 1.2, ease: "power3.inOut" } 
});

timeline.to(".image-wrap", {
    height: "800px",
    backgroundSize: "100%",
    duration: 1.5,
    ease: "power4.inOut",
}).to(
    ".image-wrap", {
        height:"400px",
        backgroundPosition: "20% 10%",
        y: "0",
    }, 
    1.5
).from(".big-name", {
     y: getYDistance(".big-name"),
}, 
1.5 
).from(
    ".hide", 
    {
    opacity: "0", 
    },
    1.5
);

function getYDistance(el) {
    return (    
        window.innerHeight - document.querySelector(el).getBoundingClientRect().top
    );
}
