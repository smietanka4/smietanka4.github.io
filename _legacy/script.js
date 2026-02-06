document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const result = document.getElementById("contactResult");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Zatrzymujemy domyślne zachowanie

      // Pokaż komunikat o wysyłaniu
      result.textContent = "Wysyłam wiadomość...";
      result.className = "loading";

      // Pobierz dane z formularza
      const formData = new FormData(form);

      // Wyślij dane do Formspree przez AJAX
      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            // Sukces
            result.textContent =
              "Dziękuję za wiadomość! Skontaktuję się z Tobą wkrótce.";
            result.className = "success";
            form.reset();
          } else {
            // Błąd
            result.textContent =
              "Wystąpił błąd podczas wysyłania. Spróbuj ponownie.";
            result.className = "error";
          }
        })
        .catch((error) => {
          // Błąd sieci
          result.textContent = "Wystąpił błąd połączenia. Spróbuj ponownie.";
          result.className = "error";
          console.error("Error:", error);
        })
        .finally(() => {
          // Automatyczne ukrycie komunikatu po 5 sekundach
          setTimeout(() => {
            result.textContent = "";
            result.className = "";
          }, 5000);
        });
    });
  }

  // Funkcjonalność FAQ
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Zamykamy wszystkie inne pytania
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
      });

      // Otwieramy kliknięte pytanie (jeśli nie było aktywne)
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
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
