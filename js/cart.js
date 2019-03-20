let item = JSON.parse(localStorage.getItem('product'))
let cartCounter

window.onload = function(){
  document.querySelector("#counterNum").innerHTML = localStorage.getItem("cartCounter")
  cartVisible()
  document.querySelector(".image").setAttribute("src", "img/" + item.image )
  document.querySelector(".image").setAttribute("alt", item.image )
  document.querySelector(".item-name").innerHTML = item.name
  document.querySelector(".item-price").innerHTML = "$" + item.price
  document.querySelector(".item-total-price1").innerHTML = "$" + item.price
  document.querySelector(".quantity").innerHTML = item.numItems
  document.querySelector(".item-subtotal").innerHTML = "$" + (item.price * item.numItems)
  document.querySelector(".item-total-price4").innerHTML = document.querySelector(".item-subtotal").innerHTML
}



// Cart Visble/Invisible
function cartVisible() {
  if (document.querySelector("#counterNum").innerHTML == 0) {
    document.querySelector("#emptyCart").style.display = "block"
    document.querySelector("#filledCart").style.display = "none"
    document.querySelector("#counterNum").innerHTML = 0
    localStorage.clear();
  } else {
    document.querySelector("#emptyCart").style.display = "none"
    document.querySelector("#filledCart").style.display = "block"
  }
}

// Add/Subtract Item from Cart
function numItem(num) {
  let numItems = document.querySelector("#counterNum") //Cart Icon Number
  
  
  item.numItems = item.numItems + num
  localStorage.setItem('product', JSON.stringify(products[index]))
  
  
  document.querySelector(".quantity").innerHTML = item.numItems
  numItems.innerHTML = item.numItems
  document.querySelector(".item-subtotal").innerHTML = "$" + (item.price * item.numItems)
  document.querySelector(".item-total-price1").innerHTML = "$" + (item.price * item.numItems)
  document.querySelector(".item-total-price4").innerHTML = document.querySelector(".item-total-price1").innerHTML
  
  if (document.querySelector(".quantity").innerHTML <= 0) {
    item.numItems = 0
  }
  
}




// Clear Item from Cart
function clearItem() {
  let row = document.querySelector("#itemRow")
  let numItems = document.querySelector("#counterNum")
  row.style.display = "none"
  item.numItems = 0
  document.querySelector("#counterNum").innerHTML = 0
  cartVisible()
}
