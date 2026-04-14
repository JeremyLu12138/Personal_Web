const menu = document.getElementById("mobile-menu");
const toggles = document.querySelectorAll(".menu-toggle");
const mobileLinks = document.querySelectorAll(".mobile-nav a");

function toggleMenu(forceOpen) {
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !menu.classList.contains("is-open");

  menu.classList.toggle("is-open", shouldOpen);
  menu.setAttribute("aria-hidden", String(!shouldOpen));
  document.body.style.overflow = shouldOpen ? "hidden" : "";

  toggles.forEach((btn) => {
    btn.setAttribute("aria-expanded", String(shouldOpen));
  });
}

toggles.forEach((btn) => {
  btn.addEventListener("click", () => toggleMenu());
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});
