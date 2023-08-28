//Importing the firebase methods
import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import {
  set,
  ref,
  get,
  getDatabase,
  update,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";

export const firebaseConfig = {
  apiKey: "AIzaSyBe6BjYgsnEpm13Qa2xQBz_IhR9N3SXTCI",
  authDomain: "suscity-react-eed3e.firebaseapp.com",
  projectId: "suscity-react-eed3e",
  storageBucket: "suscity-react-eed3e.appspot.com",
  messagingSenderId: "709679929448",
  appId: "1:709679929448:web:0c31b7b2a5048014a083dd",
  measurementId: "G-V38FLG8HM9",
  databaseURL: "https://suscity-react-eed3e-default-rtdb.firebaseio.com",
};

//Get inputs from HTML
const submitBtn = document.querySelector("#submit_btn");
const loading = document.getElementById("loading");
const forgetBtn = document.getElementById("forget-link");
const video = document.getElementById("video");
const done = document.getElementById("done-btn");

let email;

if (forgetBtn != null) {
  forgetBtn.addEventListener("click", function () {
    email = window.prompt(
      "Please enter an email for password recovery.",
      "xxx@gmail.com"
    );

    while (!validateEmail(email)) {
      email = window.prompt(
        "That was not a valid email, please try again. ",
        "xxx@gmail.com"
      );
    }
    console.log(email);
    forgetPassword(email);
  });
}

function forgetPassword(email) {
  console.log("Getting Firebase Info");
  showLoading();
  // axios({
  //   method: "get",
  //   url: decodeURIComponent(
  //     "https%3A%2F%2Fstorage-api-qazw.onrender.com%2Fconfig"
  //   ),
  // }).then(function (response) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  sendPasswordResetEmail(auth, email)
    .then(() => {
      dismissLoading();
      alert(
        "Password reset email sent! Please check your spam mail if you can't find it."
      );
    })
    .catch(() => {
      const errorCode = error.code;
      console.log(errorCode);
    });
  // });
}

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

if (window.location.pathname == "/SIGNUP-PAGE/signup.html") {
  submitBtn.addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // localStorage.setItem("URL", "https://sus-city.github.io");

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
}

function showLoading() {
  loading.classList.add("ring");
  document.querySelector(".signup-body").classList.add("blur");
}

function dismissLoading() {
  loading.classList.remove("ring");
  document.querySelector(".signup-body").classList.remove("blur");
}

function signUp(email, password) {
  console.log("Signing In");
  // axios({
  //   method: "get",
  //   url: "https://storage-api-qazw.onrender.com/config",
  // })
  //   .then(function (response) {
  const app = initializeApp(firebaseConfig);
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
      switch (errorCode) {
        case "auth/user-not-found":
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
              function showTutorial() {
                video.classList.add("visible");
                done.classList.add("visible");
              }
              set(ref(db, "users/" + user.uid), defaultUser).then(() => {
                if (confirm("Do you want a tutorial?")) {
                  showTutorial();
                  done.onclick = () => {
                    video.classList.remove("visible");
                    done.classList.remove("visible");
                    showLoading();
                    navigateGame(user.uid, defaultUser);
                  };
                } else {
                  navigateGame(user.uid, defaultUser);
                }
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
          break;
        case "auth/wrong-password":
          alert("Your Password is wrong.");
          dismissLoading();
          break;
      }
      console.log(errorCode);
    });
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
}
function navigateGame(uid, snapshot) {
  console.log("Start Saving");
  localStorage.setItem("UID", uid);
  localStorage.setItem("user", JSON.stringify(snapshot));
  console.log("End Saving");
  if (localStorage.getItem("user") && localStorage.getItem("UID")) {
    console.log("Going to game");
    window.location.pathname = "/GAME-PAGE/main.html";
  }
}
