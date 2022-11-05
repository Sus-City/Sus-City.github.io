//Display username
const usernameTag = document.querySelector(".Username");
let username = localStorage.getItem("username");
usernameTag.textContent = "Hello " + username + "!";

//sound
let buyingSound = new Audio("/SOUNDS/buyingitem.mp3");
let bgmShop = new Audio("/SOUNDS/shopmusic.mp3");
bgmShop.play();
let playSound = () => new Audio("/SOUNDS/menuclick.mp3").play();

// Item information
const items = [
  //Class Name in button, cost, localStorage name
  ["PineappleMan", 69, "PineappleManBought"],
  ["Blimp", 96, "blimpBought"],
  ["WindowDeco", 420, "windowBought"],
  ["Alien", 169, "alienBought"],
  ["Floatie", 47, "floatBought"],
  ["Graffiti", 216, "graffitiBought"],
  ["Umbrella", 124, "umbrellasBought"],
];
//Getting the variables from LocalStorage
let greenpoints = Number(localStorage.getItem("greenpoints"));

const GPointLabel = document.querySelector(".GPoint");
const backBtn = document.querySelector(".fa-angle-left");
//Set greenpoint (or leaf sticker) levels
GPointLabel.textContent = "Leaf Stickers:  " + greenpoints;

const buttons = document.querySelectorAll(".Buybtn");

checkStyles();
function checkStyles() {
  for (let i = 0; i < items.length; i++) {
    if (localStorage.getItem(items[i][2]) == "true") {
      //if item is bought, change styling
      buttons[i].textContent = "Bought";
      buttons[i].style.backgroundColor = "red";
      buttons[i].removeEventListener("click", buyItem);
    } else {
      buttons[i].textContent = "Buy";
      buttons[i].style.backgroundColor = "green";
      buttons[i].addEventListener("click", function (event) {
        buyItem(event.path[0]);
      });
    }
  }
}

function buyItem(buyButton) {
  //loop through each item in the array to check for same name -> aka item being purchased
  for (let i = 0; i < buttons.length; i++) {
    if (buyButton.classList.contains(items[i][0])) {
      if (greenpoints - items[i][1] >= 0) {
        greenpoints -= items[i][1];
        buyingSound.play();
        alert("Item purchased successfully.");
        GPointLabel.textContent = "Leaf Stickers:  " + String(greenpoints); //update greenpoint label
        //Update localStorage Variables
        localStorage.setItem(items[i][2], "true");
        localStorage.setItem("greenpoints", greenpoints);
        checkStyles();
        buttons[i].removeEventListener("click", buyItem);
      } else {
        alert("You do not have enough greenpoints to purchase this item.");
      }
    }
  }
}

backBtn.addEventListener("click", () => {
  setTimeout(function () {
    // window.location.href = "https://sus-city.github.io/GAME-PAGE/main.html";
    window.location.href = "http://localhost:5500/GAME-PAGE/main.html";
  }, 700);
});
