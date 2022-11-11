//Sound from Zapsplat.com
let build = new Audio("/SOUNDS/building.mp3");
let onloadMusic = new Audio("/SOUNDS/onload.mp3");
let bgm1 = new Audio("/SOUNDS/bgm.mp3");
let bgm2 = new Audio("/SOUNDS/bgm 2.mp3");
let bgm3 = new Audio("/SOUNDS/bgm 3.mp3");

onloadMusic.play();

//getting values from html
const cityLayout = document.querySelector(".city-layout"); //the playfield
const usernameTag = document.querySelector(".username");
const shopBtn = document.querySelector(".fa-shop");

//Get user information
let username = localStorage.getItem("username");
usernameTag.innerHTML = "Hello " + username + "!";

let level = Number(localStorage.getItem("level"));
let greenpoints = Number(localStorage.getItem("greenpoints")); //LEAF STICKERS
let favor = Number(localStorage.getItem("favor")); //SUS POINTS
let levelProgress = Number(localStorage.getItem("levelProgress")); //PROGRESS BAR FOR LEVELLING UP

//SHOP ITEMS
let blimpBought = localStorage.getItem("blimpBought");
let PineappleManBought = localStorage.getItem("PineappleManBought");
let alienBought = localStorage.getItem("alienBought");
let floatBought = localStorage.getItem("floatBought");
let graffitiBought = localStorage.getItem("graffitiBought");
let umbrellasBought = localStorage.getItem("umbrellasBought");
let windowBought = localStorage.getItem("windowBought");

// Get development level information from user
let roadLevel = Number(localStorage.getItem("roadLevel"));
let factoryLevel = Number(localStorage.getItem("factoryLevel"));
let parkLevel = Number(localStorage.getItem("parkLevel"));
let officesLevel = Number(localStorage.getItem("officesLevel"));
let landfillLevel = Number(localStorage.getItem("landfillLevel"));
let coastLevel = Number(localStorage.getItem("coastLevel"));
let gasstationLevel = Number(localStorage.getItem("gasstationLevel"));

function imageOverlay(imageSource, imageElement) {
  imageElement.src = imageSource; //source of image
  cityLayout.appendChild(imageElement);
  imageElement.classList.add("overlay-image");
}

function updateOverlay() {
  //DISPLAY BLIMP OVERLAY IMAGES
  if (blimpBought == "true") {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/SHOP-BLIMP.png",
      document.createElement("img")
    );
  }
  //DISPLAY PINEAPPLE MAN OVERLAY IMAGES
  if (PineappleManBought == "true") {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/SHOP-PINEAPPLE-MAN.png",
      document.createElement("img")
    );
  }
  //DISPLAY PINEAPPLE MAN OVERLAY IMAGES
  if (windowBought == "true") {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/SHOP-WINDOW.png",
      document.createElement("img")
    );
  }
  //DISPLAY PINEAPPLE MAN OVERLAY IMAGES
  if (alienBought == "true") {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/SHOP-ALIEN.png",
      document.createElement("img")
    );
  }
  //DISPLAY PINEAPPLE MAN OVERLAY IMAGES
  if (floatBought == "true") {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/SHOP-FLOATIE.png",
      document.createElement("img")
    );
  }
  //DISPLAY PINEAPPLE MAN OVERLAY IMAGES
  if (graffitiBought == "true") {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/SHOP-GRAFFITI.png",
      document.createElement("img")
    );
  }
  //DISPLAY PINEAPPLE MAN OVERLAY IMAGES
  if (umbrellasBought == "true") {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/SHOP-UMBRELLAS.png",
      document.createElement("img")
    );
  }
  //DISPLAYING ROAD OVERLAY IMAGES UPON LOADING
  if (roadLevel > 2) {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/DEV-COAST-1.png",
      document.createElement("img")
    );
  }
  if (roadLevel > 3) {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/DEV-ROAD-2.png",
      document.createElement("img")
    );
  }
  //DISPLAYING FACTORY OVERLAY IMAGES UPON LOADING
  if (factoryLevel > 2) {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/DEV-FACTORY-1.png",
      document.createElement("img")
    );
  }
  if (factoryLevel > 3) {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/DEV-FACTORY-2.png",
      document.createElement("img")
    );
  }
  //DISPLAYING OFFICES OVERLAY IMAGES UPON LOADING
  if (officesLevel > 2) {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/DEV-OFFICES-1.png",
      document.createElement("img")
    );
  }
  if (officesLevel > 3) {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/DEV-OFFICES-2.png",
      document.createElement("img")
    );
  }
  //DISPLAYING COAST OVERLAY IMAGES UPON LOADING
  if (coastLevel > 2) {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/DEV-COAST-1.png",
      document.createElement("img")
    );
  }
  if (coastLevel > 3) {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/DEV-COAST-2.png",
      document.createElement("img")
    );
  }
  //DISPLAYING LANDFILL OVERLAY IMAGES UPON LOADING
  if (landfillLevel > 2) {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/DEV-LANDFILL-1.png",
      document.createElement("img")
    );
  }
  if (landfillLevel > 3) {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/DEV-LANDFILL-2.png",
      document.createElement("img")
    );
  }
  //DISPLAYING GAS STATION OVERLAY IMAGES UPON LOADING
  if (gasstationLevel > 2) {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/DEV-GAS STATION-1.png",
      document.createElement("img")
    );
  }
  if (gasstationLevel > 3) {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/DEV-GAS STATION-2.png",
      document.createElement("img")
    );
  }
  //DISPLAYING PARK OVERLAY IMAGES UPON LOADING
  if (parkLevel > 2) {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/PARK-stage 1.png",
      document.createElement("img")
    );
  }
  if (parkLevel > 3) {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/PARK-stage 2.png",
      document.createElement("img")
    );
  }
  if (parkLevel >= 4) {
    imageOverlay(
      "/DEVELOPMENT-PROJ-SERVE/PARK-stage 3.png",
      document.createElement("img")
    );
  }
}

