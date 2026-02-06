import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Offer />
      <Process />
      <Portfolio />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
