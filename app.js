const menuBtn = document.querySelector(".open-menu");
const cancelBtn = document.querySelector(".close-menu");
const navLinkBtns = document.querySelectorAll(".nav .btn");
const nav = document.querySelector("nav");
const navListItems = document.querySelectorAll(".nav-item");
const headerTag = document.querySelector("header");

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

window.addEventListener("scroll", () => {
  headerTag.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("load", () => {
  headerTag.classList.toggle("sticky", window.scrollY > 0);
});

// scrollreveal
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// showcase section
sr.reveal(".showcase-text h2");
sr.reveal(".showcase-text h1", { delay: 300 });
sr.reveal(".showcase-text > p", { delay: 500 });
sr.reveal(".showcase-btn-flex", { delay: 800 });
sr.reveal(".showcase-flex .showcase-img", { delay: 500 });

// category section
sr.reveal(".category .category-smallheading");
sr.reveal(".category .category-main", { delay: 400 });
sr.reveal(".category .category-containerflex .category-flexitem.flexitem1", {
  delay: 600,
});
sr.reveal(".category .category-containerflex .category-flexitem.flexitem2", {
  delay: 900,
});
sr.reveal(".category .category-containerflex .category-flexitem.flexitem3", {
  delay: 1200,
});
sr.reveal(".category .category-containerflex .category-flexitem.flexitem4", {
  delay: 1500,
});

// destination section
sr.reveal(".destination .destination-smallheading", { delay: 400 });
sr.reveal(".destination .destination-main", { delay: 800 });
sr.reveal(
  ".destination .destination-containerflex .destination-flexitem.destflex-1",
  { delay: 1200 }
);
sr.reveal(
  ".destination .destination-containerflex .destination-flexitem.destflex-2",
  { delay: 1500 }
);
sr.reveal(
  ".destination .destination-containerflex .destination-flexitem.destflex-3",
  { delay: 1800 }
);

// book section
