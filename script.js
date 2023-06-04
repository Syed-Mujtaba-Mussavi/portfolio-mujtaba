const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("open");
};
