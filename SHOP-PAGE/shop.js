//Display username
const usernameTag = document.querySelector(".Username");
let username = localStorage.getItem("username");
usernameTag.textContent = "Hello " + username + "!";

//Cost of items
const costOfItems = [
  ["PineappleMan", 69],
  ["Blimp", 96],
];
//Getting the variables from LocalStorage
let blimpBought = localStorage.getItem("blimpBought");
let PineappleManBought = localStorage.getItem("PineappleManBought");
let greenpoints = Number(localStorage.getItem("greenpoints"));

//Get elements from HTML
const buyButtonPineappleMan = document.querySelector(".PineappleMan"); //buy button for pineapple man
const buyButtonBlimp = document.querySelector(".Blimp"); //buy button for blimp
const cartCont = document.querySelector(".cartCont");
const totalCost = document.querySelector(".total-cost");
const GPointLabel = document.querySelector(".GPoint");
const backBtn = document.querySelector(".fa-angle-left");
//Set greenpoint (or leaf sticker) levels
GPointLabel.textContent = "Leaf Stickers:  " + greenpoints;

boughtBtn(); //if the item was alr bought

//Pineapple Man Button
function handleBuyPineappleMan() {
  addToCart(buyButtonPineappleMan);
  boughtBtn();
}

//Blimp Button
function handleBuyBlimp() {
  addToCart(buyButtonBlimp);
  boughtBtn();
}

function addToCart(btn) {
  for (let i = 0; i < costOfItems.length; i++) {
    //if this is the item that they are buying
    if (btn.classList.contains(costOfItems[i][0])) {
      if (greenpoints - costOfItems[i][1] >= 0) {
        //if the user has enough greenpoints to purchase the item
        greenpoints = greenpoints - costOfItems[i][1];
        alert("Item purchased successfully.");
        GPointLabel.textContent = "Leaf Stickers:  " + String(greenpoints); //update greenpoint label
        switch (btn) {
          case buyButtonBlimp:
            blimpBought = "true";
            break;
          case buyButtonPineappleMan:
            PineappleManBought = "true";
        }
      } else {
        alert("You do not have enough greenpoints to purchase this item.");
      }
    }
  }
}

function boughtBtn() {
  if (blimpBought == "true") {
    buyButtonBlimp.textContent = "Bought";
    buyButtonBlimp.style.backgroundColor = "red";
    buyButtonBlimp.removeEventListener("click", handleBuyBlimp); //so that nothing will happen once this button is clicked
  } else {
    buyButtonBlimp.textContent = "Buy";
    buyButtonBlimp.style.backgroundColor = "green";
    buyButtonBlimp.addEventListener("click", handleBuyBlimp);
  }
  if (PineappleManBought == "true") {
    buyButtonPineappleMan.textContent = "Bought";
    buyButtonPineappleMan.style.backgroundColor = "red";
    buyButtonPineappleMan.removeEventListener("click", handleBuyPineappleMan); //so that nothing will happen once this button is clicked
  } else {
    buyButtonPineappleMan.textContent = "Buy";
    buyButtonPineappleMan.style.backgroundColor = "green";
    buyButtonPineappleMan.addEventListener("click", handleBuyPineappleMan);
  }
}

backBtn.addEventListener("click", () => {
  //update localStorage before leaving this page
  localStorage.setItem("greenpoints", greenpoints);
  localStorage.setItem("PineappleManBought", PineappleManBought);
  localStorage.setItem("blimpBought", blimpBought);
  setTimeout(function () {
    // window.location.href = "https://sus-city.github.io/GAME-PAGE/main.html";
    window.location.href = "http://localhost:5500/GAME-PAGE/main.html";
  }, 500);
});
