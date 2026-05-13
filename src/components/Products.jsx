import { ChevronRight } from "lucide-react";
import SectionReveal from "../components/SectionReveal";
import Rice from "./products/Rice";
import Cooking from "./products/Cooking";
import Spices from "./products/Spices";

export default function Products() {
  return (
    <section id="products" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionReveal className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Product Range</h2>
            <p className="text-muted-foreground text-lg">
              We import a wide range of dry food products from verified producers. Availability may vary by season and origin.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <a
              href="#contact"
              className="text-primary font-medium text-base hover:text-primary/80 flex items-center gap-1 group transition-colors"
            >
              Request pricing
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </SectionReveal>
        </div>

        <Rice />
        <Cooking />
        <Spices />

       

      </div>
    </section>
  );
}
