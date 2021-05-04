const hamburguerMenu = document.querySelector(".wrapper__menu");
const dropDownMenu = document.querySelector(".wrapper__desktop-menu");
const body = document.querySelector(".overlay");

hamburguerMenu.addEventListener("click", () => {
  hamburguerMenu.classList.toggle("open");
  dropDownMenu.classList.toggle("visible");
  body.classList.toggle("active");

  changeMenuBackground(hamburguerMenu, "wrapper__menu");
});

function changeMenuBackground(targetBackground, className) {
  if (targetBackground.className === className) {
    targetBackground.style.backgroundImage =
      "url(/src/assets/images/icon-hamburger.svg)";
  } else {
    targetBackground.style.backgroundImage =
      "url(/src/assets/images/icon-close.svg)";
  }
}
