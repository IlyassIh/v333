var typed = new Typed(".text-typing", {
    strings: ["Ilyass Ihassane"," a Programmer", "FullStack Web Developer "],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});

let btn = document.getElementById("btn");

addEventListener("scroll", function() {
    if (scrollY >= 400) {
        btn.classList.add("show-btn");
    } else {
        btn.classList.remove("show-btn");
    }
});

btn.addEventListener("click", function(){
    scroll({
        top: 0,
        left:0,
        behavior: "smooth",

    })
});