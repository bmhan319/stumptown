

// Cart Confirmation
window.onload = function(){
  document.querySelector("#counterNum").innerHTML = localStorage.getItem("cartCounter")
  
  if (document.querySelector("#counterNum").innerHTML == 0) {
    document.querySelector("#emptyCart").style.display = "block"
    document.querySelector("#filledCart").style.display = "none"
    document.querySelector("#counterNum").innerHTML = 0
  } else {
    document.querySelector("#emptyCart").style.display = "none"
    document.querySelector("#filledCart").style.display = "block"
  }
}


// Car Confirmation Container
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
  localStorage.setItem("cartCounter", cartCounter);
}

//Close Cart Confirmation
function closeConfirm() {
  let confirm = document.querySelector("#cart-confirm")
  confirm.style.top = -90;
  confirm.style.opacity = 0;
}