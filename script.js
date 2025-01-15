// Ensure the script runs after the DOM content has loaded
document.addEventListener("DOMContentLoaded", function () {
  // Scroll event listener
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Function to toggle the menu
  function toggleMenu() {
    const nav = document.querySelector(".nav"); // Fixed the selector to '.nav'
    nav.classList.toggle("open"); // Toggle the 'open' class
  }

  // Attach the toggleMenu function to the hamburger icon
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const iconButton = document.querySelector(".icon");
  const dropdownContent = document.querySelector(".dropdown-content");

  iconButton.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  // Close the dropdown menu if clicked outside
  document.addEventListener("click", function (e) {
    if (!iconButton.contains(e.target) && !dropdownContent.contains(e.target)) {
      dropdownContent.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(
    ".bento-item.vertical .bento-content video"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    },
    {
      threshold: 0.5, // Play video when 50% of it is visible
    }
  );

  observer.observe(video);
});
