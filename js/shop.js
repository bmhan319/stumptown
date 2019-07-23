// Show/Hide "Top" link
myID = document.getElementById("shopTop")

var ScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 900) {
    myID.className = "shop-top-show"
  } else {
    myID.className = "shop-top-hide"
  }
}
window.addEventListener("scroll", ScrollFunc)


// Get 'Top' Image to stick to bottom of left col
function locateFooter() {
  let footer = document.querySelector("#footer")
  let stickEl = document.querySelector(".shop-top-show")
  let pos = footer.getBoundingClientRect().top - document.body.getBoundingClientRect().top
  var window_bottom_position = window.scrollY + window.innerHeight

  function getElementWindowTop(elem){
    return elem && typeof elem.getBoundingClientRect === 'function' ? elem.getBoundingClientRect().top - document.body.getBoundingClientRect().top : 0;
  }

  var element_top_position = getElementWindowTop(footer)
  var element_bottom_position = element_top_position + footer.clientHeight
  
  if(element_bottom_position >= window.scrollY && element_top_position <= window_bottom_position){
    stickEl.className = "shop-top-show-absolute"
  } else {
    stickEl.className = "shop-top-show"
  }
}
window.addEventListener("scroll", locateFooter)


// Scroll back to top of page
$(document).ready(function() {
    $("#shopTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

// Opening Product Page with Correct Product Info
function openProduct(id) {
  localStorage.setItem("productIndex", id)
}


//Show all Products on load
window.onload = function() {
  
}
  
