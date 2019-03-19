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


// Opening Product Page with Correct Product Info
function openProduct(id) {
  localStorage.setItem("productIndex", id)
}











