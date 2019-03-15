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