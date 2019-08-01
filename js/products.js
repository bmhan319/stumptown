let product = products;

window.onload = function() {
  product = product[localStorage.getItem("productIndex")];
  document.querySelector("#bodyScroll").classList.add("bodyView");
  document.querySelector("#bodyScroll").classList.remove("bodyNoView");

  document.querySelector(".left-col-container").style.paddingTop = leftColPos;

  document.querySelector(".head-title").innerHTML =
    product.name + "- Stumptown Coffee";
  document.querySelector("#counterNum").innerHTML = sessionStorage.getItem(
    "cartCounter"
  );
  document.querySelector(".head-title").innerHTML = product.name;
  document.querySelector(".product-title").innerHTML = product.name;
  document.querySelector(".product-title").style.color = product.bgColor;
  document
    .querySelector(".product-image")
    .setAttribute("src", "img/" + product.image);
  document
    .querySelector(".product-image")
    .setAttribute("alt", product.size + " " + product.name);
  document.querySelector(".product-price").innerHTML = product.price;
  document.querySelector(".product-price2").innerHTML = product.price;
  document.querySelector(".product-price").style.color = product.bgColor;
  document.querySelector(".product-description").innerHTML =
    product.description;
  document.querySelector(".product-type").innerHTML = product.category;
  document.querySelector(".product-size").innerHTML = product.size;
  document.querySelector(".producer").innerHTML = product.producer;
  document.querySelector(".prod-descrip").innerHTML =
    product.producerDescription;
  document.querySelector(".region").innerHTML = product.region;
  document.querySelector(".region-descrip").innerHTML =
    product.regionDescription;
  document.querySelector(".product-button").style.backgroundImage =
    "url(img/" + product.bannerOff + ")";
  document
    .querySelector(".product-button")
    .setAttribute("onclick", "cartConfirm(" + product.id + ")");
  document.querySelector(".illustration1").style.backgroundImage =
    "url(img/" + product.sideImage1 + ")";
  document.querySelector(".illustration2").style.backgroundImage =
    "url(img/" + product.sideImage2 + ")";
  document.querySelector(".map").setAttribute("src", "img/" + product.map);
  document.querySelector(".map").setAttribute("alt", product.map);
  document
    .querySelector(".location-image")
    .setAttribute("src", "img/" + product.sideImage3);
  document
    .querySelector(".location-image")
    .setAttribute("alt", product.sideImage3);
  document.querySelector(".recommend-name1").innerHTML =
    product.recommendedItem1;
  document.querySelector(".recommend-name2").innerHTML =
    product.recommendedItem2;
  document.querySelector(".recommend-name3").innerHTML =
    product.recommendedItem3;
  document.querySelector(".recommend-price1").innerHTML =
    product.recommendedItem1Price;
  document.querySelector(".recommend-price2").innerHTML =
    product.recommendedItem2Price;
  document.querySelector(".recommend-price3").innerHTML =
    product.recommendedItem3Price;
  document
    .querySelector(".recommend-image1")
    .setAttribute("src", "img/" + product.recommendedImage1);
  document
    .querySelector(".recommend-image1")
    .setAttribute("alt", product.recommendedItem1);
  document
    .querySelector(".recommend-image2")
    .setAttribute("src", "img/" + product.recommendedImage2);
  document
    .querySelector(".recommend-image2")
    .setAttribute("alt", product.recommendedItem2);
  document
    .querySelector(".recommend-image3")
    .setAttribute("src", "img/" + product.recommendedImage3);
  document
    .querySelector(".recommend-image3")
    .setAttribute("alt", product.recommendedItem3);

  if (product.sideImage2 == "none") {
    document.querySelector(".illustration2").style.display = "none";
  }

  if (product.subscription == false) {
    document.querySelector(".product-subscription").style.display = "none";
  } else {
    document.querySelector(".product-subscription").innerHTML =
      "Available as a subscription";
  }

  if (product.recommendedItem3 == "none") {
    document.querySelector(".recommend-row2-col1").style.width = "50%";
    document.querySelector(".recommend-row2-col2").style.width = "50%";
    document.querySelector(".recommend-row2-col3").style.display = "none";
    document.querySelector(".recommend-row3-col1").style.width = "50%";
    document.querySelector(".recommend-row3-col2").style.width = "50%";
    document.querySelector(".recommend-row3-col3").style.display = "none";
  }

  if (
    product.recommendedItem2 == "none" &&
    product.recommendedItem3 == "none"
  ) {
    document.querySelector(".recommend-row2-col1").style.width = "100%";
    document.querySelector(".recommend-row2-col2").style.display = "none";
    document.querySelector(".recommend-row2-col3").style.display = "none";
    document.querySelector(".recommend-row3-col1").style.width = "100%";
    document.querySelector(".recommend-row3-col2").style.display = "none";
    document.querySelector(".recommend-row3-col3").style.display = "none";
  }

  if (product.readMore == false) {
    document.querySelector(".read-more").style.display = "none";
  }

  if (product.map == "none") {
    document.querySelector(".map-container").style.display = "none";
  }

  if (product.sideImage3 == "none") {
    document.querySelector(".location-image").style.display = "none";
  }

  if (product.listItem1 !== "none") {
    document.querySelector(".prod-list").style.display = "block";

    if (product.listItem2 == "none") {
      document.querySelector(".prod-list").innerHTML =
        "<li>" + product.listItem1 + "</li>";
    } else if (product.listItem3 == "none") {
      document.querySelector(".prod-list").innerHTML =
        "<li>" + product.listItem1 + "</li><li>" + product.listItem2 + "</li>";
    } else if (product.listItem4 == "none") {
      document.querySelector(".prod-list").innerHTML =
        "<li>" +
        product.listItem1 +
        "</li><li>" +
        product.listItem2 +
        "</li><li>" +
        product.listItem3 +
        "</li>";
    } else if (product.listItem5 == "none") {
      document.querySelector(".prod-list").innerHTML =
        "<li>" +
        product.listItem1 +
        "</li><li>" +
        product.listItem2 +
        "</li><li>" +
        product.listItem3 +
        "</li><li>" +
        product.listItem4 +
        "</li>";
    } else {
      document.querySelector(".prod-list").innerHTML =
        "<li>" +
        product.listItem1 +
        "</li><li>" +
        product.listItem2 +
        "</li><li>" +
        product.listItem3 +
        "</li><li>" +
        product.listItem4 +
        "</li><li>" +
        product.listItem5 +
        "</li>";
    }
  } else {
    document.querySelector(".prod-list").style.display = "none";
  }
};

