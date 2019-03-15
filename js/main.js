// Menu Bar to Fixed Position on Scoll
document.addEventListener("scroll", fixedNav);
  
function fixedNav() {
  let height = innerHeight - 100
  let head = document.querySelector("#header")
  let products = document.querySelector(".section-products")
  
  if (scrollY >= height) {
    head.style.position = "fixed"
    head.style.top = 0
    products.style.marginTop = 100
  } else {
    head.style.position = "relative"
    head.style.top = -69
    products.style.marginTop = 0
  }
}

// Cart Confirmation
let cartCounter = 0;
function cartConfirm(index) {
  let numItems = document.querySelector("#counterNum")
  let confirm = document.querySelector("#cart-confirm")
  let cloneConfirm = confirm.cloneNode(true)
    
  confirm.classList.add("confirm-animate")
  confirm.style.backgroundColor = products[index].bgColor
  cartCounter = cartCounter + 1
  numItems.innerHTML = cartCounter

  setTimeout(function(){
    confirm.parentNode.replaceChild(cloneConfirm, confirm)      
  }, 3000);
}

//Close Cart Confirmation
function closeConfirm() {
  let confirm = document.querySelector("#cart-confirm")
  confirm.style.top = -90;
  confirm.style.opacity = 0;
}


// Open Nav
let navCounter = true; 
function openNav() {
  let body = document.querySelector("#bodyScroll")
  let nav = document.querySelector("#nav")
  let expand = document.querySelector("#expand")
  
  if (navCounter == true) {
    body.style.overflowY = "hidden"
    nav.classList.add("section-nav-open")
    expand.classList.add("nav-row2-unexpand")
    navCounter = false
    
  } else if (navCounter == false) {
    body.style.overflowY = "visible"
    nav.classList.remove("section-nav-open")
    expand.classList.remove("nav-row2-unexpand")
    navCounter = true
  }
}










