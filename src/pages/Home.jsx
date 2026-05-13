import About from "../components/About";
import Hero from "../components/Hero";
import Products from "../components/Products";
import QualityBanner from "../components/QualityBanner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Products />
      <About />
      <QualityBanner />
      <Contact />
      <Footer />
    </div>
  )
}
