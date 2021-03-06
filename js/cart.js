const counter = sessionStorage.getItem("cartCounter");

window.onload = function() {
  let subtotal = 0;
  const itemPrice1 = document.querySelector(".item-total-price1");
  const itemPrice4 = document.querySelector(".item-total-price4");
  const counterNum = document.querySelector("#counterNum");
  counterNum.innerHTML = counter;
  cartVisible();

  for (var i = 0; i < sessionStorage.length + 20; i++) {
    if (sessionStorage[i] == undefined) {
      continue;
    } else {
      let item = JSON.parse(sessionStorage.getItem(i));
      addRow(item);
      subtotal = subtotal + item.price * item.numItems;
      products[i].numItems = Number(
        document.querySelector("#quantity" + i).innerHTML
      );
    }
  }
  itemPrice1.innerHTML = subtotal;
  itemPrice4.innerHTML = subtotal;
};

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

  row.setAttribute("id", "itemRow");
  row.setAttribute("id", "itemRow" + item.id);
  row.setAttribute("class", "table-row");

  cell1.setAttribute("class", "item-image");
  cell2.setAttribute("class", "item-name");
  cell3.setAttribute("class", "item-price");
  cell4.setAttribute("class", "item-quantity");
  cell5.setAttribute("class", "item-subtotal");
  cell6.setAttribute("class", "item-remove");
  populateTable();
  addTableData();

  // Fill in Product Attributes to Cart Rows
  function populateTable() {
    cell1.innerHTML = '<img class="image" src="" />';
    cell2.innerHTML = item.name;
    cell3.innerHTML = item.price;
    cell4.innerHTML =
      '<div class="item-quantity-container"><div class="item-quantity-box"><div class="item-down-box"><img class="item-down-image" src="img/icons-2x.png" /></div><p class="quantity"></p><div class="item-up-box"><img class="item-up-image" src="img/icons-2x.png" /></div></div><div class="item-update-container"><button class="item-update-button" type="button">Update</button></div></div>';
    cell5.innerHTML =
      '<span class="item-subtotal-text">Subtotal: </span><span class="item-subtotal-number">' +
      item.price * item.numItems +
      "</span>";
    cell6.innerHTML =
      '<div class="item-remove-box remove-text-box"><p class="remove-text">Remove</p><img class="item-remove-image" src="img/icons-2x.png" /></div>';
  }

  // Fill in Product Data to Cart Rows
  function addTableData() {
    const image = document.querySelector(".image");
    const itemPrice = document.querySelector(".item-price");
    const itemQuantity = document.querySelector(".quantity");
    const itemSubTotal = document.querySelector(".item-subtotal-number");
    const itemDown = document.querySelector(".item-down-box");
    const itemUp = document.querySelector(".item-up-box");
    const itemRemove = document.querySelector(".item-remove-box");

    image.setAttribute("src", "img/" + item.image);
    image.setAttribute("alt", item.image);
    itemPrice.setAttribute("id", "price" + item.id);
    itemQuantity.setAttribute("id", "quantity" + item.id);
    itemQuantity.innerHTML = item.numItems;
    itemSubTotal.setAttribute("id", "subTotal" + item.id);
    itemDown.setAttribute("onclick", "numItem(-1," + item.id + ")");
    itemDown.classList.add("item-down-box" + item.id);
    itemUp.setAttribute("onclick", "numItem(1," + item.id + ")");
    itemRemove.setAttribute(
      "onclick",
      "clearItem(" + item.id + "," + item.numItems + ")"
    );
  }
}

// Cart Visble/Invisible
function cartVisible() {
  const counterNum = document.querySelector("#counterNum");
  const filledCart = document.querySelector("#filledCart");
  const emptyCart = document.querySelector("#emptyCart");

  if (counterNum.innerHTML == 0) {
    emptyCart.style.display = "block";
    filledCart.style.display = "none";
    counterNum.innerHTML = 0;
    localStorage.clear();
  } else {
    emptyCart.style.display = "none";
    filledCart.style.display = "block";
  }
}

// Add/Subtract Item from Cart
function numItem(num, index) {
  let quantity = document.querySelector("#quantity" + index);
  let subTotal = document.querySelector("#subTotal" + index);
  let price = document.querySelector("#price" + index);
  let itemBox = document.querySelector(".item-down-box" + index);
  const counterNum = document.querySelector("#counterNum");

  quantity.innerHTML = Number(quantity.innerHTML) + num;
  subTotal.innerHTML = Number(quantity.innerHTML * price.innerHTML);
  products[index].numItems = Number(products[index].numItems + num);
  sessionStorage.setItem(index, JSON.stringify(products[index]));
  counterNum.innerHTML = Number(counterNum.innerHTML) + num;
  sessionStorage.setItem("cartCounter", counterNum.innerHTML);

  if (quantity.innerHTML == 0) {
    itemBox.style.pointerEvents = "none";
  } else {
    itemBox.style.pointerEvents = "auto";
  }

  totalAmount();
}

//Figure Subtotal and Total
function totalAmount() {
  let subTotal = 0;
  const itemTotal1 = document.querySelector(".item-total-price1");
  const itemTotal4 = document.querySelector(".item-total-price4");

  for (var i = 0; i < sessionStorage.length + 20; i++) {
    if (sessionStorage[i] == undefined) {
      continue;
    } else {
      subTotal =
        subTotal + Number(document.querySelector("#subTotal" + i).innerHTML);
      itemTotal1.innerHTML = subTotal;
      itemTotal4.innerHTML = subTotal;
    }
  }
}

// Clear Item from Cart
function clearItem(index, numItem) {
  let row = document.querySelector("#itemRow" + index);
  let sub = document.querySelector("#subTotal" + index);
  const counterNum = document.querySelector("#counterNum");

  sessionStorage.removeItem(index);
  row.style.display = "none";
  sub.innerHTML = 0;
  totalAmount();
  counterNum.innerHTML = counterNum.innerHTML - products[index].numItems;
  sessionStorage.setItem("cartCounter", counterNum.innerHTML);
  cartVisible();
}
