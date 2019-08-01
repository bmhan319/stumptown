// Open Nav
let navCounter = true;
function openNav() {
  const body = document.querySelector("#bodyScroll");
  const nav = document.querySelector("#nav");
  const expand = document.querySelector("#expand");

  if (navCounter == true) {
    body.style.overflowY = "hidden";
    nav.classList.add("section-nav-open");
    expand.classList.add("nav-row2-unexpand");
    navCounter = false;
  } else if (navCounter == false) {
    body.style.overflowY = "visible";
    nav.classList.remove("section-nav-open");
    expand.classList.remove("nav-row2-unexpand");
    navCounter = true;
  }
}
