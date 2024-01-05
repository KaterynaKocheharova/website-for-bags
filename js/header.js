"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const myBurgerButton = document.getElementById("myBurgerButton");
  const myMobileMenu = document.getElementById("mobileMenu");
  myBurgerButton.addEventListener("click", function () {
    myBurgerButton.classList.toggle("clicked");
    myMobileMenu.classList.toggle("is-open");
  });
});