class Dialogue {
  constructor(character, dialogueContent) {
    this.character = character;
    this.dialogueContent = dialogueContent;
  }

  //Method to create a dialogue in the terminal
  createTextInTerminal() {
    let dialogue = document.createElement("p");
    dialogue.textContent = this.dialogueContent;
    if (this.character == "CAS") {
      dialogue.style.color = "#44dcfa";
    } else if (this.character == "POL") {
      dialogue.style.color = "red";
    } else if (this.character == "QUESTION") {
      dialogue.style.color = "yellow";
    } else {
      console.log(
        "Error: Character is wrongly defined. It must either be CAS or POL"
      );
    }
    setTimeout(function () {
      terminalResultsCont.append(dialogue);
      terminalResultWrapper.scrollTop =
        terminalResultWrapper.scrollHeight - terminalResultWrapper.clientHeight; //MOVES THE TEXT UP
    }, 200);
  }
}

function sayText(theTextContent, character) {
  let newDialogue = new Dialogue(character, theTextContent);
  newDialogue.createTextInTerminal();
}

//questions stuff
class Question {
  constructor(question, option1, option2, option3, option4, correctanswer) {
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.correctanswer = correctanswer;
  }
}

const arrayOfQuestions = [
  //Questions
  new Question(
    "Which of the following is not a Transport Node?",
    "Bus interchange",
    "MRT Station",
    "Roads",
    "Shipping Port",
    3
  ),

  //new question
  new Question(
    "Which of the following is a Transport Route?",
    "Home",
    "Airport",
    "Ocean",
    "Carparks",
    3
  ),

  //new question
  new Question(
    "What is the Purpose of Transportation?",
    "Allow mobility for commuters",
    "Allow accessibility for commuters",
    "Provide Opportunities for Economic Purposes",
    "All of the above",
    4
  ),

  //new question
  new Question(
    "What problems does Singapore face?",
    "Scarcity of Land",
    "Lack of Economic Opportunities",
    "Decreasing Population",
    "Water Shortages",
    1
  ),

  //new question
  new Question(
    "What is Mobility?",
    "Speed of Movement from one place to another",
    "Type of Movement from one place to another",
    "Efficiency of Movement from one place to another",
    "All of the above",
    2
  ),

  //new question
  new Question(
    "What is Accessibility?",
    "Movement of People, Goods and Services",
    "Movement of Goods and Services",
    "Ease of Movement of Goods and Services",
    "Ease of Movement of People, Goods and Services",
    4
  ),

  //new question
  new Question(
    "What is Transport Network Density?",
    "area coverage of transport system / length of distance travelled VS length of routes/nodes",
    "area coverage of transport system / length of distance travelled VS no. of routes / nodes",
    "area coverage of transport system / length of routes/nodes VS length of distance travelled",
    "area coverage of transport system / no. of routes/nodes VS length of distance travelled",
    2
  ),

  //new question
  new Question(
    "What is an advantage of Intermodal Transport over Unimodal Transport?",
    "Shorter travel time for indirect destinations",
    "Shorter travel time for direct destinations",
    "Lower Cost",
    "Faster speed of vehicles",
    1
  ),

  //new question
  new Question(
    "Which of the following are factors affecting Transport Infrastructure?",
    "Reliability",
    "Frequency",
    "Capacity",
    "All of the above",
    4
  ),

  //new question
  new Question(
    "Which of the following shows the disadvantages of a city with poor public transport networks?",
    "Traffic Congestion",
    "Increased Carbon Footprint",
    "Insufficient Vehicle Fleets",
    "All of the above",
    4
  ),

  //new question
  new Question(
    "Which of the following is true?",
    "birth rate < death rate = population increase",
    "immigration = Emigration = net population growth",
    "birth rate > death rate = population decrease",
    "immigration > Emigration = population decrease",
    2
  ),

  //new question
  new Question(
    "City A has a large population density, which means…",
    "there is a small population occupying a large area",
    "there is a large population occupying a small area",
    "there is a small population occupying a small area",
    "there is a large population occupying a large area",
    2
  ),

  //new question
  new Question(
    "What does the CBD stand for?",
    "Central Buyers District",
    "Collective Businessmen Dictatorship",
    "Central Business District",
    "Central Bollywood District",
    3
  ),

  //new question
  new Question(
    "What is required for the establishment of a well connected transport network?",
    "Low mobility, acceleration, connectivity",
    "High creativity, speed, strength",
    "High Connectivity, accessibility, mobility",
    "Non-flammable, Strength, Foundation",
    3
  ),

  //new question
  new Question(
    "How is Private Transport different from Public Transport",
    "Cost-efficient",
    "Convenient",
    "Speed",
    "Energy-saving",
    3
  ),

  //new question
  new Question(
    "What is the benefit of going to Central Business Districts",
    "More Interactions",
    "More Congestion",
    "More Economic Activities",
    "More Art Galleries",
    3
  ),

  //new question
  new Question(
    "Why is there a need for the establishment of a well-connected transport network",
    "Reduction of Congestion in heavy traffic areas",
    "Increase in sales for retail stores in CBD",
    "Reduction of accidents",
    "To not spend money to redo the transport network",
    1
  ),

  //new question
  new Question(
    "Which of the following is not a disadvantage of traffic congestion?",
    "Direct drivers to other roads",
    "Longer travelling times for road users",
    "More combustion of fossil fuels & carbon emissions",
    "Commuters get frustrated",
    1
  ),

  //new question
  new Question(
    "What is an example of natural landscapes?",
    "Farms",
    "Housing",
    "Public Facilities",
    "City",
    1
  ),

  //new question
  new Question(
    "Which of the following is a consequence of altering the natural ecosystem?",
    "Increase survival chances of animals",
    "Increase animal population",
    "Animals get run over",
    "None of the above",
    3
  ),

  //new question
  new Question(
    "What is not an advantage of wildlife corridors",
    "Conserve ecosystem",
    "Protect wildlife genetic pools",
    "Raise wildlife survival chances",
    "Train wildlife survival skills",
    4
  ),

  //new question
  new Question(
    "What is false about traffic congestion?",
    "increases number of vehicles on the road",
    "increases speed of vehicles",
    "increases driver frustration",
    "increases carbon footprint",
    2
  ),

  //new question
  new Question(
    "What is true about carpooling?",
    "It is a public transport mode",
    "Increases number of vehicles on the road",
    "Lower combustion of fossil fuels",
    "None of the above",
    3
  ),

  //new question
  new Question(
    "What is smog made of?",
    "Pollen",
    "Microfibre",
    "Hair/Fur",
    "Dirt",
    1
  ),

  //new question
  new Question(
    "What are the side effects Humans face from prolonged exposure to polluted air?",
    "High Blood Pressure",
    "Muscle Pain",
    "1 and 2",
    "Low Blood Pressure",
    4
  ),

  //new question
  new Question(
    "What is a consequence of Noise Pollution",
    "Short Sightedness",
    "Improved Sleep Conditions",
    "Reduced work productivity",
    "None of the above",
    3
  ),

  //new question
  new Question(
    "What is the average loudness limit on human hearing(in decibels)",
    "69",
    "54",
    "59",
    "53",
    4
  ),

  //new question
  new Question(
    "What is the main reasons are trees being planted in place of sound barriers.",
    "Reduced greenhouse gasses",
    "Increased greenery",
    "Cost Efficient",
    "All of the above",
    4
  ),

  //new question
  new Question(
    "Which of the following is a result of road accidents?",
    "Damage of personal property",
    "Incur penalty fees",
    "1 and 2",
    "None of the above",
    3
  ),

  //new question
  new Question(
    "On which date did the Singapore Road Safety Council start to run public campaigns to promote awareness for road safety?",
    "2006",
    "2011",
    "2012",
    "2013",
    4
  ),

  //new question
  new Question(
    "What is the percentage of greenhouse gasses produced by transport systems?",
    "15 to 20",
    "20 to 25",
    "25 to 30",
    "30 to 35",
    3
  ),

  //new question
  new Question(
    "Land is precious to humanity as the lithosphere of earth is…",
    "20%",
    "30%",
    "40%",
    "50%",
    2
  ),

  //new question
  new Question(
    "Which of the following is true in this format in the scenario of high crime rate during peak hours: [amount of commuters],[cramped/spacious],[personal safety concerns]",
    "High, Cramped, Reduced",
    "High, Cramped, Increased",
    "Low, Cramped, Reduced",
    "Low, Spacious, Increased",
    2
  ),

  //new question
  new Question(
    "Which of the following is an initiative implemented to aid in mobility of the Elderly?",
    "Ergonomic Seats",
    "Green Man +",
    "Support Railings",
    "All of the above",
    4
  ),

  //new question
  new Question(
    "Which of the following are initiatives implemented to aid PwDs, specifically people with Visual Impairment?",
    "Low Profile Bus Ramps",
    "Green Man +",
    "Textured Paths",
    "2 and 3",
    4
  ),

  //new question
  new Question(
    "Which of the following is true in this format: (date of which) [LTA introducing tactile guiding systems in two pilot phases], [full implementation of the feature], [all bus stops and MRT stations implementing the system]",
    "2005, 2010, 2013",
    "2000, 2003, 2006",
    "2002, 2004, 2007",
    "1995, 1998, 2003",
    4
  ),

  //new question
  new Question(
    "Which of the following is not a challenge of transport planning?",
    "Lack of Contractors",
    "Topography",
    "Building Layout",
    "High Monetary Investments",
    1
  ),

  //new question
  new Question(
    "What are some diverse mobility needs the transport system will cater to?",
    "Elderly",
    "Bus Drivers",
    "1 and 2",
    "None of the above",
    1
  ),

  //new question
  new Question(
    "How do EVs reduce Noise Pollution?",
    "Lack of Internal Combustion Engines",
    "Travel at Slower Speeds",
    "EVs do not produce Noise Pollution",
    "Noise Dampeners",
    1
  ),

  //new question
  new Question(
    "What does the EV not need to run?",
    "Electricity",
    "Electric Motor",
    "Oil",
    "Battery Pack",
    3
  ),

  //new question
  new Question(
    "What do special features in transport provide for people with diverse mobility needs?",
    "More time",
    "More space",
    "More assistance",
    "All of the above",
    4
  ),

  //new question
  new Question(
    "What does an AV require to run?",
    "Semiconductor",
    "Combustion Engine",
    "Photovolatic Cells",
    "None of the above",
    1
  ),

  //new question
  new Question(
    "What does the Video Camera do in an AV",
    "Record you for your TikTok",
    "Reads traffic light signals",
    "Reads Road Signs",
    "All of the above",
    3
  ),

  //new question
  new Question(
    "What are some disasvantages of AVs",
    "Increased road accidents",
    "More time spent travelling",
    "Increased air pollution",
    "Higher cost to manufacture",
    4
  ),

  //new question
  new Question(
    "How many charging points will be available in Singapore by 2030?",
    "30,000",
    "40,000",
    "50,000",
    "60,000",
    4
  ),

  //new question
  new Question(
    "How big will Singapore’s rail network be by 2030?",
    "240km",
    "300km",
    "360km",
    "420km",
    3
  ),

  //new question
  new Question(
    "What is Singapore's goal for transportation efficiency according to the LTA Master Plan 2040?",
    "30min city, 10 min towns",
    "40min city, 15 min towns",
    "35min city, 15 min towns",
    "45min city, 20 min towns",
    4
  ),
];

