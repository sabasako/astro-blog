const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("toggle");
  menu.classList.toggle("toggle");
  close.classList.toggle("toggle");
});