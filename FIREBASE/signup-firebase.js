//Importing the firebase methods
import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import {
  set,
  ref,
  get,
  getDatabase,
  update,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";

//Get inputs from HTML
const submitBtn = document.querySelector("#submit_btn");

function validateEmail(email) {
  const re = /\S+\S+\.\S+/;
  return re.test(email);
}

function validatePassword(password) {
  const hasNumeric = /\d/.test(password);
  const hasAlphabetical = /[a-zA-Z]/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);
  if (!hasNumeric) {
    return "Please include at least one numeric character in your password.";
  }
  if (!hasAlphabetical) {
    return "Please include at least one alphabetical character in your password.";
  }
  if (!hasSpecial) {
    return "Please include at least one special character in your password.";
  }
  if (!(password.length >= 6)) {
    return "Please have at least 6 characters in your password";
  }
  return "";
}

submitBtn.addEventListener("click", function() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  localStorage.setItem("URL", "https://sus-city.github.io"); 
  localStorage.setItem("test", "testing");

  if (!validateEmail(email)) {
    alert("Please enter a valid email.");
    return;
  }
  const passwordValidationMessage = validatePassword(password);
  if (passwordValidationMessage) {
    alert(passwordValidationMessage);
    return;
  }
  signUp(email, password);
});

function signUp(email, password) {
  console.log("Signing In")
  axios({
    method: "get",
    url: decodeURIComponent(
      "https%3A%2F%2Fstorage-api-qazw.onrender.com%2Fconfig"
    ),
  })
    .then(function (response) {
      const app = initializeApp(response.data);
      const db = getDatabase();
      const auth = getAuth(app);

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          var lgDate = new Date();
          update(ref(db, "users/" + user.uid), {
            last_login: lgDate,
          }).then(() => {
            get(ref(db, "users/" + user.uid), user.uid).then((snapshot) => {
              navigateGame(user.uid, snapshot.val());
            });
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/user-not-found") {
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                const user = userCredential.user;
                var lgDate = new Date();
                const defaultUser = {
                  last_login: lgDate,
                  email: email,
                  password: password,
                  level: 1,
                  greenpoints: 0,
                  favor: 0,
                  levelProgress: 0,
                  roadLevel: 2,
                  factoryLevel: 2,
                  parkLevel: 2,
                  officesLevel: 2,
                  landfillLevel: 2,
                  coastLevel: 2,
                  gasstationLevel: 2,
                  shopItems: [""],
                };
                set(ref(db, "users/" + user.uid), defaultUser).then(() => {
                  // TODO: LOADING ICON
                  navigateGame(user.uid, defaultUser);
                });
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                switch (errorCode) {
                  case "auth/invalid-email":
                    alert("Please enter a valid email.");
                    break;
                  case "auth/weak-password":
                    alert(
                      "Please enter a stronger password, with a minimum of 6 characters."
                    );
                    break;
                  default:
                    alert("Please enter a valid email and password.");
                }
                console.log(errorMessage);
              });
          }
        });
    })
    .catch((error) => {
      console.log(error);
    });
}
function navigateGame(uid, snapshot) {
  console.log("Start Saving");
  localStorage.setItem("UID", uid);
  localStorage.setItem("user", JSON.stringify(snapshot));
  console.log("End Saving");
  if (
    localStorage.getItem("user") &&
    localStorage.getItem("UID")
  ) {
    console.log("Changing URL")
    window.location.href = localStorage.getItem("URL") + "/GAME-PAGE/main.html";
  }
}
