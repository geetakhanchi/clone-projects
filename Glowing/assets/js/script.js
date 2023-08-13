'use strict';


// add event handler

const addEventonElem = function (elem, type, callback){
    if (elem.length>1){
        for (let i = 0; i< elem.length; i++){
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}

// navbar toggler

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventonElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function() {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventonElem(navbarLinks, "click", closeNavbar);

// header sticky & backtopbtn


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
    if (window.scrollY > 150) {
        header.classList.add("active");
        backTopBtn.classList.add("active");   
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}

addEventonElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
    if ( lastScrolledPos >= window.scrollY){
        header.classList.remove("header-hide");
    } else {
        header.classList.add("header-hide");
    }
    lastScrolledPos = window.scrollY;
}

addEventonElem(window, "scroll", headerSticky);


// scroll reveal effect

const sections = document.querySelectorAll("[data-section]");
const scrollReveal = function () {
    for(i = 0; i < sections.length; i++){
        if(sections[i].getBoundingClientRect().top < window. innerHeight / 2){
            sections[i].classList.add("active");
        }
    }
}

scrollReveal();

addEventonElem(window, "scroll", scrollReveal);