let hamburger = document.querySelector(".hamburger")
let nav = document.querySelector("nav")

function toggleNav(){
    nav.classList.toggle("hidden")

    if(!nav.classList.contains("hidden")){
        hamburger.classList.add("effect")
    }
    else{
        hamburger.classList.remove("effect")
    }
}

hamburger.addEventListener("click", toggleNav)


