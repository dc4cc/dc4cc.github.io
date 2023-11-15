const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, 
    yValue = 0;


window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    let zValue = 200;

    parallax_el.forEach((el) => {
       let speedx = el.dataset.speedx; 
       let speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(0% + ${-xValue * speedx}px)) 
        translateY(calc(0% + ${yValue * speedy}px)) 
        translateZ(${zValue}px)`;
    });

});

// perspective(2300px)