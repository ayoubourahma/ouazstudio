
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});

//JS Navigation

var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".fa-bars");
var closeBtn = document.querySelector(".fa-times");
var itemsBtn = document.querySelector("header a");
menuBtn.addEventListener("click", () =>{
    menu.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});
itemsBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});
