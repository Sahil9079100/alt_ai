const nav = document.querySelector(".nav-shell");
const menuButton = document.querySelector(".menu-button");
const menuLinks = document.querySelectorAll(".nav-menu a");

if (nav && menuButton) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("menu-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}
