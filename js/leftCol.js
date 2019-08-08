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
