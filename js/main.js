// Menu Bar to Fixed Position on Scoll
document.addEventListener("scroll", fixedNav);
  
function fixedNav() {
  let height = innerHeight - 100
  let head = document.querySelector("#header")
  let products = document.querySelector(".section-products")
  
  if (scrollY >= height) {
    head.style.position = "fixed"
    head.style.top = 0
    products.style.marginTop = 100
  } else {
    head.style.position = "relative"
    head.style.top = -69
    products.style.marginTop = 0
  }
}

// Cart Confirmation
let cartCounter = 0;
function cartConfirm(index) {
  let numItems = document.querySelector("#counterNum")
  let confirm = document.querySelector("#cart-confirm")
  let cloneConfirm = confirm.cloneNode(true)
    
  confirm.classList.add("confirm-animate")
  confirm.style.backgroundColor = products[index].bgColor
  cartCounter = cartCounter + 1
  numItems.innerHTML = cartCounter

  setTimeout(function(){
    confirm.parentNode.replaceChild(cloneConfirm, confirm)      
  }, 3000);
}

//Close Cart Confirmation
function closeConfirm() {
  let confirm = document.querySelector("#cart-confirm")
  confirm.style.top = -90;
  confirm.style.opacity = 0;
}


// Open Nav
let navCounter = true; 
function openNav() {
  let body = document.querySelector("#bodyScroll")
  let nav = document.querySelector("#nav")
  let expand = document.querySelector("#expand")
  console.log(expand)
  
  if (navCounter == true) {
    body.style.overflowY = "hidden"
    nav.style.opacity = .98
    nav.style.pointerEvents = "auto"
    expand.style.transform = "scale(1)"
    navCounter = false
    
  } else if (navCounter == false) {
    body.style.overflowY = "visible"
    nav.style.opacity = 0
    nav.style.pointerEvents = "none"
    expand.style.transform = "scale(1.4)"
    navCounter = true
  }
}





// Objects of Products

