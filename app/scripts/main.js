// Slick slider
$(document).ready(function () {
  $(".quote-container").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
const toggleMenu = document.querySelector(".header-toggle");
const headerMenu = document.querySelector(".header-menu");
const closeMenu = document.querySelector(".toggle-close");
const listItemsMenu = document.querySelectorAll(".header-menu-link");
const aboutContent = document.querySelectorAll(".about-content");
const aboutItems = document.querySelectorAll(".about-item");
const wedoItems = document.querySelectorAll(".wedo-item-header");
const wedoHandlers = document.querySelectorAll(".wedo-item");

for (let i = 0; i < aboutItems.length; i++) {
  [...wedoItems][i].addEventListener("click", () => {
    [...wedoHandlers].forEach((item) => item.classList.remove("is-active"));
    [...wedoHandlers][i].classList.toggle("is-active");
  });
}

// [...wedoItems].forEach((item) => {
//   item.addEventListener("click", () => {
//     wedoHandler.classList.toggle("is-active");
//   });
// });

// for (let i = 0; i < aboutItems.length; i++) {
//   [...aboutItems][i].addEventListener("mouseenter", function (e) {
//     [...aboutContent][i].style.opacity = 1;
//   });
// }
// for (let i = 0; i < aboutItems.length; i++) {
//   [...aboutItems][i].addEventListener("mouseleave", function (e) {
//     [...aboutContent][i].style.opacity = 0;
//   });
// }

listItemsMenu.forEach((item) => {
  item.addEventListener("click", (e) => {
    listItemsMenu.forEach((item) => {
      item.classList.remove("is-active");
    });
    e.target.classList.add("is-active");
  });
});
toggleMenu.addEventListener("click", function (e) {
  // console.log(e.target);
  headerMenu.classList.add("is-exspand");
});
closeMenu.addEventListener("click", function (e) {
  headerMenu.classList.remove("is-exspand");
});
document.body.addEventListener("click", function (e) {
  if (!headerMenu.contains(e.target) && !toggleMenu.contains(e.target)) {
    headerMenu.classList.remove("is-exspand");
  }
});