//Keeping Left Col tied to a static bottom position
function leftColPos() {
  let y;

  if (window.innerWidth <= 768) {
    y = 64;
  } else {
    y = window.innerHeight - 350;
  }
  document.querySelector(".left-col-container").style.paddingTop = y;
}

window.onresize = leftColPos;

//Random Image Generator
function genImage() {
  let number;
  let image;
  number = Math.floor(Math.random() * 10);
  image = "random" + number + ".jpg";
  return image;
}

//Hover State of "Add to Cart" Button
document.querySelector(".product-button").onmouseover = function() {
  this.style.backgroundImage = "url(img/" + product.bannerOn + ")";
  this.style.color = product.textColor;
  document.querySelector(".product-price2").style.color = product.textColor;
};

document.querySelector(".product-button").onmouseout = function() {
  this.style.backgroundImage = "url(img/" + product.bannerOff + ")";
  this.style.color = "#f6f5f3";
  document.querySelector(".product-price2").style.color = "#f6f5f3";
};

// Cart Confirmation Container
let cartCounter2 = sessionStorage.getItem("cartCounter");
function cartConfirm(index) {
  let numItems = document.querySelector("#counterNum");
  let confirm = document.querySelector("#cart-confirm");
  let cloneConfirm = confirm.cloneNode(true);

  confirm.classList.add("confirm-animate");
  confirm.style.backgroundColor = products[index].bgColor;
  cartCounter2++;
  numItems.innerHTML = cartCounter2;

  setTimeout(function() {
    confirm.parentNode.replaceChild(cloneConfirm, confirm);
  }, 3000);
  products[index].numItems++;
  sessionStorage.setItem("cartCounter", cartCounter2);
  sessionStorage.setItem(index, JSON.stringify(products[index]));
}
