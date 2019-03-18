// Objects of Products

let products = [
  {id: 0,
   name: "Papua New Guinea Besser",
   price: "18",
   image: "coffee-besser.png",
   bgColor: "rgb(31, 24, 21)",
   textColor: "#bf955a",
   description: "Papua New Guinea Besser is beautifully layered, with a perfect balance of sweetness and acidity. It’s a coffee that is complex, yet versatile and can be brewed any which way you prefer. Cheers.",
   category: "Whole Bean Coffee",
   size: "12oz",
   producer: "Producer: Bebes Sero",
   producerDescription:"Bebes Sero purchased his coffee plantation and wet mill 12 years ago, however it was originally planted in the 1960’s. Stumptown’s relationship with Bebes Sero is a fresh one, and we’re super excited to offer his coffee for the third year in a row.",
   region: "Region: Obura-Wonenara District",
   regionDescription: "Bebes' washing station is settled in the mountains of the Eastern Highlands, often shaded with a dense cloud cover. We were fortunate to visit Bebes in 2016. On our visit we were struck by the beautiful array of flowers that surround his coffee varieties throughout his farm.",
   sideImage1: "cranberry_fig.png",
   listItem1: "none",
   listItem2: "none",
   listItem3: "none",
   listItem4: "none",
   listItem5: "none",
   sideImage2: "",
   sideImage3: "Papua_New_Guinea_Besser.jpg",
   bannerOn: "default-on.png",
   bannerOff: "default-off.png",
   subscription: false,
   readMore: true,
   map: "SCR-CoffeePDP-Origin_Maps_asia_pacific.jpg",
   recommendedItem1: "Milton Filter #4",
   recommendedItem2: "Bee House Pour Over",
   recommendedItem3: "Miir Travel Tumbler",
   recommendedImage1:"milton-filter.png",
   recommendedImage2:"beehouse-pourover.png",
   recommendedImage3:"miiR-travel-tumbler.nl",
   recommendedItem1Price: "$5",
   recommendedItem2Price: "$18",
   recommendedItem3Price: "$28"},
  
  {id: 1,
   name: "Skate Team",
   price: "15",
   image: "skate-team.nl",
   bgColor: "rgb(0, 63, 135)",
   textColor: "#003f87",
   description: "This Colombian coffee highlights a collaboration between Stumptown and a few choice skateboarders we admire. It’s as sweet and clean as a perfectly caught kickflip over grandma’s garden hose. One dollar from the sale of this bag will go to a selection of local non-profits, chosen by our skateboarding employees.",
   category: "Whole Bean",
   size: "12 ounces",
   producer: "Skate Team",
   producerDescription:"Since we began partnering with Caravela, our import and export partner for this coffee, our two companies have been able to work with coffee growing communities in this remote region of Colombia to improve coffee quality, raise coffee prices paid to growers, reduce barriers to the more lucrative specialty coffee market, and in turn improve the profits and financial stability of individual farm owners. One of the major tenets of our Direct Trade coffee sourcing practices is to enter into long-term agreements with producers. This helps to ensure both a reliable supply of high-quality green coffee for us, as well as a reliable income for the producers.",
   region: "Tolima Department",
   regionDescription: "Nestled in the department of Tolima, beneath the shadows of the magnificent Nevado del Huila, Colombia’s highest volcano, the El Jordan group of farmers cultivate their coffee in a stunning valley with fertile, volcanic soil. The area surrounding Nevado del Huila is among the most fruitful in Colombia and provides an excellent microclimate for growing coffee.",
   listItem1: "none",
   listItem2: "none",
   listItem3: "none",
   listItem4: "none",
   listItem5: "none",
   sideImage1: "candiedapple_honey.png",
   sideImage2: "",
   sideImage3: "El_Jordan_Producer_Page_Image_007.jpg",
   bannerOn: "latin-america-on.png",
   bannerOff: "latin-america-off.png",
   subscription: false,
   readMore: false,
   map: "SCR-CoffeePDP-Origin_Maps_latin.jpg",
   recommendedItem1: "Artist Series Mug: Chet Childress",
   recommendedItem2: "Artist Series Tote: Chet Childress",
   recommendedItem3: "none",
   recommendedImage1:"chet_mug.png",
   recommendedImage2:"chet_tote.png",
   recommendedImage3:"",
   recommendedItem1Price: "$12",
   recommendedItem2Price: "$15",
   recommendedItem3Price: ""},
  
  {id: 2,
   name: "Skate Team Box Set",
   price: "29",
   image: "skate-team-box.nl",
   bgColor: "rgb(0, 63, 135)",
   textColor: "#003f87",
   description: "This Colombian coffee highlights a collaboration between Stumptown and a few choice skateboarders we admire. The beans were produced by El Jordan growers and sourced by our partners (and fellow B Corp) Caravela Coffee. It’s as sweet and clean as a perfectly caught kickflip over grandma’s garden hose. Skate Team is sweet, balanced, and extremely versatile.",
   category: "Includes All Items Shown",
   size: "",
   producer: "Radical Limited Edition Box Set",
   producerDescription:"In addition to twelve ounces of fine coffee beans from our partners at El Jordan, in a custom bag designed by skate team member Chet Childress, this limited edition box set features some exclusive treats for yourself and all the beloved skateboards in your life. A special sticker pack! Pinback buttons for your backpack or hoodie! A cassette copy of the soundtrack to our first-ever skate movie, Breaking the Crust! And best of all -- a full-color skate edition of our in-house zine, Bloom, including interviews with skate legends Elissa Steamer, Nick Boserio, and Silas Baxter-Neal, and more features celebrating our love of skateboarding.",
   region: "",
   regionDescription: "",
   listItem1: "none",
   listItem2: "none",
   listItem3: "none",
   listItem4: "none",
   listItem5: "none",
   sideImage1: "Eyeball.png",
   sideImage2: "",
   sideImage3: "none",
   bannerOn: "latin-america-on.png",
   bannerOff: "latin-america-off.png",
   subscription: false,
   readMore: false,
   map: "none",
   recommendedItem1: "Skate Team Beanie",
   recommendedItem2: "none",
   recommendedItem3: "none",
   recommendedImage1:"yellow-beanie.png",
   recommendedImage2:"",
   recommendedImage3:"",
   recommendedItem1Price: "$15",
   recommendedItem2Price: "",
   recommendedItem3Price: ""},
  
  {id: 3,
   name: "Hair Bender",
   price: "15",
   image: "coffee-hair-bender.nl",
   bgColor: "rgb(81, 44, 29)",
   textColor: "#512c1d",
   description: "The sweet and balanced coffee that started it all. Hair Bender is our most popular coffee with good reason – it’s a day-maker however you brew it.",
   category: "Whole Bean",
   size: "12 ounces",
   note: "Available as a subscription",
   producer: "The Story",
   producerDescription:"Named for a long-shuttered beauty parlor that housed the first Stumptown location, Hair Bender was the very first blend that Stumptown-founder Duane Sorenson introduced to the world. In fact, we still have the Hair Bender sign in our headquarters, watching over us as we roast each batch.  It’s our most popular coffee with good reason. A cup of Hair Bender has clarity and complexity; Indonesia’s rich textures are balanced by the classic flavors of Latin America and Africa. We use it at our cafes for espresso, but it’s great for all brew methods.",
   region: "",
   regionDescription: "",
   listItem1: "none",
   listItem2: "none",
   listItem3: "none",
   listItem4: "none",
   listItem5: "none",
   sideImage1: "citrus_dchoc.png",
   sideImage2: "",
   sideImage3: "Shop-Coffee-PDP-Essence-Hair.jpg",
   bannerOn: "blends-on.png",
   bannerOff: "blends-off.png",
   subscription: true,
   readMore: false,
   map: "Shop-Coffee-PDP-Map-Blends.jpg",
   recommendedItem1: "Hair Bender Woodblock Chocalte Bar",
   recommendedItem2: "none",
   recommendedItem3: "none",
   recommendedImage1:"woodblock-choc.png",
   recommendedImage2:"",
   recommendedImage3:"",
   recommendedItem1Price: "$4",
   recommendedItem2Price: "",
   recommendedItem3Price: ""},
  
  {id: 4,
   name: "Guatemala El Injerto Bourbon",
   price: "19",
   image: "coffee-guatemala-bourbon.nl",
   bgColor: "rgb(0, 63, 135)",
   textColor: "#003f87",
   description: "We're always excited to welcome back the return of this stellar coffee. This year’s lot of El Injerto Bourbon has notes of orange blossom, honey, and fresh butter. What's not to love?",
   category: "Whole Bean",
   size: "12 oz",
   producer: "Producer: Arturo Aguirre Sr. and Arturo Aguirre Jr.",
   producerDescription:"Father and son team Arturo Aguirre Sr. and Arturo Aguirre Jr. own and operate Finca El Injerto with dedication to sustaining a farming community and a meticulous approach to processing some of the highest quality coffee in Guatemala. The relationship between Stumptown and El Injerto is one of our strongest and longest. We’re proud to offer this exceptional coffee for over a decade.",
   region: "Region: Huehuetenango",
   regionDescription: "Tucked away in the mountains of Huehuetenango not far from Guatemala’s border with Chiapas, this fourth-generation coffee farm is impressive in many ways. Since 1905, Finca El Injerto has produced exceptional coffee with a commitment to respecting and preserving the natural resources of the Huehuetenango region. More than half of the land at Injerto is a protected forest. Natural spring water is used throughout Injerto’s operations.",
   listItem1: "none",
   listItem2: "none",
   listItem3: "none",
   listItem4: "none",
   listItem5: "none",
   sideImage1: "honey_orange.png",
   sideImage2: "injertojr_sr.png",
   sideImage3: "Shop-Coffee-PDP-Latin-Guatemala_FincaElInjerto_Pacamara-Essence.jpg",
   bannerOn: "latin-america-on.png",
   bannerOff: "latin-america-off.png",
   subscription: false,
   readMore: true,
   map: "SCR-CoffeePDP-Origin_Maps_latin.jpg",
   recommendedItem1: "Chemex Filters",
   recommendedItem2: "J Scale",
   recommendedItem3: "none",
   recommendedImage1:"chemex-filter.png",
   recommendedImage2:"jscale.png",
   recommendedImage3:"",
   recommendedItem1Price: "$9",
   recommendedItem2Price: "$40",
   recommendedItem3Price: ""},
  
  {id: 5,
   name: "Rwanda Huye Mountain",
   price: "17",
   image: "coffee-rwanda-huye.nl",
   bgColor: "rgb(209, 68, 20)",
   textColor: "#d14414",
   description: "One of our favorite single origin offerings has returned just in time for the holidays. This year's lot of Huye Mountain is exceptional with sweetness, clarity, and balance evident in every cup.",
   category: "Whole Bean Coffee",
   size: "12 oz",
   producer: "Producer: David Rubanzangabo & Tim Schilling, Huye Mountain",
   producerDescription:"The Huye Mountain washing station is comprised of approximately 500 smallholder farmers. David Rubanzangabo, Huye’s founder, rewards each of the producer groups who deliver to the washing station with different perks from our social premium.",
   region: "Region: South Butare, Huye District, Rwanda",
   regionDescription: "The farmers who deliver coffee to Huye Mountain washing station cultivate their Bourbon variety coffee in the mountain highlands within the Huye, Maraba, Mbazi and Kigoma sectors of the Huye District, with producer groups that represent the farmers in each sector.",
   listItem1: "none",
   listItem2: "none",
   listItem3: "none",
   listItem4: "none",
   listItem5: "none",
   sideImage1: "melon_honeysuckle.png",
   sideImage2: "huye.png",
   sideImage3: "Shop-Coffee-PDP-African-Rwanda_HuyeMountain-Essence.jpg",
   bannerOn: "africa-on.png",
   bannerOff: "africa-off.png",
   subscription: false,
   readMore: true,
   map: "SCR-CoffeePDP-Origin_Maps_african.jpg",
   recommendedItem1: "Ethiopia Duromina",
   recommendedItem2: "none",
   recommendedItem3: "none",
   recommendedImage1:"ethiopia-duromina.png",
   recommendedImage2:"",
   recommendedImage3:"",
   recommendedItem1Price: "$19",
   recommendedItem2Price: "",
   recommendedItem3Price: ""},
  
  {id: 6,
   name: "East Fork Mug",
   price: "40",
   image: "east-fork-mug.nl",
   bgColor: "rgb(31, 24, 21)",
   textColor: "#bf955a",
   description: "We're delighted to welcome the beautiful ceramics of Alex Matisse and John Vigeland (aka <a href='https://eastfork.com'>East Fork</a>) into the Stumptown family this holiday season. These mugs are made in the hills of North Carolina from locally-sourced materials, and their elegant design adds a touch of class to any morning. Drink up!",
   category: "12 oz Mug",
   size: "",
   producer: "Sip in Style",
   producerDescription:"Not only handsome, this hand-glazed mug is sturdy and easy to clean -- all of the charm of handmade pottery with none of the hassle.",
   region: "",
   regionDescription: "",
   listItem1: "Made in the North Carolina mountains from regional materials",
   listItem2: "Microwave and dishwasher safe",
   listItem3: "Glazed by hand; slight variation and movement in color and glaze application can be expected and embraced",
   listItem4: "none",
   listItem5: "none",
   sideImage1: "sip-in-style.jpg",
   sideImage2: "none",
   sideImage3: "none",
   bannerOn: "default-on.png",
   bannerOff: "default-off.png",
   subscription: false,
   readMore: false,
   map: "none",
   recommendedItem1: "House Blend",
   recommendedItem2: "Chemex Filters",
   recommendedItem3: "none",
   recommendedImage1:"coffee-house.png",
   recommendedImage2:"chemex-filter.png",
   recommendedImage3:"",
   recommendedItem1Price: "$15",
   recommendedItem2Price: "$9",
   recommendedItem3Price: ""},
  
  {id: 7,
   name: "Stumptown Coffee Jar",
   price: "15",
   image: "st-coffee-jar.nl",
   bgColor: "rgb(31, 24, 21)",
   textColor: "#bf955a",
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
   sideImage1: "bear-trap.jpg",
   sideImage2: "none",
   sideImage3: "none",
   bannerOn: "default-on.png",
   bannerOff: "default-off.png",
   subscription: false,
   readMore: false,
   map: "none",
   recommendedItem1: "Camille Shu Mug",
   recommendedItem2: "Ethiopia Mordecofe",
   recommendedItem3: "Bonavite Thermal Carafe Electric Brewer",
   recommendedImage1:"shu-mug.png",
   recommendedImage2:"coffee-ethiopia-mordecofe.png",
   recommendedImage3:"bonavita-thermal-mug.png",
   recommendedItem1Price: "$17",
   recommendedItem2Price: "$19",
   recommendedItem3Price: "$180"},
  
  {id: 8,
   name: "African Trio",
   price: "38",
   image: "african-trio.nl",
   bgColor: "rgb(209, 68, 20)",
   textColor: "#d14414",
   description: "We don't like to play favorites, but let's just say, we take these home with us whenever we can.",
   category: "Three ½ lb bags",
   size: "Whole Bean Coffee",
   producer: "Tour our African lineup with three wildly different coffees in this thoughtful set.",
   producerDescription:"Each of these coffees are perennial showstoppers, and this year is no exception. They represent the best of African coffees, and that's saying something.",
   region: "Stumptown Tasting Guide",
   regionDescription: "We get asked lots of questions about how best to navigate our coffee menu and flavor notes. So here you have it!",
   listItem1: "Includes<a href='#'>Ethiopia Duromina</a>,<a href='#'>Ethiopia Mordecofe</a>,and<a href='#'>Rwanda Huye Mountain</a>",
   listItem2: "Gift box included",
   listItem3: "none",
   listItem4: "none",
   listItem5: "none",
   sideImage1: "st-tiger.jpg",
   sideImage2: "none",
   sideImage3: "none",
   bannerOn: "africa-on.png",
   bannerOff: "africa-off.png",
   subscription: false,
   readMore: false,
   map: "none",
   recommendedItem1: "Ethiopia Mordecofe",
   recommendedItem2: "Ethiopia Duromina",
   recommendedItem3: "Rwanda Huye Mountain",
   recommendedImage1:"coffee-ethiopia-mordecofe.png",
   recommendedImage2:"ethiopia-duromina.png",
   recommendedImage3:"coffee-rwanda-huye.nl",
   recommendedItem1Price: "$19",
   recommendedItem2Price: "$19",
   recommendedItem3Price: "17"},
  
  {id: 9,
   name: "MiiR Camp Cup",
   price: "26",
   image: "miiR-camp-cup.nl",
   bgColor: "rgb(31, 24, 21)",
   textColor: "#bf955a",
   description: "Our favorite Northwest smell sensation is hot coffee steam, campfire smoke, and the soft crush of fir needles underfoot. Wrap a mountain around you like a blanket, take a deep breath. Sip slowly.",
   category: "",
   size: "12 ounces",
   producer: "A modern take on the classic camp cup",
   producerDescription:"This sturdy, double-walled, stainless steel mug is built to keep your coffee hot and your hands cool. Includes press-on lid to prevent spills.",
   region: "",
   regionDescription: "",
   listItem1: "Manufactured by MiiR",
   listItem2: "Double wall vacuum insulated",
   listItem3: "Medical grade stainless steel",
   listItem4: "BPA free",
   listItem5: "none",
   sideImage1: "st-tiger.jpg",
   sideImage2: "none",
   sideImage3: "none",
   bannerOn: "default-on.png",
   bannerOff: "default-off.png",
   subscription: false,
   readMore: false,
   map: "none",
   recommendedItem1: "HairBender",
   recommendedItem2: "Holler Mountain",
   recommendedItem3: "House Blend",
   recommendedImage1:"coffee-hair-bender.nl",
   recommendedImage2:"coffee-holler.png",
   recommendedImage3:"coffee-house.png",
   recommendedItem1Price: "$15",
   recommendedItem2Price: "$16",
   recommendedItem3Price: "$15"},
  
  {id: 10,
   name: "MiiR Wide Moth Water Bottle",
   price: "30",
   image: "miiR-wide-mouth.nl",
   bgColor: "rgb(31, 24, 21)",
   textColor: "#bf955a",
   description: "Let your morning coffee be a cloud underfoot, sturdy walls around you, last night's dreams still fresh on your mind. Watch the fog lift while you slowly sip.",
   category: "",
   size: "16 ounces",
   producer: "A modern take on the classic insulated bottle",
   producerDescription:"This sturdy, double-walled, stainless steel bottle is built to keep your coffee hot and your hands cool -- or vice versa. Includes screw-on lid to prevent spills.",
   region: "",
   regionDescription: "",
   listItem1: "Manufactured by MiiR",
   listItem2: "Double wall vacuum insulated",
   listItem3: "Medical grade stainless steel",
   listItem4: "BPA free",
   listItem5: "none",
   sideImage1: "st-coffe-roaster.jpg",
   sideImage2: "none",
   sideImage3: "none",
   bannerOn: "default-on.png",
   bannerOff: "default-off.png",
   subscription: false,
   readMore: false,
   map: "none",
   recommendedItem1: "Stumptown Blend Trio",
   recommendedItem2: "Guatemala El Injerto Bourbon",
   recommendedItem3: "none",
   recommendedImage1:"st-blend-trio.png",
   recommendedImage2:"coffee-guatemala-bourbon.nl",
   recommendedImage3:"none",
   recommendedItem1Price: "$35",
   recommendedItem2Price: "$19",
   recommendedItem3Price: ""},
  
  {id: 11,
   name: "MiiR Travel Tumbler",
   price: "28",
   image: "miiR-travel-tumbler.nl",
   bgColor: "rgb(31, 24, 21)",
   textColor: "#bf955a",
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
   listItem5: "none",
   sideImage1: "bear-trap.jpg",
   sideImage2: "none",
   sideImage3: "none",
   bannerOn: "default-on.png",
   bannerOff: "default-off.png",
   subscription: false,
   readMore: false,
   map: "none",
   recommendedItem1: "Chemex (Wood Handle)",
   recommendedItem2: "Chemex Filters",
   recommendedItem3: "French Roast",
   recommendedImage1:"chemex-wood-handle.png",
   recommendedImage2:"chemex-filter.png",
   recommendedImage3:"coffee-french-roast.png",
   recommendedItem1Price: "$46",
   recommendedItem2Price: "$9",
   recommendedItem3Price: "$16"},
  
  {id: 12,
   name: "MiiR 8oz Tumbler",
   price: "18",
   image: "miiR-8oz-tumbler.nl",
   bgColor: "rgb(31, 24, 21)",
   textColor: "#bf955a",
   description: "The heat of the sunrise wakes you up through the tent wall. Shake the sand out of your shoes, coax last night's campfire to life. Breathe in sagebrush, watch a tumbleweed roll by. Watch out for rattlesnakes while your water boils.",
   category: "",
   size: "8 ounces",
   producer: "Good to go",
   producerDescription:"This sturdy, double-walled, stainless steel tumbler is built to keep your coffee hot and your hands cool -- or vice versa. Includes press-on lid to prevent spills.",
   region: "",
   regionDescription: "",
   listItem1: "Manufactured by MiiR",
   listItem2: "Double wall vacuum insulated",
   listItem3: "Medical grade stainless steel",
   listItem4: "BPA free",
   listItem5: "none",
   sideImage1: "st-rowboat.jpg",
   sideImage2: "none",
   sideImage3: "none",
   bannerOn: "default-on.png",
   bannerOff: "default-off.png",
   subscription: false,
   readMore: false,
   map: "none",
   recommendedItem1: "Trapper Creek Decaf",
   recommendedItem2: "Bee House Pour Over",
   recommendedItem3: "Melitta Filters #4",
   recommendedImage1:"coffee-trapper-decaf.png",
   recommendedImage2:"beehouse-pourover.png",
   recommendedImage3:"melitta-filters.png",
   recommendedItem1Price: "$16",
   recommendedItem2Price: "$18",
   recommendedItem3Price: "$5"}
]