//level indicator
const levelIndicator = document.querySelector(".circle");
const levelProgressBar = document.querySelector(".level-progress");
const levelGreenPointts = document.querySelector(".GPoint");
const levelFavour = document.querySelector(".favour");

levelFavour.textContent = "Sus Points: " + String(favor);
levelGreenPointts.textContent = "Leaf Stickers: " + String(greenpoints);

levelIndicator.textContent = level;
levelProgressBar.style.width = levelProgress - 1 + "%";

//terminal
const terminalResultsCont = document.querySelector("#terminalResultsCont");
const terminalTextInput = document.querySelector("#terminalTextInput");
const terminalResultWrapper = document.querySelector(".terminalResultWrapper");
const sendBtn = document.querySelector("#sendBtn");
let terminalInput;
let option; //for displaying the options for the qn

const noinnoText =
  "Nothing happened, just like the Lore dictated. Clearly, the humans have run out of innovation so they can no longer Develop this area.";
const nofavorsText =
  "Hey, hey, hold on, User! You still have to answer a few more questions! To Develop an area, you need Sus Points. Slow down and level up first, got it?";

function sendInput() {
  terminalInput = terminalTextInput.value;
  switch (terminalInput) {
    case "/help":
      //display all the commands
      sayText(
        "To receive a question, enter: [/q]. To answer questions? Simple! Respective to the option you choose, enter: [/1, /2, /3 or /4].",
        "CAS"
      );
      sayText(
        "Your final command is the [/develop] command! Everytime you level up, you receive enough SUS points to implement an environmental measure in an area. For example, simply enter [/develop /road] if you want to develop the road! The six areas you can develop are the road, factory, offices, coast, landfill and gasstation.",
        "POL"
      );
      sayText(
        "Also, to view the developments in 3D after you've developed them, simply type [/3D] and insert the name of the development",
        "CAS"
      );
      sayText(
        "Pro Tip: Pressing the up arrow allows you to view your command history.",
        "POL"
      );
      break;
    case "/q":
      window.isQuestionAnswered = false;
      window.randomQn = Math.floor(Math.random() * arrayOfQuestions.length);
      //display question
      sayText(
        `Question: ${arrayOfQuestions[window.randomQn].question}`,
        "QUESTION"
      );

      //display options
      for (let i = 1; i < 5; i++) {
        switch (i) {
          case 1:
            option = arrayOfQuestions[window.randomQn].option1;
            break;
          case 2:
            option = arrayOfQuestions[window.randomQn].option2;
            break;
          case 3:
            option = arrayOfQuestions[window.randomQn].option3;
            break;
          case 4:
            option = arrayOfQuestions[window.randomQn].option4;
            break;
        }
        sayText(`Option ${i}: ${option}`, "QUESTION");
      }
      break;
    case "/1":
      if (window.isQuestionAnswered == false)
        checkForCorrectAns(terminalInput, window.randomQn);
      else dontUnderstand();
      break;
    case "/2":
      if (window.isQuestionAnswered == false)
        checkForCorrectAns(terminalInput, window.randomQn);
      else dontUnderstand();
      break;
    case "/3":
      if (window.isQuestionAnswered == false)
        checkForCorrectAns(terminalInput, window.randomQn);
      else dontUnderstand();
      break;
    case "/4":
      if (window.isQuestionAnswered == false)
        checkForCorrectAns(terminalInput, window.randomQn);
      else dontUnderstand();
      break;
    case "/develop /road":
      if (favor > 0 && roadLevel != 4) {
        switch (roadLevel) {
          case 2:
            sayText(
              "…Bicycles. This is..this is their next idea. We've given them so much criticism about their carbon footprint, and this is all they can think of? It's the bare minimum! What happened to humans being innovative!—",
              "POL"
            );
            sayText(
              "Stop being so dramatic. You already knew this would be the next development; it's in the Lore. Which, I'm going to assume, you have read? Even if you hadn't, you're still wasting far too much Dialogue on your reactions, when we should be explaining the developments…You're glaring at me, but I haven't said anything strange.",
              "CAS"
            );

            sayText(
              "No, no, you're right. Bicycle-sharing may be a simple method, but they're efficient. I shouldn't underestime the humans' system of bicycle stations that users can check bicycles out of. They can ride their destination and park the bike in a nearby docking station. With bicycle-sharing, there will be less vehicles on the road, reducing carbon emissions and greenhouse gases in the air. There are many bikesharing services in Singapore, including Anywheel, SG Bike and HelloRide. …Good enough of an explanation for you?",
              "POL"
            );
            break;
          case 3:
            sayText(
              "Now this is a proper environmental measure! Nothing like those bicycles from before! The implementation of charges when drives travel on roads leading into the cities during peak hours; it preys on the humans' weakness for money! Drivers are discouraged from using certain roads, especially during peak hours, because they don't want to pay more during such hours. This diverts traffic, easing congestion in certain roads. Brutal genius.",
              "POL"
            );
            sayText(
              "The bicycles were fine, POL. Both work just the same in reducing the number of vehicles on the road. Then again, the bicycles are much more widespread. ERP gantries are more commonly found along central business districts such as Orchard Road and near retail shops such as the ION, Tangs, Wheelock Place and the Shaw Centre. ",
              "CAS"
            );
            // var obj = {
            //   video: {
            //     value:
            //       "<iframe title='YouTube video player' type=\"text/html\" width='640' height='390' src='http://www.youtube.com/embed/W-Q7RMpINVo' frameborder='0' allowFullScreen></iframe>",
            //   },
            // };
            // document.write(obj.video.value);
            break;
        }
        favor = favor - 1;
        roadLevel += 1;
        build.play();
        updateOverlay();
      } else if (roadLevel == 4) {
        sayText(noinnoText, "CAS");
      } else {
        sayText(nofavorsText, "POL");
      }
      break;
    case "/develop /factory":
      if (favor > 0 && factoryLevel != 4) {
        switch (factoryLevel) {
          case 2:
            sayText(
              "Oh, this is lovely! Irresponsible industrial manufacturing causes so much unecessary air pollution. Using recycled materials has definitely reduced the All those unwanted chemicals, gases and particles gone from the atmosphere! You're doing so well, fighting against climate change-",
              "POL"
            );
            sayText(
              "Climate change doesn't exist here. It does in Reality, where the User is. But we wouldn't be affected even if that feature was added. Humans, on the other hand, suffer from respiriatory illnesses, eye irritation, lung damage, colds, coughs and breathing difficulties.",
              "CAS"
            );
            sayText(
              "So fragile! Length of exposure, amount and type of the pollutants varies, and each human is affected so differently…Humans face so many health risks. We must keep working to keep the city Sustainable, User. To the next question!",
              "POL"
            );
            break;
          case 3:
            sayText(
              "Solar panels are a rather helpful invention if you think about it. They're genius, converting light energy from their Sun into electrical energy. You seem…upset by this Development. I thought you would've loved to see humans taking advantage of their natural phenomena to create a renewable source of energy.",
              "CAS"
            );
            sayText(
              "Hm, just thinking. Why do they place it everywhere? I mean, what exactly do they hope to gain by putting such eyesores all over the place. There's no point for them, anyways, not when there's no Sun in here.",
              "POL"
            );
            break;
        }
        favor -= 1;
        factoryLevel += 1;
        build.play();

        updateOverlay();
      } else if (factoryLevel == 4) {
        sayText(noinnoText, "CAS");
      } else {
        sayText(nofavorsText, "POL");
      }
      break;
    case "/develop /offices":
      if (favor > 0 && officesLevel != 4) {
        switch (officesLevel) {
          case 2:
            sayText(
              "This one is rather straightforward. Rooftop gardens provide space for agriculture, add aesthetic beauty to cityscapes and reduce ambient temperatures. Thanks to photosynthesis, there's less cabron in the air but more oxygen. Humans work efficiently when provided with sufficient and quality air. In addition, it's been proven that the presence of nature soothes humans. The Simulation really does enjoy running smoothly with all these simple but neat Developments.",
              "CAS"
            );
            sayText(
              "The National Parks Board has plans for something similar, though, with their OneMillionTrees movement. A million planted trees in Singapore by 2030, can you imagine? I mean, can humans even achieve something like that? They're so weak by themselves!",
              "POL"
            );
            sayText(
              "It's true that they're nothing more than Flesh Beings by themselves, but together these Pixels create a whole city. Their collaboration with one another is key in accomplishing their Singapore Green Plan. That's not relevant, though. the Lore doesn't mention anything about the Singapore Green Plan so it likely won't appear in the Simulation.",
              "CAS"
            );
            sayText(
              "And yet, we have Dialogue about it…But like you said, CAS, it's irrelevant. Nothing more than my observations about the humans.",
              "POL"
            );
            break;
          case 3:
            sayText(
              "Again. Seriously. Solar panels, again…it's always going to be solar panels, huh? Over, and over, and over, again! It's never going to— haha— stop being solar panels—",
              "POL"
            );
            sayText(
              "POL? POL, you're— are you Glitching? Hey! Hey, listen to me, stop! POL! FOr once, would you please just listen!",
              "CAS"
            );
            break;
        }
        favor -= 1;
        officesLevel += 1;
        build.play();

        updateOverlay();
      } else if (officesLevel == 4) {
        sayText(noinnoText, "CAS");
      } else {
        sayText(nofavorsText, "POL");
      }
      break;
    case "/develop /coast":
      if (favor > 0 && coastLevel != 4) {
        //DISPLAY TEXT
        switch (coastLevel) {
          case 2:
            sayText(
              "3 days? But that's so short! User, is it really true that you can only survive without water for 3 days? What about your city, User? How can we possibly do anything within 3 days?! CAS, we need to get the humans hydrated right now!",
              "POL"
            );
            sayText(
              "Oh, stop panicking. They don't need water, they're Pixels. The Lore already prepared for that anyways. Look, the User implemented a rain collection system. This system takes advantage of the natural water cycle, allowing humans to collect water for their purposes later on. Of course, if they must drink the water, it has to go through a heavy filtering process first.",
              "CAS"
            );
            sayText(
              "Are the tanks always at the beach? That's rather impractical. If they really wanted to use natural cycles to their advantage, wouldn't they be placing them everywhere? It rains pretty much everywhere, after all. User! You could collect all the water you need to sustain yourself for 3 days if you built collection tanks at your own house!",
              "POL"
            );
            break;
          case 3:
            sayText(
              "Desalination. It's a fairly similar concept to filtering. You can see that it's placed right at the Coast in the Simulation. Humans are finally utilising this huge body of water, that's right in front of them. Still, their main goal is to remove any impurities from the seawater, turning the seawater into fresh drinking water. Can't they just drink their water straight from the source?",
              "POL"
            );
            sayText(
              "The Lore claims that the humans cannot survive such high amounts of salt. You already knew that, POL; I remember your experiements before the Simulation. Stop playing the fool when you are fully aware of the resourcesfulness and grit of the humans, much more than I am. The water undegoes reverse osmosis thanks to semipermeable membranes. Impurities like salt and dirt have large particles, so they are left behind as the water passes throigh these membranes.",
              "CAS"
            );
            break;
          case 4:
            sayText(
              "The Lore claims that the humans cannot survive such high amounts of salt. You already knew that, POL; I remember your experiements before the Simulation. Stop playing the fool when you are fully aware of the resourcesfulness and grit of the humans, much more than I am. The water undegoes reverse osmosis thanks to semipermeable membranes. Impurities like salt and dirt have large particles, so they are left behind as the water passes throigh these membranes.",
              "CAS"
            );
            break;
        }
        favor -= 1;
        coastLevel += 1;
        build.play();
        updateOverlay();
      } else if (coastLevel == 4) {
        sayText(noinnoText, "CAS"); //max level reached for coast
      } else {
        sayText(nofavorsText, "POL");
      }
      break;
    case "/develop /landfill":
      if (favor > 0 && landfillLevel != 4) {
        //DISPLAY TEXT
        switch (landfillLevel) {
          case 2:
            sayText(
              "Ah, bins. A very minor change, and yet this would can have a rather large impact in the long-run. As long as they do it right, of course. If the materials they try to recycle are contaminated by food waste or human pieces, they can't be used to recycle. However, if they ensure that everything they throw in these bins are not contaminated, they help preseve natural resources for longer, and reduce their carbon footprint.",
              "CAS"
            );
            sayText(
              "The logic behind this Development is its convenciency, isn't it? User, did you know that the reason why so many humans don't recycle is because they find it tedious. They dislike the entire process, from cleaning trash to finding bins. Luckily, Divine Entities like us are much smarter, and we have allowed you to integrate a convenient Development! Now, the humans need barely any motivation! If they do, well, I would be honoured to provide some incentives for them.",
              "POL"
            );
            break;
          case 3:
            sayText(
              "Our Dialogue for this one is surprisingly excited, similar to the previous Landfill Development. It seems that we are supposed to be promoting the benefits of recycling to the User, but again, the Lore wants us to mention other things as well. ",
              "CAS"
            );
            sayText(
              "Let me see, you know I don't read that thing. Hm, a beloved robot on a space adventure…? A plant in a world covered in trash? Tsk, I knew this would be useless as always. This doesn't mean anything, CAS! Do you really expect me to believe that humans have invented space travel? Look at the User's city, do you see rocket scientists anywhere?",
              "POL"
            );
            sayText(
              "The Simulation is different from Reality. It's possible the Lore is referring to creations on the User's Platform. not ours. Surely someone there has created one of these recycling robots. The Flesh Entities certainly have a fascination for Artificial Intelligence, and the potential of these robots are incredible. Their Code makes them helpful, useful! They actually do important work in Reality!…Besides, separation is a crucial step in recycling.",
              "CAS"
            );
            sayText(
              "…I agree, CAS. It's better when materials that are too different are separated. Sometimes, Divine Entities have no busy interacting with Pixel Entities…or each other.",
              "POL"
            );
            break;
        }
        favor -= 1;
        landfillLevel += 1;
        build.play();
        updateOverlay();
      } else if (landfillLevel == 4) {
        sayText(noinnoText, "CAS");
      } else {
        sayText(nofavorsText, "POL");
      }
      break;
    case "/develop /gasstation":
      if (favor > 0 && gasstationLevel != 4) {
        switch (gasstationLevel) {
          case 2:
            sayText(
              "Electric vehicles are electrically charged at the charging station so they do not use petrol, reducing carbon emissions. The key to an electric future is batteries where the most energy is packed into the smallest one. It can be recharged again and again, making it the most sustainble option for storing power.",
              "CAS"
            );
            sayText(
              "I knew humans were innovative! A car that runs on such a tiny battery, and yet works just the same, if not better, than other cars. What's next, a car that doesn't even need humans to drive them?!",
              "POL"
            );
            sayText(
              "You would know, if you spent more time reading the Lore, instead of. The “innovation” of these methods doesn't really matter anyways, most of the Dialogue ends the same: The reduced carbon emissions lead to reduced air pollution and reduced carbon footprint. Thus, the greenhouse effect is not enhanced. ",
              "CAS"
            );
            break;
          case 3:
            sayText(
              "It's solar panels. POL, how is your Code right now? You seem better. Stable…The Glitches, are they…?",
              "CAS"
            );
            sayText(
              "Glitches? What are you talking about? Oh, stop worrying, CAS, I won't just disappear so suddenly. Besides, our dear User needs us, isn't that right? I'll explain this one! Solar panels are a rather helpful invention if you think about it. They're genius, converting light energy from their Sun into electrical energy. Did I say some part of the Dialogue wrong? Let me see, you know I don't read that thing!",
              "POL"
            );
            sayText(
              "…I see. It just sounded familiar, what you said is all. Perhaps, I've been reading the Lore too often. It makes me feel like we've been here before…or that we will eventually. Whatever the case is, I'll just wait for it.",
              "CAS"
            );
            sayText(
              "…Seriously, you're way too cryptid. User, you agree with me, right? CAS is sooo dramatic!",
              "POL"
            );
            sayText(
              "Hey! I'm not the one who Glitched away an entire bakery because their wedding bouquet had one less dahlia than planned. Get back here!",
              "CAS"
            );
            sayText("You'll never take me alive!", "POL");
            break;
        }
        favor -= 1;
        gasstationLevel += 1;
        build.play();
        updateOverlay();
      } else if (gasstationLevel == 4) {
        sayText(noinnoText, "CAS");
      } else {
        sayText(nofavorsText, "POL");
      }
      break;
    case "/3D /coast":
      if (coastLevel >= 2) {
        window.location.href =
          "https://sus-city.github.io/GAME-PAGE/3D/raincollection.html";
      } else {
        notAvailable();
      }
      break;
    case "":
      break;
    default:
      dontUnderstand();
      break;
  }
  terminalTextInput.value = ""; //RESETS THE INPUT
  updateValues();
}

