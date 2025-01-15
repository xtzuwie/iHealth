import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Firebase configuration (make sure not to expose these in production)
const firebaseConfig = {
  apiKey: "AIzaSyAnZu08uSA2EXwkUyd_1hF2Lqxk4uxQ_9s",
  authDomain: "newhealth-b3603.firebaseapp.com",
  databaseURL: "https://newhealth-b3603-default-rtdb.firebaseio.com",
  projectId: "newhealth-b3603",
  storageBucket: "newhealth-b3603.firebasestorage.app",
  messagingSenderId: "978834053140",
  appId: "1:978834053140:web:c6f2fdf2c4f977a7cbaf01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle registration
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("User registered successfully!");
        // Redirect to login page
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  });

// Handle logout
document.getElementById("logoutButton").addEventListener("click", function () {
  signOut(auth)
    .then(() => {
      alert("User logged out successfully!");
      // Redirect to login page or homepage
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Error logging out: " + error.message);
    });
});
