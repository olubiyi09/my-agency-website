// Hamburger Toggler
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navUL = document.querySelector(".navbar-list");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
  hamburger.classList.toggle("hide");
});

close.addEventListener("click", () => {
  navUL.classList.toggle("show");
  hamburger.classList.toggle("hide");
});



