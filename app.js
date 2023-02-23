const ham = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a")
const header = document.querySelector(".header.container");

ham.addEventListener("click",function(){
    ham.classList.toggle("active");
    mobile_menu.classList.toggle("active")
});
 document.addEventListener('scroll', function(){
    var scrollPosition = window.scrollY;
    if(scrollPosition > 250){
        // header.classList.toggle("color");
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transparent";
    }
 })

 menu_item.forEach(function(item){
    item.addEventListener('click', function(){
        mobile_menu.classList.toggle("active");
        ham.classList.toggle("active");
    })
 })