const blankSpace = document.getElementById("closeSpace");
const header__menu = document.getElementById("header__menu");
const header__toggle = document.getElementById("header__toggle");

blankSpace.addEventListener("click", modifyPosExit);
header__toggle.addEventListener("click", modifyPosEnter);

function modifyPosExit() {
  header__menu.classList.remove("header__menu--enter")
  header__menu.classList.add("header__menu--exit")
}

function modifyPosEnter() {
  header__menu.classList.remove("header__menu--exit")
  header__menu.classList.add("header__menu--enter")
}

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"> </span>';
    },
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});