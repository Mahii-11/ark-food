import About from "../components/About";
import Products from "../components/Products";
import QualityBanner from "../components/QualityBanner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BrandHero from "../components/BrandHero";

export default function Home() {
  return (
    <div>
      <BrandHero />
      <Products />
      <About />
      <QualityBanner />
      <Contact />
      <Footer />
    </div>
  )
}
