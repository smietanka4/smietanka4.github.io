import Link from "next/link";

export default function Hero() {
  return (
    <section id="home">
      <h1>Tworzę strony internetowe dla lokalnych biznesów</h1>
      <p>
        Profesjonalnie, szybko i w dobrej cenie. Zobacz moją ofertę i portfolio!
      </p>
      <Link href="/#kontakt" className="cta">
        Zamów stronę
      </Link>
    </section>
  );
}
