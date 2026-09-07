const $menuBtn = document.querySelector(".header__menu-btn");
const $btnImage = $menuBtn.querySelector("img");
const $menu = document.querySelector(".header__nav");
const mqDesktop = window.matchMedia("(width >= 62rem)");
const $slider = document.querySelector(".slider__slides");

function openMenu() {
  $menu.inert = false;
  $menu.dataset.state = "active";
  $menuBtn.ariaExpanded = "true";
  $btnImage.src = "images/icon-close.svg";
}

function closeMenu() {
  $menu.inert = true;
  $menu.dataset.state = "hidden";
  $menuBtn.ariaExpanded = "false";
  $btnImage.src = "images/icon-hamburger.svg";
}

function toggleMenu() {
  if ($menu.dataset.state === "hidden") {
    openMenu();
  } else {
    closeMenu();
  }
}

function cleanAria() {
  if (mqDesktop.matches) {
    $menu.removeAttribute("inert");
    $menu.removeAttribute("data-state");
    $menu.removeAttribute("inert");
    $btnImage.src = "images/icon-hamburger.svg";
  } else {
    closeMenu();
  }
}

function slider() {
  const { width, x } = document
    .querySelector(".slider__slide")
    .getBoundingClientRect();

  $slider.scrollBy({ left: width, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", cleanAria);
mqDesktop.addEventListener("change", cleanAria);
$menuBtn.addEventListener("click", toggleMenu);
