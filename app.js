// FOR TESTDOME CERTIFICATES
var stylesheet = "https://www.testdome.com/content/source/stylesheets/embed.css",
link = document.createElement("link");
link.href = stylesheet,
link.type = "text/css",
link.rel = "stylesheet",
link.media = "screen,print",
document.getElementsByTagName("head")[0].appendChild(link);
// END FOR TESTDOME CERTIFICATES

// FOR HEADER
let navbar = document.querySelector(".nav-items")
let hamburger = document.querySelector(".hamburger")
let navItems = document.querySelectorAll(".nav-items .item")

hamburger.addEventListener("click", openNavbar)
navItems.forEach(item => {
    item.addEventListener("click", closeNavbar)
})

function openNavbar(){
    if(!navbar.classList.contains("visible")){
        navbar.classList.add("visible")
        navbar.classList.remove("invisible")
        hamburger.classList.add("visible")
        hamburger.classList.remove("invisible")
    }
    else{
        navbar.classList.remove("visible")
        navbar.classList.add("invisible")
        hamburger.classList.remove("visible")
        hamburger.classList.add("invisible")
    }
}

function closeNavbar(){
    if(!navbar.classList.contains("visible")){
        navbar.classList.add("visible")
        navbar.classList.remove("invisible")
        hamburger.classList.add("visible")
        hamburger.classList.remove("invisible")
    }
    else{
        navbar.classList.remove("visible")
        navbar.classList.add("invisible")
        hamburger.classList.remove("visible")
        hamburger.classList.add("invisible")
    }
}
