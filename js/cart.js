
let cartCounter

window.onload = function(){
  let subtotal = 0
  document.querySelector("#counterNum").innerHTML = sessionStorage.getItem("cartCounter")
  cartVisible()
  
  for (var i = 0; i < (sessionStorage.length + 20); i++) {
    
    if (sessionStorage[i] == undefined) {
      continue
    } else {
      let item = JSON.parse(sessionStorage.getItem(i))
      addRow(item)
      subtotal = subtotal + (item.price * item.numItems)
    }
  }
  
  document.querySelector(".item-total-price1").innerHTML = "$" + subtotal
  document.querySelector(".item-total-price4").innerHTML = "$" + subtotal
}

// Add Rows to Table
function addRow(item) {
  let table = document.getElementById("itemTable");
  let row = table.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);
  
  row.setAttribute("id", "itemRow")
  row.setAttribute("class", "table-row")
  
  cell1.setAttribute("class", "item-image")
  cell2.setAttribute("class", "item-name")
  cell3.setAttribute("class", "item-price")
  cell4.setAttribute("class", "item-quantity")
  cell5.setAttribute("class", "item-subtotal")
  cell6.setAttribute("class", "item-remove")
  
  cell1.innerHTML = '<img class="image" src="" />'
  cell2.innerHTML = document.querySelector(".item-name").innerHTML = item.name
  cell3.innerHTML = document.querySelector(".item-price").innerHTML = "$" + item.price
  cell4.innerHTML = '<div class="item-quantity-container"><div class="item-quantity-box"><div class="item-down-box" onclick="numItem(-1)"><img class="item-down-image" src="img/icons-2x.png" /></div><p class="quantity"></p><div class="item-up-box" onclick="numItem(1)"><img class="item-up-image" src="img/icons-2x.png" /></div></div><div class="item-update-container"><button class="item-update-button" type="button">Update</button></div></div>'
  cell5.innerHTML = document.querySelector(".item-subtotal").innerHTML = "$" + (item.price * item.numItems)
  cell6.innerHTML = '<div class="item-remove-box" onclick="clearItem()"><img class="item-remove-image" src="img/icons-2x.png" /></div>'
  
  document.querySelector(".image").setAttribute("src", "img/" + item.image )
  document.querySelector(".image").setAttribute("alt", item.image )
  document.querySelector(".quantity").innerHTML = item.numItems
}

// Cart Visble/Invisible
function cartVisible() {
  if (document.querySelector("#counterNum").innerHTML == 0) {
    document.querySelector("#emptyCart").style.display = "block"
    document.querySelector("#filledCart").style.display = "none"
    document.querySelector("#counterNum").innerHTML = 0
    localStorage.clear()
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
