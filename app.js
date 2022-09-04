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
sr.reveal(".book .book-containerflex .book-containerflex-summary > h3", {
  delay: 300,
});

sr.reveal(".book .book-containerflex .book-containerflex-summary > h2", {
  delay: 600,
});

sr.reveal(
  ".book .book-containerflex .summary-containerflex .summary-listitem.listitem-1",
  { delay: 1200 }
);
sr.reveal(
  ".book .book-containerflex .summary-containerflex .summary-listitem.listitem-2",
  { delay: 1600 }
);
sr.reveal(
  ".book .book-containerflex .summary-containerflex .summary-listitem.listitem-3",
  { delay: 2000 }
);
sr.reveal(".book .book-containerflex > div:last-child", { delay: 500 });

// testimonials section
sr.reveal(
  ".testy .testy-flexcontainer .details h3.testy-details-smallheading",
  { delay: 400 }
);

sr.reveal(".testy .testy-flexcontainer .details h2.testy-details-main", {
  delay: 800,
});

sr.reveal(".testy .testy-flexcontainer .details .circles", { delay: 1200 });

sr.reveal(".testy .testy-flexcontainer .testy-comment", { delay: 500 });

// partners section
sr.reveal(".partners .partners-flexcontainer", { delay: 500 });

// subscribe section
sr.reveal(".subscribe .subscribe-board", { delay: 500 });
sr.reveal(".subscribe .subscribe-board > img ", { delay: 800 });
sr.reveal(".subscribe .subscribe-board h3", { delay: 1200 });
sr.reveal(".subscribe .subscribe-board .newsletter", { delay: 1500 });

// footer section
sr.reveal(".footer .footer-containerflex > div:first-child h2", { delay: 400 });
sr.reveal(".footer .footer-containerflex > div:first-child p", { delay: 800 });
sr.reveal(".footer .footer-containerflex ul.footer-list", { delay: 1000 });
sr.reveal(".footer .footer-containerflex .socials > div.socials-iconsflex", {
  delay: 1200,
});

sr.reveal(".footer .footer-containerflex .socials h3", { delay: 1500 });
sr.reveal(".footer .footer-containerflex .socials > div:last-child", {
  delay: 1800,
});
