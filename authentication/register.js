import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Firebase configuration (make sure not to expose these in production)
const firebaseConfig = {
  "REPLACE with your Firebase Configuration (API for Firebase)
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
