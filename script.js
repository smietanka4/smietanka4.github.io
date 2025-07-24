document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const result = document.getElementById("contactResult");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      result.textContent =
        "Dziękuję za wiadomość! Skontaktuję się z Tobą wkrótce.";
      form.reset();
    });
  }
});

// --- Automatyczne podświetlanie aktywnej sekcji w navbarze ---
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function onScroll() {
    const scrollPos = window.scrollY + 80; // uwzględnij wysokość nav
    let currentSection = sections[0];
    for (const section of sections) {
      if (section.offsetTop <= scrollPos) {
        currentSection = section;
      }
    }
    navLinks.forEach((link) => link.classList.remove("active"));
    const activeLink = Array.from(navLinks).find(
      (link) => link.getAttribute("href") === `#${currentSection.id}`
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // wywołaj na start
});
