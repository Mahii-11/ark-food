import { motion } from "framer-motion";
import { fadeUp, staggerContainer, easing } from "../lib/animations";
import { WHY_CHOOSE } from "../data/productdata";
import SectionReveal from "../components/SectionReveal";

const STATS = [
  { value: "10+", desc: "Verified global suppliers across 4 continents", accent: true },
  { value: "5+", desc: "Countries served with consistent delivery", accent: false },
  { value: "100%", desc: "Food safety compliance on every shipment", accent: false },
  { value: "10", desc: "Core dry food product categories", accent: true },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto">

        {/* Brand story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <SectionReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About ARK World Foods
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are a professional dry food importing company committed to delivering carefully sourced products to wholesalers, retailers, and food service providers.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              With a strong network of international suppliers and strict quality control standards, we ensure that every shipment meets industry regulations and customer expectations.
            </p>

            <p className="text-foreground font-medium leading-relaxed">
              Our mission is simple: to connect global producers with local markets through reliable, high-quality dry food imports.
            </p>
          </SectionReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.value}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: easing }}
                className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  stat.accent
                    ? "bg-primary/5 border-primary/10"
                    : "bg-secondary border-border"
                }`}
              >
                <p className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-foreground">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Why choose */}
        <SectionReveal className="text-center mb-10">
          <h3 className="text-2xl font-bold">
            Why Choose ARK World Foods
          </h3>
        </SectionReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {WHY_CHOOSE.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: easing }}
              className="bg-card p-8 rounded-3xl shadow-sm border border-border hover:shadow-md hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5">
                <item.icon className="w-7 h-7" />
              </div>

              <h3 className="text-lg font-bold mb-3">{item.title}</h3>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}