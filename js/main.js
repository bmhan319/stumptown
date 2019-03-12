// Opening/Closing Hamburger Menu on Mobile Page
//Using JQuery for "toggle()"
let navMenuCounter = 2;

function openMenu(x, num) {
  let navMobile = document.querySelector(".navbar-mobile")
  
  navMenuCounter = navMenuCounter + num;
  if (navMenuCounter % 2 == 0) {
    navMobile.style.display = "none";
    navMenuCounter = 2
    x.classList.toggle("change");
  } else {
    navMobile.style.display = "block";
    x.classList.toggle("change");
  }
}


// Bottom Popup Bar
window.onscroll = function () {
  let scrollPos = window.pageYOffset
  if (scrollPos < 300) {
    document.getElementById("contact-bar").style.bottom = "-84"
  } else {
    document.getElementById("contact-bar").style.bottom = "-10px"
  }
}


// Code from "Slick Carousel"
//http://kenwheeler.github.io/slick/
//"Center Mode" Slider

$(document).ready(function(){
  $('.center-slide').slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});











