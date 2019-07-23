let cartCounter = sessionStorage.getItem("cartCounter");

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
  let fade = document.querySelectorAll(".fadein");

  for (var i = 0; i < fade.length; i++) {
    let productRow = fade[i].getBoundingClientRect();
    let topOfObject = productRow.top;
    let bottomOfWindow = window.innerHeight;

    if (topOfObject < bottomOfWindow) {
      fade[i].style.opacity = 1;
    }
  }
}

// Menu Bar to Fixed Position on Scoll
document.addEventListener("scroll", fixedNav);

function fixedNav() {
  let height = innerHeight - 100;
  let head = document.querySelector("#header");
  let products = document.querySelector(".section-products");

  if (scrollY >= height) {
    head.style.position = "fixed";
    head.style.top = 0;
    products.style.marginTop = 100;
  } else {
    head.style.position = "relative";
    head.style.top = -69;
    products.style.marginTop = 0;
  }
}

// Opening Product Page with Correct Product Info
function openProduct(id) {
  localStorage.setItem("productIndex", id);
}

// Cart Confirmation Container
function cartConfirm(index) {
  let numItems = document.querySelector("#counterNum");
  let confirm = document.querySelector("#cart-confirm");
  let cloneConfirm = confirm.cloneNode(true);

  confirm.classList.add("confirm-animate");
  confirm.style.backgroundColor = products[index].bgColor;
  cartCounter++;
  numItems.innerHTML = cartCounter;

  setTimeout(function() {
    confirm.parentNode.replaceChild(cloneConfirm, confirm);
  }, 3000);
  products[index].numItems++;
  sessionStorage.setItem("cartCounter", cartCounter);
  sessionStorage.setItem(index, JSON.stringify(products[index]));
}

//Close Cart Confirmation
function closeConfirm() {
  let confirm = document.querySelector("#cart-confirm");
  confirm.style.top = -90;
  confirm.style.opacity = 0;
}
