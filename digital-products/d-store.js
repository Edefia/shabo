// JavaScript to handle the menu toggle
document.getElementById('mobile-menu').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Toggle the 'active' class on the nav links
});


// JavaScript to adjust the top position of the nav-links
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('nav-links');

// Function to adjust the top position
function adjustNavLinksPosition() {
    const navbarHeight = navbar.offsetHeight; // Get the height of the navbar
    navLinks.style.top = `${navbarHeight}px`; // Set the top property of nav-links
}

// Call the function on page load
window.onload = function() {
    if (window.innerWidth <= 960) { // Assuming 960 is the mobile view breakpoint
        adjustNavLinksPosition();
    }
}

// Optional: Call the function on window resize to adjust if the navbar height changes
window.onresize = function() {
    if (window.innerWidth <= 960) { // Assuming 960 is the mobile view breakpoint
        adjustNavLinksPosition();
    }
}

document.getElementById('mobile-menu').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    const icon = this.querySelector('i'); // Get the icon inside the toggle button

    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none'; // Hide menu
        icon.classList.remove('fa-solid','fa-xmark'); // Remove both classes
        icon.classList.add('fas', 'fa-bars'); // Add the hamburger icon class
    } 
    
    else {
        navLinks.style.display = 'flex'; // Show menu
        icon.classList.remove('fas', 'fa-bars'); // Remove both classes
        icon.classList.add('fa-solid', 'fa-xmark'); // Add the X icon class
    }
});


