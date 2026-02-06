export default function Offer() {
  return (
    <section id="oferta">
      <h2>
        <i className="fa-solid fa-tags"></i> Oferta
      </h2>
      <div className="pakiety">
        <div className="pakiet">
          <h3>
            <i className="fa-solid fa-leaf"></i> Podstawowy
          </h3>
          <p>1-3 podstrony, formularz, responsywność</p>
          <span className="cena">1500zł</span>
        </div>
        <div className="pakiet">
          <h3>
            <i className="fa-solid fa-gem"></i> Standard
          </h3>
          <p>4-6 podstron, SEO, mapka, galeria</p>
          <span className="cena">2500zł</span>
        </div>
        <div className="pakiet">
          <h3>
            <i className="fa-solid fa-crown"></i> Premium
          </h3>
          <p>Wszystko + CMS lub rezerwacje</p>
          <span className="cena">4000zł</span>
        </div>
      </div>
    </section>
  );
}