//Chat History
let chatHistory = "";
let previousMessage = 0; //the number of times the arrow up button was pressed
function saveChat() {
  chatHistory += terminalInput += "||"; // || is the sign for separating chats
  localStorage.setItem("chat-history", chatHistory);
}
function updateChat() {
  let chatHistoryUpdate = localStorage.getItem("chat-history"); //Getting updated value of chat history
  if (chatHistoryUpdate != null) {
    window.eachCommand = chatHistoryUpdate.split("||"); //Creates an array of each command
  }
}
updateChat();

sendBtn.addEventListener("click", sendInput);
document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowUp":
      if (previousMessage + 1 < window.eachCommand.length) {
        previousMessage += 1;
        terminalTextInput.value = eachCommand[previousMessage];
      }
      break;
    case "ArrowDown":
      if (previousMessage - 1 >= 0) {
        previousMessage -= 1;
        terminalTextInput.value = eachCommand[previousMessage];
      }
      break;
    case "Enter":
      sendInput();
      saveChat();
      previousMessage = 0;
      break;
  }
});

function updateValues() {
  levelFavour.textContent = "Sus Points: " + String(favor);
  levelGreenPointts.textContent = "Leaf Stickers: " + String(greenpoints);

  localStorage.setItem("level", level);
  localStorage.setItem("greenpoints", greenpoints);
  localStorage.setItem("favor", favor);
  localStorage.setItem("levelProgress", levelProgress);
  //Building Variables
  localStorage.setItem("roadLevel", roadLevel);
  localStorage.setItem("factoryLevel", factoryLevel);
  localStorage.setItem("parkLevel", parkLevel);
  localStorage.setItem("officesLevel", officesLevel);
  localStorage.setItem("landfillLevel", landfillLevel);
  localStorage.setItem("coastLevel", coastLevel);
  localStorage.setItem("gasstationLevel", gasstationLevel);
}

