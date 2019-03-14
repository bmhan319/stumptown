// Menu Bar to Fixed Position on Scoll
document.addEventListener("scroll", fixedNav);
  
function fixedNav() {
  let height = innerHeight - 100
  let head = document.querySelector("#header")
  
  if (scrollY >= height) {
    head.style.position = "fixed"
    head.style.top = 0
  } else {
    head.style.position = "relative"
    head.style.top = -69
  }
}



// Objects of Products

let products = [
  {name: "Papa New Guinea Besser",
   price: "$18",
   image: "coffee-besser.png",
   bgColor: "rgb(31, 24, 21)"},
  
  {name: "12oz Skate Team",
   price: "$15",
   image: "skate-team.nl",
   bgColor: "rgb(0, 63, 135)"},
  
  {name: "12oz Skate Team Box Set",
   price: "$29",
   image: "skate-team-box.nl",
   bgColor: "rgb(0, 63, 135)"},
  
  {name: "12oz Hair Bender",
   price: "$15",
   image: "coffee-hair-bender.nl",
   bgColor: "rgb(81, 44, 29)"},
  
  {name: "12oz Guatemala El Injerto Bourbon",
   price: "$19",
   image: "coffee-guatemala-bourbon.nl",
   bgColor: "rgb(0, 63, 135)"},
  
  {name: "12oz Rwanda Huye Mountain",
   price: "$17",
   image: "coffee-rwanda-huye.nl",
   bgColor: "rgb(209, 68, 20)"},
  
  {name: "East Fork Mug",
   price: "$40",
   image: "east-fork-mug.nl",
   bgColor: "rgb(31, 24, 21)"},
  
  {name: "Stumptown Coffee Jar",
   price: "$15",
   image: "st-coffee-jar.nl",
   bgColor: "rgb(31, 24, 21)"},
  
  {name: "African Trio",
   price: "$38",
   image: "african-trio.nl",
   bgColor: "rgb(209, 68, 20)"},
  
  {name: "Miir Camp Cup",
   price: "$26",
   image: "miiR-camp-cup.nl",
   bgColor: "rgb(31, 24, 21)"},
  
  {name: "Miir Wide Moth Water Bottle",
   price: "$30",
   image: "miiR-wide-mouth.nl",
   bgColor: "rgb(31, 24, 21)"},
  
  {name: "Miir Travel Tumbler",
   price: "$28",
   image: "miiR-travel-tumbler.nl",
   bgColor: "rgb(31, 24, 21)"},
  
  {name: "Miir 8oz Tumbler",
   price: "$18",
   image: "miiR-8oz-tumbler.nl",
   bgColor: "rgb(31, 24, 21)"}
]




