"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function StylCieciePage() {
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
    
    // Portfolio filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    const handleFilter = (e: Event) => {
       const btn = e.target as HTMLElement;
       const filter = btn.dataset.filter;
       
       filterBtns.forEach(b => b.classList.remove('active'));
       btn.classList.add('active');
       
       portfolioItems.forEach(item => {
           const category = (item as HTMLElement).dataset.category;
           if (filter === 'all' || category === filter) {
               (item as HTMLElement).style.display = 'block';
           } else {
               (item as HTMLElement).style.display = 'none';
           }
       });
    };
    
    filterBtns.forEach(btn => btn.addEventListener('click', handleFilter));
    // Cleanup not strictly necessary for simple demo but good practice
    return () => {
         filterBtns.forEach(btn => btn.removeEventListener('click', handleFilter));
    }
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
           background: #fafafa;
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
          background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
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
          font-size: 2rem;
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
          color: #fce7f3;
          transform: translateY(-2px);
        }
        .hero {
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url("https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80");
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
          background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
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
          box-shadow: 0 10px 30px rgba(236, 72, 153, 0.4);
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
          color: #1f2937;
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
           border: 2px solid transparent;
         }
         .service-card:hover {
           transform: translateY(-10px);
           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
           border-color: #ec4899;
         }
         .service-card i {
           font-size: 3rem;
           color: #ec4899;
           margin-bottom: 1rem;
         }
         .service-card h3 {
           font-family: "Poppins", sans-serif;
           margin-bottom: 1rem;
           color: #1f2937;
         }
         .service-price {
            font-size: 1.5rem;
            font-weight: 700;
            color: #ec4899;
            margin-top: 1rem;
          }
         .portfolio {
           padding: 5rem 0;
           background: #f9fafb;
         }
         .portfolio-filters {
           display: flex;
           justify-content: center;
           gap: 1rem;
           margin-bottom: 3rem;
           flex-wrap: wrap;
         }
         .filter-btn {
           background: white;
           border: 2px solid #ec4899;
           color: #ec4899;
           padding: 0.5rem 1.5rem;
           border-radius: 25px;
           cursor: pointer;
           transition: all 0.3s ease;
           font-weight: 600;
         }
         .filter-btn:global(.active),
         .filter-btn:hover {
           background: #ec4899;
           color: white;
         }
         .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
          }
          .portfolio-item {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }
          .portfolio-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }
          .portfolio-image {
             height: 250px;
             background-size: cover;
             background-position: center;
           }
           .portfolio-text {
             padding: 1.5rem;
           }
           .portfolio-text h4 {
             font-family: "Poppins", sans-serif;
             margin-bottom: 0.5rem;
             color: #1f2937;
           }
           .portfolio-category {
              color: #ec4899;
              font-weight: 600;
              font-size: 0.9rem;
            }
          .booking {
             padding: 5rem 0;
             background: white;
           }
           .booking-content {
             display: grid;
             grid-template-columns: 1fr 1fr;
             gap: 3rem;
           }
           .booking-form {
             background: #f9fafb;
             padding: 2rem;
             border-radius: 15px;
           }
           .booking-btn {
              background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
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
            .booking-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 10px 30px rgba(236, 72, 153, 0.4);
            }
        /* ... other sections like footer ... */
         footer {
           background: #1f2937;
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
            .booking-content {
             grid-template-columns: 1fr;
           }
           .services-grid, .portfolio-grid {
             grid-template-columns: 1fr;
           }
         }
      `}</style>
      <header>
        <div className="container">
          <nav>
            <div className="logo">Styl & Cięcie</div>
            <ul className="nav-links">
              <li><Link href="#home">Strona główna</Link></li>
              <li><Link href="#services">Usługi</Link></li>
              <li><Link href="#portfolio">Portfolio</Link></li>
              <li><Link href="#booking">Rezerwacje</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="home" className="hero">
        <div className="container">
           <div className="hero-content">
             <h1>Styl & Cięcie</h1>
             <p>Profesjonalny salon fryzjerski z rezerwacjami online</p>
             <Link href="#booking" className="cta-button">Zarezerwuj wizytę</Link>
           </div>
        </div>
      </section>
      <section id="services" className="services">
         <div className="container">
           <h2 className="section-title">Nasze Usługi</h2>
           <div className="services-grid">
              <div className="service-card">
                 <i className="fas fa-cut"></i>
                 <h3>Strzyżenie Damskie</h3>
                 <p>Profesjonalne strzyżenie damskie z myciem i stylizacją</p>
                 <div className="service-price">80 zł</div>
              </div>
              <div className="service-card">
                 <i className="fas fa-male"></i>
                 <h3>Strzyżenie Męskie</h3>
                 <p>Klasyczne i nowoczesne strzyżenia męskie</p>
                 <div className="service-price">50 zł</div>
              </div>
               {/* ... other services ... */}
           </div>
         </div>
      </section>
      <section id="portfolio" className="portfolio">
         <div className="container">
            <h2 className="section-title">Portfolio Fryzur</h2>
            <div className="portfolio-filters">
               <button className="filter-btn active" data-filter="all">Wszystkie</button>
               <button className="filter-btn" data-filter="damskie">Damskie</button>
               <button className="filter-btn" data-filter="meskie">Męskie</button>
               <button className="filter-btn" data-filter="dzieciece">Dziecięce</button>
            </div>
            <div className="portfolio-grid">
               <div className="portfolio-item" data-category="damskie">
                 <div className="portfolio-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')"}}></div>
                 <div className="portfolio-text">
                   <h4>Elegancka fryzura ślubna</h4>
                   <div className="portfolio-category">Damskie</div>
                 </div>
               </div>
               <div className="portfolio-item" data-category="meskie">
                 <div className="portfolio-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')"}}></div>
                 <div className="portfolio-text">
                   <h4>Nowoczesne strzyżenie męskie</h4>
                   <div className="portfolio-category">Męskie</div>
                 </div>
               </div>
            </div>
         </div>
      </section>
      <section id="booking" className="booking">
        <div className="container">
          <h2 className="section-title">Rezerwacja Online</h2>
          <div className="booking-content">
            <div className="booking-form">
               <form id="bookingForm" onSubmit={handleSubmit}>
                 <div className="form-group">
                   <label htmlFor="name">Imię i nazwisko</label>
                   <input type="text" id="name" name="name" required />
                 </div>
                 <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input type="tel" id="phone" name="phone" required />
                 </div>
                 {/* ... other fields ... */}
                 <button type="submit" className="booking-btn">Zarezerwuj wizytę</button>
               </form>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
           <p>&copy; 2024 Styl & Cięcie. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </>
  );
}