let product = products[1]
window.onload = function(){
  
  document.querySelector("#counterNum").innerHTML = localStorage.getItem("cartCounter")
  document.querySelector(".product-title").innerHTML = product.name
  document.querySelector(".product-title").style.color = product.bgColor
  document.querySelector(".product-image").setAttribute("src", "img/" + product.image)
  document.querySelector(".product-image").setAttribute("alt", product.size + " " + product.name)
  document.querySelector(".product-price").innerHTML = product.price
  document.querySelector(".product-price").style.color = product.bgColor
  document.querySelector(".product-description").innerHTML = product.description
  document.querySelector(".product-type").innerHTML = product.category
  document.querySelector(".product-size").innerHTML = product.size
  document.querySelector(".producer").innerHTML = product.producer
  document.querySelector(".prod-descrip").innerHTML = product.producerDescription
  document.querySelector(".region").innerHTML = product.region
  document.querySelector(".region-descrip").innerHTML = product.regionDescription
  document.querySelector(".product-button").style.backgroundImage = "url(img/" + product.bannerOff + ")"
  document.querySelector(".illustration1").style.backgroundImage = "url(img/" + product.sideImage1 + ")"
  document.querySelector(".illustration2").style.backgroundImage = "url(img/" + product.sideImage2 + ")"
  document.querySelector(".map").setAttribute("src", "img/" + product.map )
  document.querySelector(".map").setAttribute("alt", product.map )
  document.querySelector(".location-image").setAttribute("src", "img/" + product.sideImage3 )
  document.querySelector(".location-image").setAttribute("alt", product.sideImage3 )
  document.querySelector(".recommend-name1").innerHTML = product.recommendedItem1
  document.querySelector(".recommend-name2").innerHTML = product.recommendedItem2
  document.querySelector(".recommend-name3").innerHTML = product.recommendedItem3
  document.querySelector(".recommend-price1").innerHTML = product.recommendedItem1Price
  document.querySelector(".recommend-price2").innerHTML = product.recommendedItem2Price
  document.querySelector(".recommend-price3").innerHTML = product.recommendedItem3Price
  document.querySelector(".recommend-image1").setAttribute("src", "img/" + product.recommendedImage1 )
  document.querySelector(".recommend-image1").setAttribute("alt", product.recommendedItem1 )
  document.querySelector(".recommend-image2").setAttribute("src", "img/" + product.recommendedImage2 )
  document.querySelector(".recommend-image2").setAttribute("alt", product.recommendedItem2 )
  document.querySelector(".recommend-image3").setAttribute("src", "img/" + product.recommendedImage3 )
  document.querySelector(".recommend-image3").setAttribute("alt", product.recommendedItem3 )
  
  if (product.sideImage2 == "none") {
    document.querySelector(".illustration2").style.display = "none"
  }
  
  if (product.subscription == false) {
    document.querySelector(".product-subscription").style.display = "none"
  } else {
    document.querySelector(".product-subscription").innerHTML = "Available as a subscription"
  }
  
  if (product.recommendedItem3 == "none") {
    document.querySelector(".recommend-row2-col1").style.width = "50%"
    document.querySelector(".recommend-row2-col2").style.width = "50%"
    document.querySelector(".recommend-row2-col3").style.display = "none"
    document.querySelector(".recommend-row3-col1").style.width = "50%"
    document.querySelector(".recommend-row3-col2").style.width = "50%"
    document.querySelector(".recommend-row3-col3").style.display = "none"
  } 
  
  if (product.recommendedItem2 == "none" && product.recommendedItem3 == "none") {
    document.querySelector(".recommend-row2-col1").style.width = "100%"
    document.querySelector(".recommend-row2-col2").style.display = "none"
    document.querySelector(".recommend-row2-col3").style.display = "none"
    document.querySelector(".recommend-row3-col1").style.width = "100%"
    document.querySelector(".recommend-row3-col2").style.display = "none"
    document.querySelector(".recommend-row3-col3").style.display = "none"
  }
  
  if (product.readMore == false) {
    document.querySelector(".read-more").style.display = "none"
    
  }
  
  if (product.map == "none") {
    document.querySelector(".map-container").style.display = "none"
  }
  
  if (product.sideImage3 == "none") {
    document.querySelector(".location-image").style.display = "none"
  }
  
  if (product.listItem1 !== "none" ) {
    document.querySelector(".prod-list").style.display = "block"
    
    if (product.listItem2 == "none") {
      document.querySelector(".prod-list").innerHTML = "<li>" + product.listItem1 + "</li>"
    } else if (product.listItem3 == "none") {
      document.querySelector(".prod-list").innerHTML = "<li>" + product.listItem1 + "</li><li>" + product.listItem2 + "</li>"
    } else if (product.listItem4 == "none") {
      document.querySelector(".prod-list").innerHTML = "<li>" + product.listItem1 + "</li><li>" + product.listItem2 + "</li><li>" + product.listItem3 + "</li>"      
    } else if (product.listItem5 == "none") {
      document.querySelector(".prod-list").innerHTML = "<li>" + product.listItem1 + "</li><li>" + product.listItem2 + "</li><li>" + product.listItem3 + "</li><li>" + product.listItem4 + "</li>"
    } else {
      document.querySelector(".prod-list").innerHTML = "<li>" + product.listItem1 + "</li><li>" + product.listItem2 + "</li><li>" + product.listItem3 + "</li><li>" + product.listItem4 + "</li><li>" + product.listItem5 + "</li>"
    } 
  } else {
    document.querySelector(".prod-list").style.display = "none"
  }
  
}

//Hover State of "Add to Cart" Button
document.querySelector(".product-button").onmouseover = function() {
  this.style.backgroundImage = "url(img/" + product.bannerOn + ")"
  this.style.color = product.textColor
  }

document.querySelector(".product-button").onmouseout = function() {
  this.style.backgroundImage = "url(img/" + product.bannerOff + ")"
  this.style.color = "#f6f5f3"
  }