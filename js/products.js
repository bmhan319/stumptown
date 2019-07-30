// Objects of Products

let products = [
  {
    id: 0,
    name: "Papua New Guinea Besser",
    group: "Coffee",
    subGroup: "Asia Pacific",
    gift: false,
    price: "18",
    image: "coffee-besser.png",
    numItems: 0,
    bgColor: "rgb(31, 24, 21)",
    textColor: "#bf955a",
    description:
      "Papua New Guinea Besser is beautifully layered, with a perfect balance of sweetness and acidity. It’s a coffee that is complex, yet versatile and can be brewed any which way you prefer. Cheers.",
    category: "Whole Bean Coffee",
    size: "12oz",
    producer: "Producer: Bebes Sero",
    producerDescription:
      "Bebes Sero purchased his coffee plantation and wet mill 12 years ago, however it was originally planted in the 1960’s. Stumptown’s relationship with Bebes Sero is a fresh one, and we’re super excited to offer his coffee for the third year in a row.",
    region: "Region: Obura-Wonenara District",
    regionDescription:
      "Bebes' washing station is settled in the mountains of the Eastern Highlands, often shaded with a dense cloud cover. We were fortunate to visit Bebes in 2016. On our visit we were struck by the beautiful array of flowers that surround his coffee varieties throughout his farm.",
    listItem1: "none",
    listItem2: "none",
    listItem3: "none",
    listItem4: "none",
    listItem5: "none",
    sideImage1: "cranberry_fig.png",
    sideImage2: "none",
    sideImage3: "Papua_New_Guinea_Besser.jpg",
    bannerOn: "default-on.png",
    bannerOff: "default-off.png",
    subscription: false,
    readMore: true,
    map: "SCR-CoffeePDP-Origin_Maps_asia_pacific.jpg",
    recommendedItem1: "Milton Filter #4",
    recommendedItem2: "Bee House Pour Over",
    recommendedItem3: "Miir Travel Tumbler",
    recommendedImage1: "milton-filter.png",
    recommendedImage2: "beehouse-pourover.png",
    recommendedImage3: "miiR-travel-tumbler.nl",
    recommendedItem1Price: "$5",
    recommendedItem2Price: "$18",
    recommendedItem3Price: "$28"
  },

  {
    id: 1,
    name: "Skate Team",
    group: "Coffee",
    subGroup: "Latin America",
    gift: false,
    price: "15",
    image: "skate-team.nl",
    numItems: 0,
    bgColor: "rgb(0, 63, 135)",
    textColor: "#003f87",
    description:
      "This Colombian coffee highlights a collaboration between Stumptown and a few choice skateboarders we admire. It’s as sweet and clean as a perfectly caught kickflip over grandma’s garden hose. One dollar from the sale of this bag will go to a selection of local non-profits, chosen by our skateboarding employees.",
    category: "Whole Bean",
    size: "12 ounces",
    producer: "Skate Team",
    producerDescription:
      "Since we began partnering with Caravela, our import and export partner for this coffee, our two companies have been able to work with coffee growing communities in this remote region of Colombia to improve coffee quality, raise coffee prices paid to growers, reduce barriers to the more lucrative specialty coffee market, and in turn improve the profits and financial stability of individual farm owners. One of the major tenets of our Direct Trade coffee sourcing practices is to enter into long-term agreements with producers. This helps to ensure both a reliable supply of high-quality green coffee for us, as well as a reliable income for the producers.",
    region: "Tolima Department",
    regionDescription:
      "Nestled in the department of Tolima, beneath the shadows of the magnificent Nevado del Huila, Colombia’s highest volcano, the El Jordan group of farmers cultivate their coffee in a stunning valley with fertile, volcanic soil. The area surrounding Nevado del Huila is among the most fruitful in Colombia and provides an excellent microclimate for growing coffee.",
    listItem1: "none",
    listItem2: "none",
    listItem3: "none",
    listItem4: "none",
    listItem5: "none",
    sideImage1: "candiedapple_honey.png",
    sideImage2: "none",
    sideImage3: "El_Jordan_Producer_Page_Image_007.jpg",
    bannerOn: "latin-america-on.png",
    bannerOff: "latin-america-off.png",
    subscription: false,
    readMore: false,
    map: "SCR-CoffeePDP-Origin_Maps_latin.jpg",
    recommendedItem1: "Artist Series Mug: Chet Childress",
    recommendedItem2: "Artist Series Tote: Chet Childress",
    recommendedItem3: "none",
    recommendedImage1: "chet_mug.png",
    recommendedImage2: "chet_tote.png",
    recommendedImage3: "",
    recommendedItem1Price: "$12",
    recommendedItem2Price: "$15",
    recommendedItem3Price: ""
  },

  {
    id: 2,
    name: "Skate Team Box Set",
    group: "Coffee",
    subGroup: "Latin America",
    gift: true,
    price: "29",
    image: "skate-team-box.nl",
    numItems: 0,
    bgColor: "rgb(0, 63, 135)",
    textColor: "#003f87",
    description:
      "This Colombian coffee highlights a collaboration between Stumptown and a few choice skateboarders we admire. The beans were produced by El Jordan growers and sourced by our partners (and fellow B Corp) Caravela Coffee. It’s as sweet and clean as a perfectly caught kickflip over grandma’s garden hose. Skate Team is sweet, balanced, and extremely versatile.",
    category: "Includes All Items Shown",
    size: "",
    producer: "Radical Limited Edition Box Set",
    producerDescription:
      "In addition to twelve ounces of fine coffee beans from our partners at El Jordan, in a custom bag designed by skate team member Chet Childress, this limited edition box set features some exclusive treats for yourself and all the beloved skateboards in your life. A special sticker pack! Pinback buttons for your backpack or hoodie! A cassette copy of the soundtrack to our first-ever skate movie, Breaking the Crust! And best of all -- a full-color skate edition of our in-house zine, Bloom, including interviews with skate legends Elissa Steamer, Nick Boserio, and Silas Baxter-Neal, and more features celebrating our love of skateboarding.",
    region: "",
    regionDescription: "",
    listItem1: "none",
    listItem2: "none",
    listItem3: "none",
    listItem4: "none",
    listItem5: "none",
    sideImage1: "Eyeball.png",
    sideImage2: "none",
    sideImage3: "none",
    bannerOn: "latin-america-on.png",
    bannerOff: "latin-america-off.png",
    subscription: false,
    readMore: false,
    map: "none",
    recommendedItem1: "Skate Team Beanie",
    recommendedItem2: "none",
    recommendedItem3: "none",
    recommendedImage1: "yellow-beanie.png",
    recommendedImage2: "",
    recommendedImage3: "",
    recommendedItem1Price: "$15",
    recommendedItem2Price: "",
    recommendedItem3Price: ""
  },

  {
    id: 3,
    name: "Hair Bender",
    group: "Coffee",
    subGroup: "Blends",
    gift: false,
    price: "15",
    image: "coffee-hair-bender.nl",
    numItems: 0,
    bgColor: "rgb(81, 44, 29)",
    textColor: "#512c1d",
    description:
      "The sweet and balanced coffee that started it all. Hair Bender is our most popular coffee with good reason – it’s a day-maker however you brew it.",
    category: "Whole Bean",
    size: "12 ounces",
    note: "Available as a subscription",
    producer: "The Story",
    producerDescription:
      "Named for a long-shuttered beauty parlor that housed the first Stumptown location, Hair Bender was the very first blend that Stumptown-founder Duane Sorenson introduced to the world. In fact, we still have the Hair Bender sign in our headquarters, watching over us as we roast each batch.  It’s our most popular coffee with good reason. A cup of Hair Bender has clarity and complexity; Indonesia’s rich textures are balanced by the classic flavors of Latin America and Africa. We use it at our cafes for espresso, but it’s great for all brew methods.",
    region: "",
    regionDescription: "",
    listItem1: "none",
    listItem2: "none",
    listItem3: "none",
    listItem4: "none",
    listItem5: "none",
    sideImage1: "citrus_dchoc.png",
    sideImage2: "none",
    sideImage3: "Shop-Coffee-PDP-Essence-Hair.jpg",
    bannerOn: "blends-on.png",
    bannerOff: "blends-off.png",
    subscription: true,
    readMore: false,
    map: "Shop-Coffee-PDP-Map-Blends.jpg",
    recommendedItem1: "Hair Bender Woodblock Chocalte Bar",
    recommendedItem2: "none",
    recommendedItem3: "none",
    recommendedImage1: "woodblock-choc.png",
    recommendedImage2: "",
    recommendedImage3: "",
    recommendedItem1Price: "$4",
    recommendedItem2Price: "",
    recommendedItem3Price: ""
  },

  {
    id: 4,
    name: "Guatemala El Injerto Bourbon",
    group: "Coffee",
    subGroup: "Latin America",
    gift: false,
    price: "19",
    image: "coffee-guatemala-bourbon.nl",
    numItems: 0,
    bgColor: "rgb(0, 63, 135)",
    textColor: "#003f87",
    description:
      "We're always excited to welcome back the return of this stellar coffee. This year’s lot of El Injerto Bourbon has notes of orange blossom, honey, and fresh butter. What's not to love?",
    category: "Whole Bean",
    size: "12 oz",
    producer: "Producer: Arturo Aguirre Sr. and Arturo Aguirre Jr.",
    producerDescription:
      "Father and son team Arturo Aguirre Sr. and Arturo Aguirre Jr. own and operate Finca El Injerto with dedication to sustaining a farming community and a meticulous approach to processing some of the highest quality coffee in Guatemala. The relationship between Stumptown and El Injerto is one of our strongest and longest. We’re proud to offer this exceptional coffee for over a decade.",
    region: "Region: Huehuetenango",
    regionDescription:
      "Tucked away in the mountains of Huehuetenango not far from Guatemala’s border with Chiapas, this fourth-generation coffee farm is impressive in many ways. Since 1905, Finca El Injerto has produced exceptional coffee with a commitment to respecting and preserving the natural resources of the Huehuetenango region. More than half of the land at Injerto is a protected forest. Natural spring water is used throughout Injerto’s operations.",
    listItem1: "none",
    listItem2: "none",
    listItem3: "none",
    listItem4: "none",
    listItem5: "none",
    sideImage1: "honey_orange.png",
    sideImage2: "injertojr_sr.png",
    sideImage3:
      "Shop-Coffee-PDP-Latin-Guatemala_FincaElInjerto_Pacamara-Essence.jpg",
    bannerOn: "latin-america-on.png",
    bannerOff: "latin-america-off.png",
    subscription: false,
    readMore: true,
    map: "SCR-CoffeePDP-Origin_Maps_latin.jpg",
    recommendedItem1: "Chemex Filters",
    recommendedItem2: "J Scale",
    recommendedItem3: "none",
    recommendedImage1: "chemex-filter.png",
    recommendedImage2: "jscale.png",
    recommendedImage3: "",
    recommendedItem1Price: "$9",
    recommendedItem2Price: "$40",
    recommendedItem3Price: ""
  },

  {
    id: 5,
    name: "Rwanda Huye Mountain",
    group: "Coffee",
    subGroup: "Africa",
    gift: true,
    price: "17",
    image: "coffee-rwanda-huye.nl",
    numItems: 0,
    bgColor: "rgb(209, 68, 20)",
    textColor: "#d14414",
    description:
      "One of our favorite single origin offerings has returned just in time for the holidays. This year's lot of Huye Mountain is exceptional with sweetness, clarity, and balance evident in every cup.",
    category: "Whole Bean Coffee",
    size: "12 oz",
    producer: "Producer: David Rubanzangabo & Tim Schilling, Huye Mountain",
    producerDescription:
      "The Huye Mountain washing station is comprised of approximately 500 smallholder farmers. David Rubanzangabo, Huye’s founder, rewards each of the producer groups who deliver to the washing station with different perks from our social premium.",
    region: "Region: South Butare, Huye District, Rwanda",
    regionDescription:
      "The farmers who deliver coffee to Huye Mountain washing station cultivate their Bourbon variety coffee in the mountain highlands within the Huye, Maraba, Mbazi and Kigoma sectors of the Huye District, with producer groups that represent the farmers in each sector.",
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
    recommendedImage1: "ethiopia-duromina.png",
    recommendedImage2: "",
    recommendedImage3: "",
    recommendedItem1Price: "$19",
    recommendedItem2Price: "",
    recommendedItem3Price: ""
  },

  {
    id: 6,
    name: "East Fork Mug",
    group: "Gear",
    subGroup: "Mugs",
    gift: true,
    price: "40",
    image: "east-fork-mug.nl",
    numItems: 0,
    bgColor: "rgb(31, 24, 21)",
    textColor: "#bf955a",
    description:
      "We're delighted to welcome the beautiful ceramics of Alex Matisse and John Vigeland (aka <a href='https://eastfork.com'>East Fork</a>) into the Stumptown family this holiday season. These mugs are made in the hills of North Carolina from locally-sourced materials, and their elegant design adds a touch of class to any morning. Drink up!",
    category: "12 oz Mug",
    size: "",
    producer: "Sip in Style",
    producerDescription:
      "Not only handsome, this hand-glazed mug is sturdy and easy to clean -- all of the charm of handmade pottery with none of the hassle.",
    region: "",
    regionDescription: "",
    listItem1: "Made in the North Carolina mountains from regional materials",
    listItem2: "Microwave and dishwasher safe",
    listItem3:
      "Glazed by hand; slight variation and movement in color and glaze application can be expected and embraced",
    listItem4: "none",
    listItem5: "none",
    sideImage1: genImage(),
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
    recommendedImage1: "coffee-house.png",
    recommendedImage2: "chemex-filter.png",
    recommendedImage3: "",
    recommendedItem1Price: "$15",
    recommendedItem2Price: "$9",
    recommendedItem3Price: ""
  },

  {
    id: 7,
    name: "Stumptown Coffee Jar",
    group: "Gifts",
    subGroup: "Gifts",
    gift: true,
    price: "15",
    image: "st-coffee-jar.nl",
    numItems: 0,
    bgColor: "rgb(31, 24, 21)",
    textColor: "#bf955a",
    description:
      "Forget the freezer. The Stumptown Coffee Jar is designed to store your coffee and look good doing it.",
    category: "Holds 12 oz coffee",
    size: "Glass with metal lid",
    producer: "Smart storage solution",
    producerDescription:
      "Back by popular demand! We recommend keeping your coffee whole bean (not ground) in the jar in a cool, dark place. For best results, drink within two weeks of the roast date. Limited-edition design.",
    region: "",
    regionDescription: "",
    listItem1: "Holds 12 oz coffee",
    listItem2: "Dark glass for coffee storage",
    listItem3: "Amber Glass with stainless steel lid",
    listItem4: "Limited-edition design",
    listItem5: "7 in x 3.75 in",
    sideImage1: genImage(),
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
    recommendedImage1: "shu-mug.png",
    recommendedImage2: "coffee-ethiopia-mordecofe.png",
    recommendedImage3: "bonavita-thermal-mug.png",
    recommendedItem1Price: "$17",
    recommendedItem2Price: "$19",
    recommendedItem3Price: "$180"
  },

  {
    id: 8,
    name: "African Trio",
    group: "Coffee",
    subGroup: "Africa",
    gift: false,
    price: "38",
    image: "african-trio.nl",
    numItems: 0,
    bgColor: "rgb(209, 68, 20)",
    textColor: "#d14414",
    description:
      "We don't like to play favorites, but let's just say, we take these home with us whenever we can.",
    category: "Three ½ lb bags",
    size: "Whole Bean Coffee",
    producer:
      "Tour our African lineup with three wildly different coffees in this thoughtful set.",
    producerDescription:
      "Each of these coffees are perennial showstoppers, and this year is no exception. They represent the best of African coffees, and that's saying something.",
    region: "Stumptown Tasting Guide",
    regionDescription:
      "We get asked lots of questions about how best to navigate our coffee menu and flavor notes. So here you have it!",
    listItem1:
      "Includes Ethiopia Duromina, Ethiopia Mordecofe, Rwanda Huye Mountain",
    listItem2: "Gift box included",
    listItem3: "none",
    listItem4: "none",
    listItem5: "none",
    sideImage1: genImage(),
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
    recommendedImage1: "coffee-ethiopia-mordecofe.png",
    recommendedImage2: "ethiopia-duromina.png",
    recommendedImage3: "coffee-rwanda-huye.nl",
    recommendedItem1Price: "$19",
    recommendedItem2Price: "$19",
    recommendedItem3Price: "17"
  },

  {
    id: 9,
    name: "MiiR Camp Cup",
    group: "Gear",
    subGroup: "Mugs",
    gift: false,
    price: "26",
    image: "miiR-camp-cup.nl",
    numItems: 0,
    bgColor: "rgb(31, 24, 21)",
    textColor: "#bf955a",
    description:
      "Our favorite Northwest smell sensation is hot coffee steam, campfire smoke, and the soft crush of fir needles underfoot. Wrap a mountain around you like a blanket, take a deep breath. Sip slowly.",
    category: "",
    size: "12 ounces",
    producer: "A modern take on the classic camp cup",
    producerDescription:
      "This sturdy, double-walled, stainless steel mug is built to keep your coffee hot and your hands cool. Includes press-on lid to prevent spills.",
    region: "",
    regionDescription: "",
    listItem1: "Manufactured by MiiR",
    listItem2: "Double wall vacuum insulated",
    listItem3: "Medical grade stainless steel",
    listItem4: "BPA free",
    listItem5: "none",
    sideImage1: genImage(),
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
    recommendedImage1: "coffee-hair-bender.nl",
    recommendedImage2: "coffee-holler.png",
    recommendedImage3: "coffee-house.png",
    recommendedItem1Price: "$15",
    recommendedItem2Price: "$16",
    recommendedItem3Price: "$15"
  },

  {
    id: 10,
    name: "MiiR Wide Moth Water Bottle",
    group: "Gear",
    subGroup: "Mugs",
    gift: false,
    price: "30",
    image: "miiR-wide-mouth.nl",
    numItems: 0,
    bgColor: "rgb(31, 24, 21)",
    textColor: "#bf955a",
    description:
      "Let your morning coffee be a cloud underfoot, sturdy walls around you, last night's dreams still fresh on your mind. Watch the fog lift while you slowly sip.",
    category: "",
    size: "16 ounces",
    producer: "A modern take on the classic insulated bottle",
    producerDescription:
      "This sturdy, double-walled, stainless steel bottle is built to keep your coffee hot and your hands cool -- or vice versa. Includes screw-on lid to prevent spills.",
    region: "",
    regionDescription: "",
    listItem1: "Manufactured by MiiR",
    listItem2: "Double wall vacuum insulated",
    listItem3: "Medical grade stainless steel",
    listItem4: "BPA free",
    listItem5: "none",
    sideImage1: genImage(),
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
    recommendedImage1: "st-blend-trio.png",
    recommendedImage2: "coffee-guatemala-bourbon.nl",
    recommendedImage3: "none",
    recommendedItem1Price: "$35",
    recommendedItem2Price: "$19",
    recommendedItem3Price: ""
  },

  {
    id: 11,
    name: "MiiR Travel Tumbler",
    group: "Gear",
    subGroup: "Mugs",
    gift: false,
    price: "28",
    image: "miiR-travel-tumbler.nl",
    numItems: 0,
    bgColor: "rgb(31, 24, 21)",
    textColor: "#bf955a",
    description:
      "The sunrise shimmers on your morning cup. It feels good to be awake. You hear the world come alive beside you, see the mist drift over the lake. Stretch your legs, breathe deep. It's golden all around.",
    category: "",
    size: "12 ounces",
    producer: "Good to go",
    producerDescription:
      "We’ve gone through a lot of travel mugs around here, but this MiiR tumbler has quickly risen to the top of the ranks -- a great size, a streamlined silhouette, and a nearly leak-proof (but still sippable) lid have made it an easy favorite around HQ since its debut on the scene.",
    region: "",
    regionDescription: "",
    listItem1: "Manufactured by MiiR",
    listItem2: "Double wall vacuum insulated",
    listItem3: "Medical grade stainless steel",
    listItem4: "BPA free",
    listItem5: "none",
    sideImage1: genImage(),
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
    recommendedImage1: "chemex-wood-handle.png",
    recommendedImage2: "chemex-filter.png",
    recommendedImage3: "coffee-french-roast.png",
    recommendedItem1Price: "$46",
    recommendedItem2Price: "$9",
    recommendedItem3Price: "$16"
  },

  {
    id: 12,
    name: "MiiR 8oz Tumbler",
    group: "Gear",
    subGroup: "Mugs",
    gift: false,
    price: "18",
    image: "miiR-8oz-tumbler.nl",
    numItems: 0,
    bgColor: "rgb(31, 24, 21)",
    textColor: "#bf955a",
    description:
      "The heat of the sunrise wakes you up through the tent wall. Shake the sand out of your shoes, coax last night's campfire to life. Breathe in sagebrush, watch a tumbleweed roll by. Watch out for rattlesnakes while your water boils.",
    category: "",
    size: "8 ounces",
    producer: "Good to go",
    producerDescription:
      "This sturdy, double-walled, stainless steel tumbler is built to keep your coffee hot and your hands cool -- or vice versa. Includes press-on lid to prevent spills.",
    region: "",
    regionDescription: "",
    listItem1: "Manufactured by MiiR",
    listItem2: "Double wall vacuum insulated",
    listItem3: "Medical grade stainless steel",
    listItem4: "BPA free",
    listItem5: "none",
    sideImage1: genImage(),
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
    recommendedImage1: "coffee-trapper-decaf.png",
    recommendedImage2: "beehouse-pourover.png",
    recommendedImage3: "melitta-filters.png",
    recommendedItem1Price: "$16",
    recommendedItem2Price: "$18",
    recommendedItem3Price: "$5"
  },

  {
    id: 13,
    name: "Ethiopia Duromina",
    group: "Coffee",
    subGroup: "Africa",
    gift: false,
    price: "19",
    image: "coffee-ethiopia-duromina.png",
    numItems: 0,
    bgColor: "rgb(209, 68, 20)",
    textColor: "#d14414",
    description:
      "Hits all the high notes. A harmony of juicy stone fruit and aromatic vanilla make for an all day, every day cup.",
    category: "Direct Trade",
    size: "Whole Bean, 12 ounces",
    producer: "Producer: Duromina Cooperative",
    producerDescription:
      "Duromina, which means ‘improve their lives’ in the Afan Oromo language, was formed in 2010 by farmers who wanted to do just that. Immediately thereafter, the cooperative received a loan from the bank, constructed a wet mill, and began processing washed coffee.",
    region: "Region: Jimma Zone, Ethiopia",
    regionDescription:
      "The Duromina Cooperative sits in the highlands of the Jimma Zone of Western Ethiopia. Farmers cultivate coffee in small plots near their homes and on densely shaded hillsides. The village used to be inaccessible during the rainy season, so the cooperative worked with the government to cofund a road project and built a bridge to give them year-round access.",
    listItem1: "none",
    listItem2: "none",
    listItem3: "none",
    listItem4: "none",
    listItem5: "none",
    sideImage1: "peach_vanilla.png",
    sideImage2: "duromina_coop.png",
    sideImage3: "Ethiopia_Duromina_001.jpg",
    bannerOn: "africa-on.png",
    bannerOff: "africa-off.png",
    subscription: false,
    readMore: true,
    map: "SCR-CoffeePDP-Origin_Maps_african.jpg",
    recommendedItem1: "Chemex Wood Handle",
    recommendedItem2: "J Scale",
    recommendedItem3: "none",
    recommendedImage1: "chemex-wood-handle.png",
    recommendedImage2: "jscale.png",
    recommendedImage3: "none",
    recommendedItem1Price: "$46",
    recommendedItem2Price: "$40",
    recommendedItem3Price: ""
  },

  {
    id: 14,
    name: "Ethiopia Suke Quto Natural Process",
    group: "Coffee",
    subGroup: "Africa",
    gift: false,
    price: "18",
    image: "coffee-ethiopia-suke.png",
    numItems: 0,
    bgColor: "rgb(209, 68, 20)",
    textColor: "#d14414",
    description:
      "Suke Quto owner Tesfaye Bekele worked for the government in natural resource management for many years before becoming a coffee farmer. We're excited to offer a natural processed coffee from our long standing partner. The natural processing technique involves drying the coffee cherry on the bean, and the result is an intense and unique flavor.",
    category: "",
    size: "",
    producer: "Producer: Tesfaye Bekele",
    producerDescription:
      "Suke Quto owner Tesfaye Bekele started Suke Quto after a bushfire with the idea to grow and process environmentally-friendly coffee and help to sustain the local community with a consistent income source. His focus on ecological conservation as well as coffee quality make this relationship an inspiring one to be a part of.",
    region: "Region: Guji Region, Ethiopia",
    regionDescription:
      "Most of the farmers who bring their coffee to Suke Quto cultivate their coffee, grow vegetables and raise cattle on small farms. Set on gentle slopes between mountains and highland plateaus near the village of Kumure in the Guji Zone, the farmland has shade trees and dark brown, volcanic, loamy soil with rich nutrients.",
    listItem1: "none",
    listItem2: "none",
    listItem3: "none",
    listItem4: "none",
    listItem5: "none",
    sideImage1: "stawberry_jam__2_.png",
    sideImage2: "none",
    sideImage3: "Ethiopia_Suke_Quto_002.jpg",
    bannerOn: "africa-on.png",
    bannerOff: "africa-off.png",
    subscription: false,
    readMore: true,
    map: "SCR-CoffeePDP-Origin_Maps_african.jpg",
    recommendedItem1: "Chemex Wood Handle",
    recommendedItem2: "Ethiopia Suke Quto",
    recommendedItem3: "Rwanda Huy Mountain",
    recommendedImage1: "chemex-wood-handle.png",
    recommendedImage2: "coffee-ethiopia-suke-plain.png",
    recommendedImage3: "coffee-rwanda-huye.nl",
    recommendedItem1Price: "$46",
    recommendedItem2Price: "$18",
    recommendedItem3Price: "$17"
  },

  {
    id: 15,
    name: "Ethiopia Suke Quto",
    group: "Coffee",
    subGroup: "Africa",
    gift: false,
    price: "18",
    image: "coffee-ethiopia-suke-plain.png",
    numItems: 0,
    bgColor: "rgb(209, 68, 20)",
    textColor: "#d14414",
    description:
      "This beautiful Ethiopian cup is exceptionally crisp, with notes of sweet honey and refreshing lemon-lime. A fresh sipper, this organic coffee will brighten any day.",
    category: "Whole Bean",
    size: "12 ounces",
    producer: "Producer: Tesfaye Bekele",
    producerDescription:
      "Suke Quto owner Tesfaye Bekele started Suke Quto after a bushfire with the idea to grow and process environmentally-friendly coffee and help to sustain the local community with a consistent income source. His focus on ecological conservation as well as coffee quality make this relationship an inspiring one to be a part of.",
    region: "Region: Guji Region, Ethiopia",
    regionDescription:
      "Most of the farmers who bring their coffee to Suke Quto cultivate their coffee, grow vegetables and raise cattle on small farms. Set on gentle slopes between mountains and highland plateaus near the village of Kumure in the Guji Zone, the farmland has shade trees and dark brown, volcanic, loamy soil with rich nutrients.",
    listItem1: "none",
    listItem2: "none",
    listItem3: "none",
    listItem4: "none",
    listItem5: "none",
    sideImage1: "jasmine_candiedlime.png",
    sideImage2: "none",
    sideImage3: "Ethiopia_Suke_Quto_002.jpg",
    bannerOn: "africa-on.png",
    bannerOff: "africa-off.png",
    subscription: false,
    readMore: true,
    map: "SCR-CoffeePDP-Origin_Maps_african.jpg",
    recommendedItem1: "Melitta Filters #4",
    recommendedItem2: "none",
    recommendedItem3: "none",
    recommendedImage1: "melitta-filters.png",
    recommendedImage2: "none",
    recommendedImage3: "none",
    recommendedItem1Price: "$5",
    recommendedItem2Price: "",
    recommendedItem3Price: ""
  },

  {
    id: 17,
    name: "Stumptown Blend Trio",
    group: "Coffee",
    subGroup: "Blends",
    gift: true,
    price: "35",
    image: "blend-trio.png",
    numItems: 0,
    bgColor: "rgb(81, 44, 29)",
    textColor: "#512c1d",
    description:
      "Whether you are new to our coffee, or you’ve been with us since the ‘90s, this trio serves us up all three of our signature blends.",
    category: "Three ½ lb bags",
    size: "Gift Box",
    producer: "Hair Bender, Holler and House",
    producerDescription:
      "A tasty way to hone your palate, the Blend trio allows you to try our signature blends side by side. A great gift and intro to our coffee menu.",
    region: "",
    regionDescription: "",
    listItem1: "Includes Hair Bender, Holler Mountain and House Blend",
    listItem2: "Three ½ lb bags",
    listItem3: "Includes gift box",
    listItem4: "Good gift idea",
    listItem5: "none",
    sideImage1: genImage(),
    sideImage2: "none",
    sideImage3: "none",
    bannerOn: "blends-on.png",
    bannerOff: "blends-off.png",
    subscription: false,
    readMore: false,
    map: "none",
    recommendedItem1: "Buratza Encore Burr Ginder",
    recommendedItem2: "none",
    recommendedItem3: "none",
    recommendedImage1: "buratza-encore-burr-grinder.png",
    recommendedImage2: "none",
    recommendedImage3: "none",
    recommendedItem1Price: "$145",
    recommendedItem2Price: "",
    recommendedItem3Price: ""
  },

  {
    id: 17,
    name: "Blazers Blend",
    group: "Coffee",
    subGroup: "Blends",
    gift: false,
    price: "16",
    image: "coffee-blazers-blend.png",
    numItems: 0,
    bgColor: "rgb(81, 44, 29)",
    textColor: "#512c1d",
    description:
      "As a crew full of #RipCity die-hards, our colors don't run. This balanced and creamy blend was created as a collaboration between our roasters and the Portland Trail Blazers.",
    category: "Whole Bean",
    size: "12 ounces",
    producer: "The Story",
    producerDescription:
      "Rip City. Stumptown. We bear the nicknames of our shining city and couldn't be prouder of it. Our production floor is hung with Blazers banners, and our trucks fly Blazers flags on game day. Blazermania is part of the Stumptown DNA and we're thrilled to collaborate with our hometown team on this blend roasted just for them.*",
    region: "",
    regionDescription: "",
    listItem1: "none",
    listItem2: "none",
    listItem3: "none",
    listItem4: "none",
    listItem5: "none",
    sideImage1: "blackberry_toffee.png",
    sideImage2: "none",
    sideImage3: "Screen_Shot.jpeg",
    bannerOn: "blends-on.png",
    bannerOff: "blends-off.png",
    subscription: false,
    readMore: false,
    map: "Shop-Coffee-PDP-Map-Blends.jpg",
    recommendedItem1: "Buratza Encore Burr Ginder",
    recommendedItem2: "none",
    recommendedItem3: "none",
    recommendedImage1: "buratza-encore-burr-grinder.png",
    recommendedImage2: "none",
    recommendedImage3: "none",
    recommendedItem1Price: "$145",
    recommendedItem2Price: "",
    recommendedItem3Price: ""
  },

  {
    id: 18,
    name: "Holler Mountain",
    group: "Coffee",
    subGroup: "Blends",
    gift: false,
    price: "16",
    image: "coffee-holler.png",
    numItems: 0,
    bgColor: "rgb(81, 44, 29)",
    textColor: "#512c1d",
    description:
      "A versatile and full-bodied blend, Holler Mountain is our signature organic blend that has been with us since the beginning. A hometown favorite.",
    category: "Organic",
    size: "Whole Bean, 12 ounces",
    producer: "The Story",
    producerDescription:
      "From all over the world, the beans come to us. A cup of Holler Mountain combines chocolatey Latin American textures with the brightness of fine east African beans. It’s an incredible versatile blend.  <br><br> Although the coffee comes from all over, each of our producers has something in common: the cherry are picked at the height of ripeness and carefully processed. Clear flavors of blackberry, citrus and toffee shine through in a creamy, full body.",
    region: "",
    regionDescription: "",
    listItem1: "none",
    listItem2: "none",
    listItem3: "none",
    listItem4: "none",
    listItem5: "none",
    sideImage1: "creamy_caramel.png",
    sideImage2: "none",
    sideImage3: "Shop-Coffee-PDP-Essence-Holler.jpg",
    bannerOn: "blends-on.png",
    bannerOff: "blends-off.png",
    subscription: true,
    readMore: false,
    map: "Shop-Coffee-PDP-Map-Blends.jpg",
    recommendedItem1: "French Roast",
    recommendedItem2: "Hair Bender",
    recommendedItem3: "none",
    recommendedImage1: "coffee-french-roast.png",
    recommendedImage2: "coffee-hair-bender.nl",
    recommendedImage3: "none",
    recommendedItem1Price: "$16",
    recommendedItem2Price: "$15",
    recommendedItem3Price: ""
  },

  {
    id: 19,
    name: "House Blend",
    group: "Coffee",
    subGroup: "Blends",
    gift: false,
    price: "15",
    image: "coffee-house.png",
    numItems: 0,
    bgColor: "rgb(81, 44, 29)",
    textColor: "#512c1d",
    description:
      "Our House Blend is comprised of some of our best seasonal single origin coffees, the components rotate so we can always bring it to you at peak flavor.",
    category: "Whole Bean",
    size: "12 ounces",
    producer: "The Story",
    producerDescription:
      "Constructed with some of the world’s finest Latin American and East African coffees, this blend’s components rotate so we can always bring it to you at peak flavor.<br><br>These flavors are indeed big. You’ll taste chocolate, fruit, florals and even toasty nuts in this welcoming blend. The coffee is fully-washed, which allows layers of flavor and nuance within a balanced, sweet cup.",
    region: "",
    regionDescription: "",
    listItem1: "none",
    listItem2: "none",
    listItem3: "none",
    listItem4: "none",
    listItem5: "none",
    sideImage1: "candied_mlchoc.png",
    sideImage2: "none",
    sideImage3: "Shop-Coffee-PDP-Essence-House.jpg",
    bannerOn: "blends-on.png",
    bannerOff: "blends-off.png",
    subscription: true,
    readMore: false,
    map: "SCR-CoffeePDP-Origin_Maps_latin.jpg",
    recommendedItem1: "French Roast",
    recommendedItem2: "Hair Bender",
    recommendedItem3: "none",
    recommendedImage1: "coffee-french-roast.png",
    recommendedImage2: "coffee-hair-bender.nl",
    recommendedImage3: "none",
    recommendedItem1Price: "$16",
    recommendedItem2Price: "$15",
    recommendedItem3Price: ""
  },

  {
    id: 20,
    name: "French Roast",
    group: "Coffee",
    subGroup: "Blends",
    gift: false,
    price: "16",
    image: "coffee-french-roast.png",
    numItems: 0,
    bgColor: "rgb(81, 44, 29)",
    textColor: "#512c1d",
    description:
      "You have never tasted a dark roast quite like this. This toasty blend redefines what a dark roast can be – big and smoky, but never burnt.",
    category: "Organic",
    size: "Whole Bean, 12 ounces",
    producer: "The Story",
    producerDescription:
      "Our French Roast redefines what a dark roast can be. Toasty but never burnt, this blend brings incredibly layered flavors within a classic dark cup.<br><br>These beans are removed at the second “crack” — an audible sound the beans make when they’ve reached the maximum amount of heat that preserves flavor and lets you taste the roast itself.",
    region: "",
    regionDescription: "",
    listItem1: "none",
    listItem2: "none",
    listItem3: "none",
    listItem4: "none",
    listItem5: "none",
    sideImage1: "clove_bittersweet.png",
    sideImage2: "none",
    sideImage3: "Shop-Coffee-PDP-Essence-French.jpg",
    bannerOn: "blends-on.png",
    bannerOff: "blends-off.png",
    subscription: true,
    readMore: false,
    map: "SCR-CoffeePDP-Origin_Maps_latin.jpg",
    recommendedItem1: "Holler Mountain",
    recommendedItem2: "none",
    recommendedItem3: "none",
    recommendedImage1: "coffee-holler.png",
    recommendedImage2: "none",
    recommendedImage3: "none",
    recommendedItem1Price: "$16",
    recommendedItem2Price: "",
    recommendedItem3Price: ""
  },

  {
    id: 21,
    name: "Trapper Creek Decaf",
    group: "Coffee",
    subGroup: "Blends",
    gift: false,
    price: "16",
    image: "coffee-trapper-decaf.png",
    numItems: 0,
    bgColor: "rgb(81, 44, 29)",
    textColor: "#512c1d",
    description:
      "Finally, a decaf that holds its own. Recent updates to the organic Swiss Water decaf process have allowed for unparalleled flavor and cup quality.",
    category: "Whole Bean",
    size: "12 ounces",
    producer: "The Story",
    producerDescription:
      "We begin with meticulously sourced beans, choosing only those whose flavors and profiles can stand up to decaffeination. We make that process as gentle as possible with the Swiss Water Decaf process. Pioneered in the 1930s, this is the only certifiably organic way to remove caffeine. This process instead relies on hot water, osmosis, and an activated charcoal filter.<br><br>The result is a decaffeinated bean that still carries its own flavors and aromas; our blend brings a lightly sweet but full-bodied experience, and makes an outstanding espresso or cup of drip.",
    region: "",
    regionDescription: "",
    listItem1: "none",
    listItem2: "none",
    listItem3: "none",
    listItem4: "none",
    listItem5: "none",
    sideImage1: "driedfruit_graham.png",
    sideImage2: "none",
    sideImage3: "Shop-Coffee-PDP-Essence-Decaf.jpg",
    bannerOn: "blends-on.png",
    bannerOff: "blends-off.png",
    subscription: true,
    readMore: false,
    map: "SCR-CoffeePDP-Origin_Maps_latin.jpg",
    recommendedItem1: "Hario Skerton Ceramic Grinder",
    recommendedItem2: "Small Bodum French Press Brewer",
    recommendedItem3: "Hair Bender",
    recommendedImage1: "hario-skerton-grinder.png",
    recommendedImage2: "bodum-small-french-press.png",
    recommendedImage3: "coffee-hair-bender.nl",
    recommendedItem1Price: "$42",
    recommendedItem2Price: "$30",
    recommendedItem3Price: "$15"
  },

  {
    id: 22,
    name: "Filtron Cold Brewer",
    group: "Gear",
    subGroup: "Brewers",
    gift: false,
    price: "50",
    image: "filtron-cold-brewer.png",
    numItems: 0,
    bgColor: "rgb(31, 24, 21)",
    textColor: "#1f1815",
    description:
      "Make perfect cold brew at home. Seriously caffeinated and super delicious.",
    category: "Takes 12-24 hours",
    size: "Makes 32 oz of concentrate",
    producer: "Syrupy and sweet cup with reduced acidity.",
    producerDescription:
      "We love the Filtron because it’s easy to use, consistent and makes a big batch of cold brew concentrate. The initial brew takes 12-24 hours, but you’ll be energetically thanking yourself for it later.",
    region: "",
    regionDescription: "",
    listItem1:
      "Includes coffee / water bowl, rubber stopper, grounds guard, measuring cup, decanter, sample paper liner, wool filter pad",
    listItem2: "Concentrate lasts up to 2 weeks refrigerated and sealed",
    listItem3: "You can adjust your brew by adding more or less water to taste",
    listItem4: "Great with French Roast, Hair Bender or House Blend",
    listItem5: "none",
    sideImage1: genImage(),
    sideImage2: "none",
    sideImage3: "none",
    bannerOn: "default-on.png",
    bannerOff: "default-off.png",
    subscription: false,
    readMore: false,
    map: "none",
    recommendedItem1: "House Blend",
    recommendedItem2: "French Roast",
    recommendedItem3: "none",
    recommendedImage1: "coffee-house.png",
    recommendedImage2: "coffee-french-roast.png",
    recommendedImage3: "coffee-hair-bender.nl",
    recommendedItem1Price: "$15",
    recommendedItem2Price: "$16",
    recommendedItem3Price: ""
  },

  {
    id: 23,
    name: "Kalita Wave",
    group: "Gear",
    subGroup: "Brewers",
    gift: false,
    price: "40",
    image: "filtron-cold-brewer.png",
    numItems: 0,
    bgColor: "rgb(31, 24, 21)",
    textColor: "#1f1815",
    description:
      "With its stainless steel and wavy contours, the Kalita Wave wins over coffee and design enthusiasts alike.",
    category: "Stainless Steel Brewer",
    size: "Use with Kalita Wave filters",
    producer: "A staff favorite for home brews and camp coffee",
    producerDescription:
      "The flat-bottom filter helps with even extraction while brewing an exceptional cup. The key to mastering this brewer is the slow spiral pour – a gooseneck kettle will help you master this method.",
    region: "",
    regionDescription: "",
    listItem1: "Brews a single 10 oz cup",
    listItem2: "Flat bottom for even extraction",
    listItem3: "Dishwasher safe",
    listItem4: "Made in Japan",
    listItem5: "Size #185",
    listItem6: "Weighs 5.6 oz (160 g)",
    sideImage1: genImage(),
    sideImage2: "none",
    sideImage3: "none",
    bannerOn: "default-on.png",
    bannerOff: "default-off.png",
    subscription: false,
    readMore: false,
    map: "none",
    recommendedItem1: "Kalita Wave Filters",
    recommendedItem2: "Ethiopia Mordecofe",
    recommendedItem3: "none",
    recommendedImage1: "kalita-wave-filters.png",
    recommendedImage2: "coffee-ethiopia-mordecofe.png",
    recommendedImage3: "coffee-hair-bender.nl",
    recommendedItem1Price: "$13",
    recommendedItem2Price: "$19",
    recommendedItem3Price: ""
  },

  {
    id: 24,
    name: "Large Bodum French Press Brewer",
    group: "Gear",
    subGroup: "Brewers",
    gift: false,
    price: "50",
    image: "bodum-large-french-press.png",
    numItems: 0,
    bgColor: "rgb(31, 24, 21)",
    textColor: "#1f1815",
    description:
      "If you’re boldly going for it, this is your new best friend. You get the most of everything here–big flavor, body, and mouthfeel.",
    category: "Brews 51 oz",
    size: "Replacement Glass Available",
    producer: "Textural and thick with full body and a heavy sweetness",
    producerDescription:
      "Easy to brew and super consistent, the French Press is really reliable, brewing a textural and heavy-bodied cup in 4 minutes. Its classic and well-engineered design hasn’t changed much since its invention in the ‘50s.",
    region: "",
    regionDescription: "",
    listItem1: "51 oz/12 cup brewer",
    listItem2: "Heat-resistant borosilicate glass",
    listItem3: "Frame and lid made of chrome-plated steel",
    listItem4:
      "Stainless steel and mesh filter keeps out grounds and disassembles for cleaning",
    listItem5: "none",
    sideImage1: genImage(),
    sideImage2: "none",
    sideImage3: "none",
    bannerOn: "default-on.png",
    bannerOff: "default-off.png",
    subscription: false,
    readMore: false,
    map: "none",
    recommendedItem1: "Holler Mountain",
    recommendedItem2: "none",
    recommendedItem3: "none",
    recommendedImage1: "coffee-holler.png",
    recommendedImage2: "none",
    recommendedImage3: "none",
    recommendedItem1Price: "$16",
    recommendedItem2Price: "",
    recommendedItem3Price: ""
  }
];

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
  document.querySelector(".product-title").innerHTML = product.name;
  document.querySelector(".product-title").style.color = product.bgColor;
  document
    .querySelector(".product-image")
    .setAttribute("src", "img/" + product.image);
  document
    .querySelector(".product-image")
    .setAttribute("alt", product.size + " " + product.name);
  document.querySelector(".product-price").innerHTML = product.price;
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
    y = 0;
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
};

document.querySelector(".product-button").onmouseout = function() {
  this.style.backgroundImage = "url(img/" + product.bannerOff + ")";
  this.style.color = "#f6f5f3";
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