function dontUnderstand() {
  sayText("Unfortunately, we don't understand you.", "CAS");
  sayText(
    "Ignore her, what we mean is *please use commands that exist.*",
    "POL"
  );
  updateValues();
}

function notAvailable() {
  sayText("Unlock the development before you can view the 3D version!", "CAS");
}

function levelUp() {
  sayText(
    "Hey hey, guess who got enough Sus Points, and can now develop a little special something? You! Go on, type /develop /[grid] to develop one of the grids...",
    "POL"
  );
  sayText("Enter /help if you forgot the grid.", "CAS");
  sayText(
    "That's such a nice reminder, CAS! If only you were this nice at my wedding...",
    "POL"
  );
}

function checkForCorrectAns(terminalInput, randomQn) {
  if (terminalInput == `/${arrayOfQuestions[randomQn].correctanswer}`) {
    //IF ANSWER IS CORRECT
    sayText("Correct!", "CAS");
    updateGreenpoints();
    if (level !== 12) {
      if (levelProgress > 50) {
        level += 1;
        favor += 1;
        levelUp();
        greenpoints += roundNearest5(20 / level);

        if (level % 4 == 0) {
          //IF LEVEL IS 4, 8, OR 12 -> UPDATE THE PARK
          switch (parkLevel) {
            case 2:
              sayText(
                "It seems like... they have developed the park. By themselves.",
                "POL"
              );
              sayText(
                "Hm, just thinking. Why do they place it everywhere? I mean, what exactly do they hope to gain by putting such eyesores all over the place. There's no point for them, anyways, not when there's no Sun in here.",
                "POL"
              );
              break;
            case 3:
              sayText(
                "It seems like... they have developed the park. By themselves. Again.",
                "POL"
              );
              break;
            case 4:
              sayText("Are- are those birds???", "POL");
              break;
          }
          parkLevel += 1;
          build.play();
        }
        levelProgress = 0; //RESETS THE LEVEL PROGRESS BAR
      } else {
        levelProgress == 75 ? (levelProgress += 99) : (levelProgress += 100);
      }
    } else {
      level = 12; //max level
      levelProgress = 100; //to show that no longer can level up
    }
    levelIndicator.textContent = level;
    levelProgressBar.style.width = levelProgress + "%";
  } else {
    sayText("Incorrect. Another question.", "CAS");

    sayText(
      "Of course, even Divine humans like you fail eventually, User.",
      "POL"
    );

    //nothing happens if they get it wrong
  }
  window.isQuestionAnswered = true;
  updateValues();
}

function roundNearest5(num) {
  return Math.round(num / 5) * 5;
}

function updateGreenpoints() {
  greenpoints += 5;
  sayText(
    "You have 5 more Leaf Stickers, now! Rewards are a crucial part of the conditioning process. They get so many results with subjects; trust me, I'd know!",
    "POL"
  );
  updateValues();
}

shopBtn.addEventListener("click", () => {
  updateValues();
  setTimeout(function () {
    window.location.href = "https://sus-city.github.io/SHOP-PAGE/shop.html";
    // window.location.href = "http://localhost:5500/SHOP-PAGE/shop.html";
  }, 1000);
});

//ON LOAD
onloadMusic.addEventListener("ended", () => {
  bgm1.play();
});
bgm1.addEventListener("ended", () => {
  bgm2.play();
});
bgm2.addEventListener("ended", () => {
  bgm3.play();
});

updateOverlay();
sayText("CAS is online", "CAS");
sayText("POL is online", "POL");
