import { userInfo, save } from "../GAME-PAGE/main.js";

//sound
let buyingSound = new Audio("/SOUNDS/buyingitem.mp3");
let bgmShop = new Audio("/SOUNDS/shopmusic.mp3");
bgmShop.volume = 0.5;

bgmShop.play();

if (localStorage.getItem("mutePreference") === "false") {
// Apply the muted state to the background music tracks

bgmShop.muted = true;


}
let playSound = () => new Audio("/SOUNDS/menuclick.mp3").play();

// Item information
const items = [
  //Class Name in button, cost, localStorage name
  ["PineappleMan", 70, "PineappleManBought"],
  ["Blimp", 100, "blimpBought"],
  ["WindowDeco", 400, "windowBought"],
  ["Alien", 170, "alienBought"],
  ["Floatie", 50, "floatBought"],
  ["Graffiti", 220, "graffitiBought"],
  ["Umbrella", 125, "umbrellasBought"],
];

const GPointLabel = document.querySelector(".GPoint");
const backBtn = document.querySelector(".fa-angle-left");

//Set greenpoint (or leaf sticker) levels

GPointLabel.textContent = "Leaf Stickers:  " + userInfo.greenpoints;

const buttons = document.querySelectorAll(".Buybtn");

checkStyles();
function checkStyles() {
  for (let i = 0; i < items.length; i++) {
    if (userInfo.shopItems.includes(items[i][2])) {
      //if item is bought, change styling
      buttons[i].textContent = "Bought";
      buttons[i].style.backgroundColor = "red";
      buttons[i].removeEventListener("click", buyItem);
    } else {
      buttons[i].textContent = "Buy";
      buttons[i].style.backgroundColor = "green";
      buttons[i].addEventListener("click", function (event) {
        buyItem(buttons[i]); //event.path[0]
      });
    }
  }
}

function buyItem(buyButton) {
  //loop through each item in the array to check for same name -> aka item being purchased
  for (let i = 0; i < buttons.length; i++) {
    if (buyButton.classList.contains(items[i][0])) {
      if (userInfo.greenpoints - items[i][1] >= 0) {
        userInfo.greenpoints -= items[i][1];
        buyingSound.play();
        alert("Item purchased successfully.");
        GPointLabel.textContent =
          "Leaf Stickers:  " + String(userInfo.greenpoints); //update greenpoint label
        //Update localStorage Variables
        userInfo.shopItems.push(items[i][2]);
        checkStyles();
        buttons[i].removeEventListener("click", buyItem);
      } else {
        alert(
          "You do not have enough userInfo.greenpoints to purchase this item."
        );
      }
    }
  }
}

backBtn.addEventListener("click", () => {
  save("game");
});
