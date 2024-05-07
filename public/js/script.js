// Gestion du menu de navigation mobile

const navigationToggler = document.querySelector(".mobile-menu__toggler");
const navigationMenu = document.querySelector(".navigation");
let isMenuVisible = false;
console.log("coucou");
navigationToggler.addEventListener("click", () => {
  isMenuVisible = !isMenuVisible;

  toggleMenu();
});

function toggleMenu() {
  if (isMenuVisible) {
    navigationMenu.classList.add("navigation--active");
    navigationToggler.innerHTML =
      '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';
    navigationToggler.ariaLabel = "Fermer le menu de navigation";
    navigationToggler.ariaExpanded = "true";
  } else {
    navigationMenu.classList.remove("navigation--active");
    navigationToggler.innerHTML =
      '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    navigationToggler.ariaLabel = "Ouvrir le menu de navigation";
    navigationToggler.ariaExpanded = "false";
  }
}
