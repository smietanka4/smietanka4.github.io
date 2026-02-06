import Link from "next/link";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>
        <i className="fa-solid fa-briefcase"></i> Portfolio
      </h2>
      <div className="portfolio-kategorie">
        <div>
          <h3>
            <i className="fa-solid fa-leaf"></i> Podstawowy
          </h3>
          <ul id="portfolio-basic">
            <li>
              <Link href="/portfolio/bella" target="_blank">
                <i className="fa-solid fa-link"></i> Salon Kosmetyczny "Bella"
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <i className="fa-solid fa-gem"></i> Standard
          </h3>
          <ul id="portfolio-standard">
            <li>
              <Link href="/portfolio/autofix" target="_blank">
                <i className="fa-solid fa-link"></i> Warsztat Samochodowy "AutoFix"
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <i className="fa-solid fa-crown"></i> Premium
          </h3>
          <ul id="portfolio-premium">
            <li>
              <Link href="/portfolio/styl-ciecie" target="_blank">
                <i className="fa-solid fa-link"></i> Salon Fryzjerski "Styl & Cięcie"
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
