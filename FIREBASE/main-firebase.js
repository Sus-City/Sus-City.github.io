//Importing the firebase methods & variables
import { db } from "./config.js";
import {
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";
let userUID = localStorage.getItem("UID");

//Get input
const returnBtn = document.getElementById("return");

returnBtn.addEventListener("click", (e) => {
  updateToFirebase();
  setTimeout(function () {
    // window.location.href = "https://sus-city.github.io/SIGNUP-PAGE/signup.html";
    window.location.href = "http://127.0.0.1:5500/SIGNUP-PAGE/signup.html";
  }, 500);
});

function updateToFirebase() {
  set(ref(db, "players/" + userUID), {
    last_login: Date.now(),
    level: localStorage.getItem("level"),
    greenpoints: localStorage.getItem("greenpoints"), //LEAF STICKERS
    favor: localStorage.getItem("favor"), //SUS POINTS
    levelProgress: localStorage.getItem("levelProgress"),
    //DEVELOPMENTS
    roadLevel: localStorage.getItem("roadLevel"),
    factoryLevel: localStorage.getItem("factoryLevel"),
    parkLevel: localStorage.getItem("parkLevel"),
    officesLevel: localStorage.getItem("officesLevel"),
    landfillLevel: localStorage.getItem("landfillLevel"),
    coastLevel: localStorage.getItem("coastLevel"),
    gasstationLevel: localStorage.getItem("gasstationLevel"),
    //SHOP ITEMS
    blimpBought: localStorage.getItem("blimpBought"),
    PineappleManBought: localStorage.getItem("PineappleManBought"),
  });
}
