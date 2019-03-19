let product = JSON.parse(localStorage.getItem('product'))
let cartCounter;
window.onload = function(){
  cartVisible()
  document.querySelector(".item-image").setAttribute("src", "img/" + product.image )
  document.querySelector(".item-image").setAttribute("alt", product.image )
  document.querySelector(".item-name").innerHTML = product.name
  document.querySelector(".item-price").innerHTML = "$" + product.price
  document.querySelector(".quantity").innerHTML = product.numItems
  document.querySelector(".item-subtotal").innerHTML = "$" + (product.price * product.numItems)
}

// Cart Confirmation Container

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
  products[index].numItems++
  localStorage.setItem("cartCounter", cartCounter)
  localStorage.setItem('product' + index, JSON.stringify(products[index]))
}

//Close Cart Confirmation
function closeConfirm() {
  let confirm = document.querySelector("#cart-confirm")
  confirm.style.top = -90;
  confirm.style.opacity = 0;
}

// Cart Visble/Invisible
function cartVisible() {
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

// Add/Subtract Item from Cart
function numItem(num) {
  let numItems = document.querySelector("#counterNum")
  
  product.numItems = product.numItems + num
  document.querySelector(".quantity").innerHTML = product.numItems
  numItems.innerHTML = product.numItems
  document.querySelector(".item-subtotal").innerHTML = "$" + (product.price * product.numItems)
}

// Clear Item from Cart
function clearItem() {
  
}
