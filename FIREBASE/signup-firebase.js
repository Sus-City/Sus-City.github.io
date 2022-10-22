//Importing the firebase methods
import { db } from "./config.js";
import { auth } from "./config.js";
import { signInAnonymously } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import {
  set,
  ref,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";

//Get inputs from HTML
const submitBtn = document.querySelector("#submit_btn");

submitBtn.addEventListener("click", (e) => {
  signInAnonymously(auth) //creates account for authentication
    .then(() => {
      saveToFirebase();
      // setTimeout(function () { window.location.href = "https://sus-city.github.io/GAME-PAGE/main.html" }, 500);
      setTimeout(function () {
        window.location.href = "http://localhost:5500/GAME-PAGE/main.html";
      }, 500);
    })
    .catch((error) => {
      console.log(error);
    });
});

function saveToFirebase() {
  let user = auth.currentUser; //gets the information of current user
  let userUID = user.uid; //gets the UID of the current user
  localStorage.setItem("UID", userUID); //stores the uid of the current user to the firebase

  //Sets the default user information if they don't have an account created
  let userInformation = {
    last_login: Date.now(),
    level: 1,
    greenpoints: 0,
    favor: 0,
    levelProgress: 0,
    //building stuff
    roadLevel: 2,
    factoryLevel: 2,
    parkLevel: 2,
    officesLevel: 2,
    landfillLevel: 2,
    coastLevel: 2,
    gasstationLevel: 2,
    //shop
    blimpBought: "false",
    PineappleManBought: "false",
  };

  const dbRef = ref(db);
  get(child(dbRef, "players/" + userUID)) //checks if the user account has been created
    .then((snapshot) => {
      if (snapshot.exists()) {
        //gets the user information from firebase
        localStorage.setItem("level", snapshot.val().level);
        localStorage.setItem("greenpoints", snapshot.val().greenpoints);
        localStorage.setItem("favor", snapshot.val().favor);
        //the building variables
        localStorage.setItem("roadLevel", snapshot.val().roadLevel);
        localStorage.setItem("factoryLevel", snapshot.val().factoryLevel);
        localStorage.setItem("parkLevel", snapshot.val().parkLevel);
        localStorage.setItem("officesLevel", snapshot.val().officesLevel);
        localStorage.setItem("landfillLevel", snapshot.val().landfillLevel);
        localStorage.setItem("coastLevel", snapshot.val().coastLevel);
        localStorage.setItem("gasstationLevel", snapshot.val().gasstationLevel);
        localStorage.setItem("blimpBought", snapshot.val().blimpBought);
        localStorage.setItem(
          "PineappleManBought",
          snapshot.val().PineappleManBought
        );
      } else {
        //sets the user information in firebase if account hasn't been created
        set(ref(db, "players/" + userUID), {
          last_login: userInformation.last_login,
          level: userInformation.level,
          greenpoints: userInformation.greenpoints,
          favor: userInformation.favor,
          levelProgress: userInformation.levelProgress,
          //building stuff
          roadLevel: userInformation.roadLevel,
          factoryLevel: userInformation.factoryLevel,
          parkLevel: userInformation.parkLevel,
          officesLevel: userInformation.officesLevel,
          landfillLevel: userInformation.landfillLevel,
          coastLevel: userInformation.coastLevel,
          gasstationLevel: userInformation.gasstationLevel,
          blimpBought: userInformation.blimpBought,
          PineappleManBought: userInformation.PineappleManBought,
        });
        localStorage.setItem("level", userInformation.level);
        localStorage.setItem("greenpoints", userInformation.greenpoints);
        localStorage.setItem("favor", userInformation.favor);
        localStorage.setItem("levelProgress", userInformation.levelProgress);
        //building variables
        localStorage.setItem("roadLevel", userInformation.roadLevel);
        localStorage.setItem("factoryLevel", userInformation.factoryLevel);
        localStorage.setItem("parkLevel", userInformation.parkLevel);
        localStorage.setItem("officesLevel", userInformation.officesLevel);
        localStorage.setItem("landfillLevel", userInformation.landfillLevel);
        localStorage.setItem("coastLevel", userInformation.coastLevel);
        localStorage.setItem(
          "gasstationLevel",
          userInformation.gasstationLevel
        );
        localStorage.setItem("blimpBought", userInformation.blimpBought);
        localStorage.setItem(
          "PineappleManBought",
          userInformation.PineappleManBought
        );
      }
    })
    .catch((error) => {
      console.error(error);
    });

  localStorage.setItem("username", document.getElementById("username").value); //sets the username (won't be saved in firebase)
}