let products = [
  {id: 0000,
   name: "Papa New Guinea Besser",
   price: "$18",
   image: "coffee-besser.png",
   bgColor: "rgb(31, 24, 21)",
   description: "Papua New Guinea Besser is beautifully layered, with a perfect balance of sweetness and acidity. It’s a coffee that is complex, yet versatile and can be brewed any which way you prefer. Cheers.",
   category: "Whole Bean Coffee",
   size: "12oz",
   producer: "Bebes Sero",
   producerDescription:"Bebes Sero purchased his coffee plantation and wet mill 12 years ago, however it was originally planted in the 1960’s. Stumptown’s relationship with Bebes Sero is a fresh one, and we’re super excited to offer his coffee for the third year in a row.",
   region: "Obura-Wonenara District",
   regionDescription: "Bebes' washing station is settled in the mountains of the Eastern Highlands, often shaded with a dense cloud cover. We were fortunate to visit Bebes in 2016. On our visit we were struck by the beautiful array of flowers that surround his coffee varieties throughout his farm.",
   sideImage1: "",
   sideImage2: "",
   sideImage3: "",
   recommendedItem1: "Milton Filter #4",
   recommendedItem2: "Bee House Pour Over",
   recommendedItem3: "Miir Travel Tumbler",
   recommendedItem1Price: "$5",
   recommendedItem2Price: "$18",
   recommendedItem3Price: "$28"},
  
  {id: 1,
   name: "12oz Skate Team",
   price: "$15",
   image: "skate-team.nl",
   bgColor: "rgb(0, 63, 135)",
   description: "This Colombian coffee highlights a collaboration between Stumptown and a few choice skateboarders we admire. It’s as sweet and clean as a perfectly caught kickflip over grandma’s garden hose. One dollar from the sale of this bag will go to a selection of local non-profits, chosen by our skateboarding employees.",
   category: "Whole Bean",
   size: "12 ounces",
   producer: "Skate Team",
   producerDescription:"Since we began partnering with Caravela, our import and export partner for this coffee, our two companies have been able to work with coffee growing communities in this remote region of Colombia to improve coffee quality, raise coffee prices paid to growers, reduce barriers to the more lucrative specialty coffee market, and in turn improve the profits and financial stability of individual farm owners. One of the major tenets of our Direct Trade coffee sourcing practices is to enter into long-term agreements with producers. This helps to ensure both a reliable supply of high-quality green coffee for us, as well as a reliable income for the producers.",
   region: "Tolima Department",
   regionDescription: "Nestled in the department of Tolima, beneath the shadows of the magnificent Nevado del Huila, Colombia’s highest volcano, the El Jordan group of farmers cultivate their coffee in a stunning valley with fertile, volcanic soil. The area surrounding Nevado del Huila is among the most fruitful in Colombia and provides an excellent microclimate for growing coffee.",
   sideImage1: "",
   sideImage2: "",
   sideImage3: "",
   recommendedItem1: "Artist Series Mug: Chet Childress",
   recommendedItem2: "Artist Series Tote: Chet Childress",
   recommendedItem3: "",
   recommendedItem1Price: "$12",
   recommendedItem2Price: "$15",
   recommendedItem3Price: ""},
  
  {id: 2,
   name: "12oz Skate Team Box Set",
   price: "$29",
   image: "skate-team-box.nl",
   bgColor: "rgb(0, 63, 135)",
   description: "This Colombian coffee highlights a collaboration between Stumptown and a few choice skateboarders we admire. The beans were produced by El Jordan growers and sourced by our partners (and fellow B Corp) Caravela Coffee. It’s as sweet and clean as a perfectly caught kickflip over grandma’s garden hose. Skate Team is sweet, balanced, and extremely versatile.",
   category: "Includes All Items Shown",
   size: "",
   producer: "Radical Limited Edition Box Set",
   producerDescription:"In addition to twelve ounces of fine coffee beans from our partners at El Jordan, in a custom bag designed by skate team member Chet Childress, this limited edition box set features some exclusive treats for yourself and all the beloved skateboards in your life. A special sticker pack! Pinback buttons for your backpack or hoodie! A cassette copy of the soundtrack to our first-ever skate movie, Breaking the Crust! And best of all -- a full-color skate edition of our in-house zine, Bloom, including interviews with skate legends Elissa Steamer, Nick Boserio, and Silas Baxter-Neal, and more features celebrating our love of skateboarding.",
   region: "",
   regionDescription: "",
   sideImage1: "",
   sideImage2: "",
   sideImage3: "",
   recommendedItem1: "Skate Team Beanie",
   recommendedItem2: "",
   recommendedItem3: "",
   recommendedItem1Price: "$15",
   recommendedItem2Price: "",
   recommendedItem3Price: ""},
  
  {id: 3,
   name: "12oz Hair Bender",
   price: "$15",
   image: "coffee-hair-bender.nl",
   bgColor: "rgb(81, 44, 29)",
   description: "The sweet and balanced coffee that started it all. Hair Bender is our most popular coffee with good reason – it’s a day-maker however you brew it.",
   category: "Whole Bean",
   size: "12 ounces",
   note: "Available as a subscription",
   producer: "The Story",
   producerDescription:"Named for a long-shuttered beauty parlor that housed the first Stumptown location, Hair Bender was the very first blend that Stumptown-founder Duane Sorenson introduced to the world. In fact, we still have the Hair Bender sign in our headquarters, watching over us as we roast each batch.  It’s our most popular coffee with good reason. A cup of Hair Bender has clarity and complexity; Indonesia’s rich textures are balanced by the classic flavors of Latin America and Africa. We use it at our cafes for espresso, but it’s great for all brew methods.",
   region: "",
   regionDescription: "",
   sideImage1: "",
   sideImage2: "",
   sideImage3: "",
   recommendedItem1: "Hair Bender Woodblock Chocalte Bar",
   recommendedItem2: "",
   recommendedItem3: "",
   recommendedItem1Price: "$4",
   recommendedItem2Price: "",
   recommendedItem3Price: ""},
  
  {id: 4,
   name: "12oz Guatemala El Injerto Bourbon",
   price: "$19",
   image: "coffee-guatemala-bourbon.nl",
   bgColor: "rgb(0, 63, 135)",
   description: "We're always excited to welcome back the return of this stellar coffee. This year’s lot of El Injerto Bourbon has notes of orange blossom, honey, and fresh butter. What's not to love?",
   category: "Whole Bean",
   size: "12 oz",
   producer: "Arturo Aguirre Sr. and Arturo Aguirre Jr.",
   producerDescription:"Father and son team Arturo Aguirre Sr. and Arturo Aguirre Jr. own and operate Finca El Injerto with dedication to sustaining a farming community and a meticulous approach to processing some of the highest quality coffee in Guatemala. The relationship between Stumptown and El Injerto is one of our strongest and longest. We’re proud to offer this exceptional coffee for over a decade.",
   region: "Huehuetenango",
   regionDescription: "Tucked away in the mountains of Huehuetenango not far from Guatemala’s border with Chiapas, this fourth-generation coffee farm is impressive in many ways. Since 1905, Finca El Injerto has produced exceptional coffee with a commitment to respecting and preserving the natural resources of the Huehuetenango region. More than half of the land at Injerto is a protected forest. Natural spring water is used throughout Injerto’s operations.",
   sideImage1: "",
   sideImage2: "",
   sideImage3: "",
   recommendedItem1: "Chemex Filters",
   recommendedItem2: "J Scale",
   recommendedItem3: "",
   recommendedItem1Price: "$9",
   recommendedItem2Price: "$40",
   recommendedItem3Price: ""},
  
  {id: 5,
   name: "12oz Rwanda Huye Mountain",
   price: "$17",
   image: "coffee-rwanda-huye.nl",
   bgColor: "rgb(209, 68, 20)",
   description: "One of our favorite single origin offerings has returned just in time for the holidays. This year's lot of Huye Mountain is exceptional with sweetness, clarity, and balance evident in every cup.",
   category: "Whole Bean Coffee",
   size: "12oz",
   producer: "David Rubanzangabo & Tim Schilling, Huye Mountain",
   producerDescription:"The Huye Mountain washing station is comprised of approximately 500 smallholder farmers. David Rubanzangabo, Huye’s founder, rewards each of the producer groups who deliver to the washing station with different perks from our social premium.",
   region: "South Butare, Huye District, Rwanda",
   regionDescription: "The farmers who deliver coffee to Huye Mountain washing station cultivate their Bourbon variety coffee in the mountain highlands within the Huye, Maraba, Mbazi and Kigoma sectors of the Huye District, with producer groups that represent the farmers in each sector.",
   sideImage1: "",
   sideImage2: "",
   sideImage3: "",
   recommendedItem1: "Ethiopia Duromina",
   recommendedItem2: "",
   recommendedItem3: "",
   recommendedItem1Price: "$19",
   recommendedItem2Price: "",
   recommendedItem3Price: ""},
  
  {id: 6,
   name: "East Fork Mug",
   price: "$40",
   image: "east-fork-mug.nl",
   bgColor: "rgb(31, 24, 21)",
   description: "We're delighted to welcome the beautiful ceramics of Alex Matisse and John Vigeland (aka East Fork) into the Stumptown family this holiday season. These mugs are made in the hills of North Carolina from locally-sourced materials, and their elegant design adds a touch of class to any morning. Drink up!",
   category: "Whole Bean Coffee",
   size: "12oz",
   producer: "Sip in Style",
   producerDescription:"Not only handsome, this hand-glazed mug is sturdy and easy to clean -- all of the charm of handmade pottery with none of the hassle.",
   region: "",
   regionDescription: "",
   listItem1: "Made in the North Carolina mountains from regional materials",
   listItem2: "Microwave and dishwasher safe",
   listItem3: "Glazed by hand; slight variation and movement in color and glaze application can be expected and embraced",
   sideImage1: "",
   sideImage2: "",
   sideImage3: "",
   recommendedItem1: "House Blend",
   recommendedItem2: "Chemex Filters",
   recommendedItem3: "",
   recommendedItem1Price: "$15",
   recommendedItem2Price: "$9",
   recommendedItem3Price: ""},
  
  {id: 7,
   name: "Stumptown Coffee Jar",
   price: "$15",
   image: "st-coffee-jar.nl",
   bgColor: "rgb(31, 24, 21)",
   description: "Forget the freezer. The Stumptown Coffee Jar is designed to store your coffee and look good doing it.",
   category: "Holds 12 oz coffee",
   size: "Glass with metal lid",
   producer: "Smart storage solution",
   producerDescription:"Back by popular demand! We recommend keeping your coffee whole bean (not ground) in the jar in a cool, dark place. For best results, drink within two weeks of the roast date. Limited-edition design.",
   region: "",
   regionDescription: "",
   listItem1: "Holds 12 oz coffee",
   listItem2: "Dark glass for coffee storage",
   listItem3: "Amber Glass with stainless steel lid",
   listItem4: "Limited-edition design",
   listItem5: "7 in x 3.75 in",
   sideImage1: "",
   sideImage2: "",
   sideImage3: "",
   recommendedItem1: "Camille Shu Mug",
   recommendedItem2: "Ethiopia Mordecofe",
   recommendedItem3: "Bonavite Thermal Carafe Electric Brewer",
   recommendedItem1Price: "$17",
   recommendedItem2Price: "$19",
   recommendedItem3Price: "$180"},
  
  {id: 8,
   name: "African Trio",
   price: "$38",
   image: "african-trio.nl",
   bgColor: "rgb(209, 68, 20)",
   description: "We don't like to play favorites, but let's just say, we take these home with us whenever we can.",
   category: "Three ½ lb bags",
   size: "Whole Bean Coffee",
   producer: "Tour our African lineup with three wildly different coffees in this thoughtful set.",
   producerDescription:"Each of these coffees are perennial showstoppers, and this year is no exception. They represent the best of African coffees, and that's saying something.",
   region: "Stumptown Tasting Guide",
   regionDescription: "We get asked lots of questions about how best to navigate our coffee menu and flavor notes. So here you have it!",
   listItem1: "Includes Ethiopia Duromina, Ethiopia Mordecofe, and Rwanda Huye Mountain",
   listItem2: "Gift box included",
   sideImage1: "",
   sideImage2: "",
   sideImage3: "",
   recommendedItem1: "Ethiopia Mordecofe",
   recommendedItem2: "Ethiopia Duromina",
   recommendedItem3: "Rwanda Huye Mountain",
   recommendedItem1Price: "$19",
   recommendedItem2Price: "$19",
   recommendedItem3Price: "17"},
  
  {id: 9,
   name: "Miir Camp Cup",
   price: "$26",
   image: "miiR-camp-cup.nl",
   bgColor: "rgb(31, 24, 21)",
   description: "Our favorite Northwest smell sensation is hot coffee steam, campfire smoke, and the soft crush of fir needles underfoot. Wrap a mountain around you like a blanket, take a deep breath. Sip slowly.",
   category: "Whole Bean Coffee",
   size: "12 oz",
   producer: "A modern take on the classic camp cup",
   producerDescription:"This sturdy, double-walled, stainless steel mug is built to keep your coffee hot and your hands cool. Includes press-on lid to prevent spills.",
   region: "",
   regionDescription: "",
   listItem1: "Manufactured by MiiR",
   listItem2: "Double wall vacuum insulated",
   listItem3: "Medical grade stainless steel",
   listItem4: "BPA free",
   sideImage1: "",
   sideImage2: "",
   sideImage3: "",
   recommendedItem1: "HairBender",
   recommendedItem2: "Holler Mountain",
   recommendedItem3: "House Blend",
   recommendedItem1Price: "$15",
   recommendedItem2Price: "$16",
   recommendedItem3Price: "$15"},
  
  {id: 10,
   name: "Miir Wide Moth Water Bottle",
   price: "$30",
   image: "miiR-wide-mouth.nl",
   bgColor: "rgb(31, 24, 21)",
   description: "Let your morning coffee be a cloud underfoot, sturdy walls around you, last night's dreams still fresh on your mind. Watch the fog lift while you slowly sip.",
   category: "16 ounces",
   size: "12oz",
   producer: "A modern take on the classic insulated bottle",
   producerDescription:"This sturdy, double-walled, stainless steel bottle is built to keep your coffee hot and your hands cool -- or vice versa. Includes screw-on lid to prevent spills.",
   region: "",
   regionDescription: "",
   listItem1: "Manufactured by MiiR",
   listItem2: "Double wall vacuum insulated",
   listItem3: "Medical grade stainless steel",
   listItem4: "BPA free",
   sideImage1: "",
   sideImage2: "",
   sideImage3: "",
   recommendedItem1: "Stumptown Blend Trio",
   recommendedItem2: "Guatemala El Injerto Bourbon",
   recommendedItem3: "",
   recommendedItem1Price: "$35",
   recommendedItem2Price: "$19",
   recommendedItem3Price: ""},
  
  {id: 11,
   name: "Miir Travel Tumbler",
   price: "$28",
   image: "miiR-travel-tumbler.nl",
   bgColor: "rgb(31, 24, 21)",
   description: "The sunrise shimmers on your morning cup. It feels good to be awake. You hear the world come alive beside you, see the mist drift over the lake. Stretch your legs, breathe deep. It's golden all around.",
   category: "",
   size: "12 ounces",
   producer: "Good to go",
   producerDescription:"We’ve gone through a lot of travel mugs around here, but this MiiR tumbler has quickly risen to the top of the ranks -- a great size, a streamlined silhouette, and a nearly leak-proof (but still sippable) lid have made it an easy favorite around HQ since its debut on the scene.",
   region: "",
   regionDescription: "",
   listItem1: "Manufactured by MiiR",
   listItem2: "Double wall vacuum insulated",
   listItem3: "Medical grade stainless steel",
   listItem4: "BPA free",
   sideImage1: "",
   sideImage2: "",
   sideImage3: "",
   recommendedItem1: "Chemex (Wood Handle)",
   recommendedItem2: "Chemex Filters",
   recommendedItem3: "French Roast",
   recommendedItem1Price: "$46",
   recommendedItem2Price: "$9",
   recommendedItem3Price: "$16"},
  
  {id: 12,
   name: "Miir 8oz Tumbler",
   price: "$18",
   image: "miiR-8oz-tumbler.nl",
   bgColor: "rgb(31, 24, 21)",
   description: "The heat of the sunrise wakes you up through the tent wall. Shake the sand out of your shoes, coax last night's campfire to life. Breathe in sagebrush, watch a tumbleweed roll by. Watch out for rattlesnakes while your water boils.",
   category: "",
   size: "8 oz",
   producer: "Good to go",
   producerDescription:"This sturdy, double-walled, stainless steel tumbler is built to keep your coffee hot and your hands cool -- or vice versa. Includes press-on lid to prevent spills.",
   region: "",
   regionDescription: "",
   listItem1: "Manufactured by MiiR",
   listItem2: "Double wall vacuum insulated",
   listItem3: "Medical grade stainless steel",
   listItem4: "BPA free",
   sideImage1: "",
   sideImage2: "",
   sideImage3: "",
   recommendedItem1: "Trapper Creek Decaf",
   recommendedItem2: "Bee House Pour Over",
   recommendedItem3: "Melitta Filters #4",
   recommendedItem1Price: "$16",
   recommendedItem2Price: "$18",
   recommendedItem3Price: "$5"}
]


console.log(products[2].name)
console.log(products[2].id)
console.log(products[2].sideImage1)
console.log(products[2].price)


