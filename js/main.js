//Page Fades In
window.onload = function() {
  let numItems = document.querySelector("#counterNum");
  document.querySelector("#bodyScroll").classList.add("bodyView");
  document.querySelector("#bodyScroll").classList.remove("bodyNoView");
  document.querySelector("#bodyScroll");
  numItems.innerHTML = cartCounter;
};

//Product Items Fade In
document.addEventListener("scroll", fadeIn);

function fadeIn() {
  const fade = document.querySelectorAll(".fadein");
  //const loader = document.querySelectorAll(".loader");

  for (var i = 0; i < fade.length; i++) {
    let productRow = fade[i].getBoundingClientRect();
    let topOfObject = productRow.top;
    let bottomOfWindow = window.innerHeight;

    if (topOfObject < bottomOfWindow && topOfObject > 0) {
      fade[i].style.opacity = 1;
      //loader[i].style.opacity = 0;
    }
  }
}

// Menu Bar to Fixed Position on Scoll
document.addEventListener("scroll", navPosition);
window.onresize = navPosition;

function navPosition() {
  let height = innerHeight - 100;
  let width = innerWidth;
  let head = document.querySelector("#header");
  let products = document.querySelector(".section-products");

  if (width >= 1024) {
    if (scrollY >= height) {
      head.style.position = "fixed";
      head.style.top = 0;
      products.style.marginTop = 100;
    } else {
      head.style.position = "relative";
      head.style.top = -69;
      products.style.marginTop = 0;
    }
  } else {
    head.style.position = "fixed";
    head.style.top = 0;
  }
}

// Opening Product Page with Correct Product Info
function openProduct(id) {
  localStorage.setItem("productIndex", id);
}
