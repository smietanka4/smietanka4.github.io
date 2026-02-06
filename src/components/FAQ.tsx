"use client";

import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Ile czasu zajmuje stworzenie strony?",
      answer:
        "Czas realizacji zależy od złożoności projektu. Proste strony (1-3 podstrony) gotowe są mniej więcej w tydzień, bardziej zaawansowane projekty w 2-3 tygodnie.",
      icon: "fa-clock",
    },
    {
      question: "Czy strona będzie działać na telefonach?",
      answer:
        "Tak! Wszystkie moje strony są w pełni responsywne i optymalizowane pod urządzenia mobilne. Testuję je na różnych rozmiarach ekranów.",
      icon: "fa-mobile-alt",
    },
    {
      question: "Czy strona będzie widoczna w Google?",
      answer:
        "Tak, stosuję podstawowe zasady SEO. W pakietach Standard i Premium oferuję dodatkową optymalizację pod wyszukiwarki.",
      icon: "fa-search",
    },
    {
      question: "Czy będę mógł sam edytować treść?",
      answer:
        "W pakiecie Premium oferuję system CMS (WordPress), który pozwala na łatwe edytowanie treści bez znajomości programowania.",
      icon: "fa-edit",
    },
    {
      question: "Czy oferujesz wsparcie po uruchomieniu?",
      answer:
        "Tak, oferuję 30 dni bezpłatnego wsparcia technicznego po uruchomieniu strony. Później można wykupić pakiet wsparcia.",
      icon: "fa-headset",
    },
  ];

  return (
    <section id="faq">
      <h2>
        <i className="fa-solid fa-question-circle"></i> Najczęściej zadawane pytania
      </h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>
                <i className={`fa-solid ${faq.icon}`}></i> {faq.question}
              </h3>
              <i className="fa-solid fa-chevron-down faq-toggle"></i>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
