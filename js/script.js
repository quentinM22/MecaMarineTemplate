// nav burger
const hamburgerToggler = document.querySelector(".hamburger");
const navlinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
  hamburgerToggler.classList.toggle("open");
  navlinksContainer.classList.toggle("open");
  const ariaToggle =
    hamburgerToggler.getAttribute("aria-expanded") == "true" ? "false" : "true";
  hamburgerToggler.setAttribute("aria-expanded", ariaToggle);
};
hamburgerToggler.addEventListener("click", toggleNav);

// transition screen
new ResizeObserver((entries) => {
  if (entries[0].contentRect.width <= 900) {
    navlinksContainer.style.transition = "transform 0.3s ease-out";
  } else {
    navlinksContainer.style.transition = "none";
  }
}).observe(document.body);

