const yearElement = document.querySelector("#currentYear");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navigation = document.querySelector("#mainNavigation");
    const collapse = window.bootstrap?.Collapse.getInstance(navigation);

    if (collapse) {
      collapse.hide();
    }
  });
});
