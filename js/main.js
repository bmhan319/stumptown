// Menu Bar to Fixed Position on Scoll
document.addEventListener("scroll", fixedNav);
  
function fixedNav() {
  let height = innerHeight - 100
  let head = document.querySelector("#header")
  
  if (scrollY >= height) {
    head.style.position = "fixed"
    head.style.top = 0
  } else {
    head.style.position = "relative"
    head.style.top = -69
  }
}






