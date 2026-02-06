"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function BellaPage() {
  useEffect(() => {
    // Smooth scrolling
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (targetId) {
        document.querySelector(targetId)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    };
    anchors.forEach((anchor) => anchor.addEventListener("click", handleScroll));
    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", handleScroll));
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <style jsx global>{`
        :global(body) {
           font-family: "Inter", sans-serif;
           line-height: 1.6;
           color: #333;
           background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
           margin: 0;
           padding: 0;
        }
      `}</style>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1rem 0;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: "Poppins", sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
        }
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }
        .nav-links li {
           list-style: none;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .nav-links a:hover {
          color: #f0f0f0;
          transform: translateY(-2px);
        }
        .hero {
          background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
            url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80");
          background-size: cover;
          background-position: center;
          height: 80vh;
          display: flex;
          align-items: center;
          text-align: center;
          color: white;
          margin-top: 70px;
        }
        .hero-content h1 {
          font-family: "Poppins", sans-serif;
          font-size: 3.5rem;
          margin-bottom: 1rem;
          animation: fadeInUp 1s ease;
        }
        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          animation: fadeInUp 1s ease 0.2s both;
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1rem 2rem;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          animation: fadeInUp 1s ease 0.4s both;
        }
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }
        .services {
          padding: 5rem 0;
          background: white;
        }
        .section-title {
          text-align: center;
          font-family: "Poppins", sans-serif;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #2d3748;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: all 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        .service-card i {
          font-size: 3rem;
          color: #667eea;
          margin-bottom: 1rem;
        }
        .service-card h3 {
          font-family: "Poppins", sans-serif;
          margin-bottom: 1rem;
          color: #2d3748;
        }
        .about {
          padding: 5rem 0;
          background: #f8fafc;
        }
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .about-text h2 {
          font-family: "Poppins", sans-serif;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #2d3748;
        }
        .about-image {
          background: url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80");
          background-size: cover;
          background-position: center;
          height: 400px;
          border-radius: 15px;
        }
        .contact {
          padding: 5rem 0;
          background: white;
        }
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        .contact-form {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 15px;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #2d3748;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #667eea;
        }
        .submit-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .contact-item i {
          font-size: 1.5rem;
          color: #667eea;
          width: 40px;
        }
        .social-media {
          background: #2d3748;
          color: white;
          padding: 2rem 0;
          text-align: center;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: white;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          color: #667eea;
          transform: translateY(-3px);
        }
        footer {
          background: #1a202c;
          color: white;
          text-align: center;
          padding: 2rem 0;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .hero-content h1 {
            font-size: 2.5rem;
          }
          .about-content,
          .contact-content {
            grid-template-columns: 1fr;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header>
        <div className="container">
          <nav>
            <div className="logo">Bella</div>
            <ul className="nav-links">
              <li><Link href="#home">Strona główna</Link></li>
              <li><Link href="#services">Usługi</Link></li>
              <li><Link href="#about">O nas</Link></li>
              <li><Link href="#contact">Kontakt</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Salon Kosmetyczny Bella</h1>
            <p>Profesjonalne zabiegi kosmetyczne dla Twojej naturalnej urody</p>
            <Link href="#contact" className="cta-button">Umów wizytę</Link>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Nasze Usługi</h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-spa"></i>
              <h3>Zabiegi Pielęgnacyjne</h3>
              <p>Profesjonalne zabiegi na twarz i ciało, dostosowane do potrzeb Twojej skóry.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-palette"></i>
              <h3>Makijaż</h3>
              <p>Makijaż okolicznościowy, ślubny i dzienny wykonywany przez doświadczonych stylistów.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-hand-sparkles"></i>
              <h3>Manicure & Pedicure</h3>
              <p>Profesjonalne zabiegi na dłonie i stopy z użyciem najwyższej jakości kosmetyków.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>O Nas</h2>
              <p>
                Salon Kosmetyczny Bella to miejsce, gdzie każda kobieta może poczuć się piękna i zadbana. 
                Od ponad 10 lat oferujemy najwyższej jakości usługi kosmetyczne, wykorzystując sprawdzone metody i najlepsze kosmetyki.
              </p>
              <p>
                Nasz zespół składa się z doświadczonych kosmetyczek, które regularnie uczestniczą w szkoleniach i kursach, 
                aby zapewnić Ci najnowocześniejsze zabiegi.
              </p>
            </div>
            <div className="about-image"></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Kontakt</h2>
          <div className="contact-content">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Imię i nazwisko</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Wiadomość</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <button type="submit" className="submit-btn">Wyślij wiadomość</button>
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Adres</h4>
                  <p>ul. Kwiatowa 15<br />00-001 Warszawa</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Telefon</h4>
                  <p>+48 123 456 789</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Godziny otwarcia</h4>
                  <p>Pon-Pt: 9:00 - 19:00<br />Sob: 9:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="social-media">
        <div className="container">
          <h3>Śledź nas w mediach społecznościowych</h3>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 Salon Kosmetyczny Bella. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </>
  );
}
