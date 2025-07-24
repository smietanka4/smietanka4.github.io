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
