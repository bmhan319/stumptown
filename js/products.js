let product = products;

window.onload = function() {
  const bodyScroll = document.querySelector("#bodyScroll");
  const leftColContainer = document.querySelector(".left-col-container");
  const headerTitle = document.querySelector(".head-title");
  const counterNum = document.querySelector("#counterNum");
  const productTitle = document.querySelector(".product-title");
  const productImage = document.querySelector(".product-image");
  const productPrice = document.querySelector(".product-price");
  const productPrice2 = document.querySelector(".product-price2");
  const productDescription = document.querySelector(".product-description");
  const productType = document.querySelector(".product-type");
  const productSize = document.querySelector(".product-size");
  const productSub = document.querySelector(".product-subscription");
  const producer = document.querySelector(".producer");
  const producerDescription = document.querySelector(".prod-descrip");
  const region = document.querySelector(".region");
  const regionDescription = document.querySelector(".region-descrip");
  const productButton = document.querySelector(".product-button");
  const illustration1 = document.querySelector(".illustration1");
  const illustration2 = document.querySelector(".illustration2");
  const map = document.querySelector(".map");
  const locationImage = document.querySelector(".location-image");
  const reccoName1 = document.querySelector(".recommend-name1");
  const reccoName2 = document.querySelector(".recommend-name2");
  const reccoName3 = document.querySelector(".recommend-name3");
  const reccoPrice1 = document.querySelector(".recommend-price1");
  const reccoPrice2 = document.querySelector(".recommend-price2");
  const reccoPrice3 = document.querySelector(".recommend-price3");
  const reccoImage1 = document.querySelector(".recommend-image1");
  const reccoImage2 = document.querySelector(".recommend-image2");
  const reccoImage3 = document.querySelector(".recommend-image3");
  const row2Col1 = document.querySelector(".recommend-row2-col1");
  const row2Col2 = document.querySelector(".recommend-row2-col2");
  const row2Col3 = document.querySelector(".recommend-row2-col3");
  const row3Col1 = document.querySelector(".recommend-row3-col1");
  const row3Col2 = document.querySelector(".recommend-row3-col2");
  const row3Col3 = document.querySelector(".recommend-row3-col3");
  const readMore = document.querySelector(".read-more");
  const mapContainer = document.querySelector(".map-container");
  const productList = document.querySelector(".prod-list");
  const htmlListTag = "</li><li>";

  product = product[localStorage.getItem("productIndex")];
  bodyScroll.classList.add("bodyView");
  bodyScroll.classList.remove("bodyNoView");
  leftColContainer.style.paddingTop = leftColPos;
  headerTitle.innerHTML = product.name + "- Stumptown Coffee";
  counterNum.innerHTML = sessionStorage.getItem("cartCounter");
  productTitle.innerHTML = product.name;
  productTitle.style.color = product.bgColor;
  productImage.setAttribute("src", "img/" + product.image);
  productImage.setAttribute("alt", product.size + " " + product.name);
  productPrice.innerHTML = product.price;
  productPrice2.innerHTML = product.price;
  productPrice.style.color = product.bgColor;
  productDescription.innerHTML = product.description;
  productType.innerHTML = product.category;
  productSize.innerHTML = product.size;
  producer.innerHTML = product.producer;
  producerDescription.innerHTML = product.producerDescription;
  region.innerHTML = product.region;
  regionDescription.innerHTML = product.regionDescription;
  productButton.style.backgroundImage = "url(img/" + product.bannerOff + ")";
  productButton.setAttribute("onclick", "cartConfirm(" + product.id + ")");
  illustration1.style.backgroundImage = "url(img/" + product.sideImage1 + ")";
  illustration2.style.backgroundImage = "url(img/" + product.sideImage2 + ")";
  map.setAttribute("src", "img/" + product.map);
  map.setAttribute("alt", product.map);
  locationImage.setAttribute("src", "img/" + product.sideImage3);
  locationImage.setAttribute("alt", product.sideImage3);
  reccoName1.innerHTML = product.recommendedItem1;
  reccoName2.innerHTML = product.recommendedItem2;
  reccoName3.innerHTML = product.recommendedItem3;
  reccoPrice1.innerHTML = product.recommendedItem1Price;
  reccoPrice2.innerHTML = product.recommendedItem2Price;
  reccoPrice3.innerHTML = product.recommendedItem3Price;
  reccoImage1.setAttribute("src", "img/" + product.recommendedImage1);
  reccoImage1.setAttribute("alt", product.recommendedItem1);
  reccoImage2.setAttribute("src", "img/" + product.recommendedImage2);
  reccoImage2.setAttribute("alt", product.recommendedItem2);
  reccoImage3.setAttribute("src", "img/" + product.recommendedImage3);
  reccoImage3.setAttribute("alt", product.recommendedItem3);

  if (product.sideImage2 == "none") {
    illustration2.style.display = "none";
  }

  if (product.subscription == false) {
    productSub.style.display = "none";
  } else {
    productSub.innerHTML = "Available as a subscription";
  }

  if (product.recommendedItem3 == "none") {
    row2Col1.style.width = "50%";
    row2Col2.style.width = "50%";
    row2Col3.style.display = "none";
    row3Col1.style.width = "50%";
    row3Col2.style.width = "50%";
    row3Col3.style.display = "none";
  }

  if (
    product.recommendedItem2 == "none" &&
    product.recommendedItem3 == "none"
  ) {
    row2Col1.style.width = "100%";
    row2Col2.style.display = "none";
    row2Col3.style.display = "none";
    row3Col1.style.width = "100%";
    row3Col2.style.display = "none";
    row3Col3.style.display = "none";
  }

  if (product.readMore == false) {
    readMore.style.display = "none";
  }

  if (product.map == "none") {
    mapContainer.style.display = "none";
  }

  if (product.sideImage3 == "none") {
    locationImage.style.display = "none";
  }

  if (product.listItem1 !== "none") {
    productList.style.display = "block";

    if (product.listItem2 == "none") {
      productList.innerHTML = "<li>" + product.listItem1 + "</li>";
    } else if (product.listItem3 == "none") {
      productList.innerHTML =
        "<li>" + product.listItem1 + htmlListTag + product.listItem2 + "</li>";
    } else if (product.listItem4 == "none") {
      productList.innerHTML =
        "<li>" +
        product.listItem1 +
        htmlListTag +
        product.listItem2 +
        htmlListTag +
        product.listItem3 +
        "</li>";
    } else if (product.listItem5 == "none") {
      productList.innerHTML =
        "<li>" +
        product.listItem1 +
        htmlListTag +
        product.listItem2 +
        htmlListTag +
        product.listItem3 +
        htmlListTag +
        product.listItem4 +
        "</li>";
    } else {
      productList.innerHTML =
        "<li>" +
        product.listItem1 +
        htmlListTag +
        product.listItem2 +
        htmlListTag +
        product.listItem3 +
        htmlListTag +
        product.listItem4 +
        htmlListTag +
        product.listItem5 +
        "</li>";
    }
  } else {
    productList.style.display = "none";
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
