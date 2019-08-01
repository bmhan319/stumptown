let cartCounter = sessionStorage.getItem("cartCounter");

// Cart Confirmation Container
function cartConfirm(index) {
  const numItems = document.querySelector("#counterNum");
  const confirm = document.querySelector("#cart-confirm");
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
  const confirm = document.querySelector("#cart-confirm");
  confirm.style.top = -90;
  confirm.style.opacity = 0;
}
