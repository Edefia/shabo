"use strict";

// TypeScript for hero section
var typing = new Typed(".text", {
  strings: ["artists.", "Drummers.", "Guitarists.", "Digital Products.", "Lessons.", "Bassists.", "Keyboard Players."],
  typeSpeed: 150,
  backSpeed: 110,
  loop: true
}); // GSAP

gsap.registerPlugin(ScrollTrigger);
var introsplitTypes = document.querySelectorAll(".left-part h1");
introsplitTypes.forEach(function (_char, i) {
  var i_text = new SplitType(_char);
  gsap.to(i_text.chars, {
    y: 0,
    stagger: 0.08,
    // text splitting transition
    duration: 0.3 // full text duration

  });
}); // code for the rating stars

var ratings = document.querySelectorAll('.rating');
ratings.forEach(function (rating) {
  var stars = rating.querySelectorAll('.star');
  var clicked = false;
  var selectedIndex = -1;
  stars.forEach(function (star, index) {
    star.addEventListener('click', function () {
      clicked = true;
      selectedIndex = index;
      stars.forEach(function (s, i) {
        if (i <= selectedIndex) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    });
    star.addEventListener('mouseover', function () {
      if (!clicked) {
        stars.forEach(function (s, i) {
          if (i <= index) {
            s.classList.add('active');
          } else {
            s.classList.remove('active');
          }
        });
      }
    });
    star.addEventListener('mouseout', function () {
      if (!clicked) {
        stars.forEach(function (s) {
          s.classList.remove('active');
        });
      }
    });
  });
}); // JavaScript to handle the menu toggle

document.getElementById('mobile-menu').addEventListener('click', function () {
  var navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active'); // Toggle the 'active' class on the nav links
}); // JavaScript to adjust the top position of the nav-links

var navbar = document.getElementById('navbar');
var navLinks = document.getElementById('nav-links'); // Function to adjust the top position

function adjustNavLinksPosition() {
  var navbarHeight = navbar.offsetHeight; // Get the height of the navbar

  navLinks.style.top = "".concat(navbarHeight, "px"); // Set the top property of nav-links
} // Call the function on page load


window.onload = function () {
  if (window.innerWidth <= 960) {
    // Assuming 960 is the mobile view breakpoint
    adjustNavLinksPosition();
  }
}; // Optional: Call the function on window resize to adjust if the navbar height changes


window.onresize = function () {
  if (window.innerWidth <= 960) {
    // Assuming 960 is the mobile view breakpoint
    adjustNavLinksPosition();
  }
};

document.getElementById('mobile-menu').addEventListener('click', function () {
  var navLinks = document.getElementById('nav-links');
  var icon = this.querySelector('i'); // Get the icon inside the toggle button

  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none'; // Hide menu

    icon.classList.remove('fa-solid', 'fa-xmark'); // Remove both classes

    icon.classList.add('fas', 'fa-bars'); // Add the hamburger icon class
  } else {
    navLinks.style.display = 'flex'; // Show menu

    icon.classList.remove('fas', 'fa-bars'); // Remove both classes

    icon.classList.add('fa-solid', 'fa-xmark'); // Add the X icon class
  }
});