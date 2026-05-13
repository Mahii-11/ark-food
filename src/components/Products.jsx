import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { fadeUp, staggerContainer, easing } from "../lib/animations";
import { PRODUCTS } from "../data/productdata";
import SectionReveal from "../components/SectionReveal";

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

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"
        >
         {PRODUCTS.map((product) => {
  const firstVariant = product.variants?.[0];

  return (
    <motion.div
      key={product.id}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: easing }}
      className="group cursor-pointer"
      data-testid={`card-product-${product.id}`}
    >
      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-background mb-5 relative shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

        {/* TAG FIXED */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium text-primary rounded-full border border-border/40">
            {firstVariant?.size || "Standard"}
          </span>
        </div>

        <div className="absolute top-4 right-4">
          <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-md">
            ৳ {firstVariant?.price || "0"}
          </span>
        </div>

        {/* ENQUIRE BUTTON */}
        <div className="absolute bottom-4 right-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          <a href="#contact">
            <Button
              size="sm"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg px-4 text-xs font-medium"
            >
              Enquire
            </Button>
          </a>
        </div>
      </div>

      {/* NAME (UNCHANGED) */}
      <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
        {product.name}
      </h3>

      {/* DESCRIPTION FIXED USING VARIANTS */}
      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
        {product.description ||
          `Available sizes: ${product.variants
            ?.map((v) => v.size)
            .join(", ")}`}
      </p>
    </motion.div>
  );
})}
        </motion.div>

      </div>
    </section>
  );
}
