import { fadeUp, easing, staggerContainer } from "../../lib/animations";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { DrinkData } from "../../data/productdata";

export default function Drink() {
  return (
    <div>
      <div className="text-center mb-12 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easing }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <span className="inline-block px-4 py-2 mb-4 bg-primary/10 text-primary text-xs font-semibold tracking-wider rounded-full uppercase">
            Premium Category
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Drink Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our finest selection of premium beverages and drinks from
            around the world
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6"
      >
        {DrinkData.map((product) => {
          const firstVariant = product.variants?.[0];

          return (
            <motion.div
              key={product.id}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: easing }}
              className="group cursor-pointer h-full flex flex-col"
              data-testid={`card-product-${product.id}`}
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-background mb-3 relative shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                {/* TAG FIXED */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 bg-white/95 backdrop-blur-sm text-xs font-semibold text-gray-900 rounded-lg shadow-sm">
                    {firstVariant?.size || "Standard"}
                  </span>
                </div>

                {/* ENQUIRE BUTTON */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <a
                    href="#contact"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Button
                      size="sm"
                      className="rounded-full bg-white text-primary hover:bg-gray-100 shadow-xl px-6 text-sm font-semibold"
                    >
                      Enquire Now
                    </Button>
                  </a>
                </div>
              </div>

              {/* NAME (ENHANCED) */}
              <h3 className="font-serif text-base md:text-lg font-bold mb-1.5 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {product.name}
              </h3>

              {/* DESCRIPTION FIXED USING VARIANTS */}
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-2 flex-grow">
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
  );
}
