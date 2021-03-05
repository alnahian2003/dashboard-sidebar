const showNavbar = (toggleId, navId, bodyId, headerId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodyPd = document.getElementById(bodyId),
    headerPd = document.getElementById(headerId);

  // Validate that all variables exist
  if (toggle && nav && headerPd) {
    toggle.addEventListener("click", () => {
      // Show Navbar
      nav.classList.toggle("show");
      // Add Padding To Body
      bodyPd.classList.toggle("body-pd");

      // Add Padding to Header
      headerPd.classList.toggle("body-pd");
    });
  }
};

showNavbar("header-toggle", "l-navbar", "body-pd", "header");

// Link Active
const linkClr = document.querySelectorAll(".nav-item");

function clrLnk() {
  if (linkClr) {
    linkClr.forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
  }
}
linkClr.forEach((i) => i.addEventListener("click", clrLnk));
