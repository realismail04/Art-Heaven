'use strict';
// ?============= PRELOADER ===================== //


 const preloader = document.querySelector("[data-preloader]");

 window.addEventListener("load", function () {
   preloader.classList.add("loaded");
   document.body.classList.add("loaded");
 });
 //

// Add a click event listener to the button with the data-nav-toggler attribute
document.querySelector("[data-nav-toggler]").addEventListener("click", function() {
  const menuIcon = document.getElementById("menuIcon");
  // Remove the existing class
  menuIcon.classList.remove("fa-bars");
  // Add the new class
  menuIcon.classList.add("fa-xmark");
});



// ?============= MOBILE NAV TOGGLE ===================== //

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () { 
  navbar.classList.toggle("active"); 
}
navToggler.addEventListener("click", toggleNavbar);








// ?============= HEADER ===================== //
    // ?============= active header when window scrolled to 50px ===================== //

 const header = document.querySelector("[data-header]");

 const activeHeader = function () {
   window.scrollY > 50 ? header.classList.add("active")
     : header.classList.remove("active");
 }
 
 window.addEventListener("scroll", activeHeader);