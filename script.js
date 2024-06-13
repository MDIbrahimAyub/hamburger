var burger = document.querySelector(".burger")
var header = document.querySelector(".header")

var toggleNavbar = () => {
    header.classList.toggle("active")
}

burger.addEventListener("click",function(){
    toggleNavbar()
})
