const mainNavList = document.querySelector(".main-nav-list");
const mainNavLinks = document.querySelectorAll(".main-nav-link");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (mainNavList.classList.contains("showMenu")) {
    mainNavList.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    mainNavList.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

mainNavLinks.forEach(function (mainNavList) {
  mainNavList.addEventListener("click", toggleMenu);
});
