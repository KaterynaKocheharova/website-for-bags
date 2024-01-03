"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const myBurgerButton = document.getElementById("myBurgerButton");
  myBurgerButton.addEventListener("click", function () {
    myBurgerButton.classList.toggle("clicked");
  });
});
