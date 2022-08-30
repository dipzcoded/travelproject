const menuBtn = document.querySelector(".open-menu");
const cancelBtn = document.querySelector(".close-menu");
const navLinkBtns = document.querySelectorAll(".nav .btn");
const nav = document.querySelector("nav");
const navListItems = document.querySelectorAll(".nav-item");

const allNavLinks = [...navListItems, ...navLinkBtns];

const toggleMenu = () => {
  nav.classList.toggle("show");

  allNavLinks.forEach((el, index) => {
    if (!el.style.animation) {
      el.style.animation = `slideX 0.5s ease forwards ${index / 5 + 1}s `;
    } else {
      el.style.animation = "";
    }
  });
  menuBtn.classList.toggle("notShowMenu");
  cancelBtn.classList.toggle("notShowMenu");
};

const arrayBtn = [menuBtn, cancelBtn];
arrayBtn.forEach((el) => el.addEventListener("click", toggleMenu));

allNavLinks.forEach((el) => {
  el.addEventListener("click", () => {
    if (Number(window.innerWidth) < 768) {
      toggleMenu();
    }
  });
});
