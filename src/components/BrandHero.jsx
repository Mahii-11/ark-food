import { motion } from "framer-motion";
import { easing, slowEasing } from "../lib/animations";

export default function BrandHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#329944] py-24 md:py-36">

      {/* Decorative arcs */}
      <div className="pointer-events-none absolute -top-36 -left-36 w-[460px] h-[460px] rounded-full border-[52px] border-[#3daf52]/70" />
      <div className="pointer-events-none absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full border-[38px] border-[#3daf52]/50" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full border-[48px] border-[#3daf52]/70" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-[260px] h-[260px] rounded-full border-[32px] border-[#3daf52]/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: slowEasing }}
          className="mb-10"
        >
          <img
            src="/images/logo.png"
            alt="ARK World Foods Logo"
            className="w-48 h-48 md:w-60 md:h-60 object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Brand name — Cormorant Garamond display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: easing }}
          className="mb-3"
        >
          <h2
            className="font-serif font-semibold text-white"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", letterSpacing: "0.12em" }}
          >
            ARK WORLD FOODS
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.38, ease: easing }}
          className="font-sans font-light text-white/70 text-[0.78rem] tracking-[0.2em] uppercase mb-12 max-w-md"
        >
          Premium Dry Food Imports &nbsp;·&nbsp; Global Sourcing &nbsp;·&nbsp; Quality Assured
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.42, ease: easing }}
          className="w-16 h-px bg-white/30 mb-12 origin-center"
        />

      
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.72, ease: easing }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full bg-white text-[#276b34] font-sans text-[0.72rem] font-bold tracking-[0.15em] uppercase shadow-2xl hover:bg-white/92 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-white/20 active:scale-95"
          >
            Get in Touch
          </a>
        </motion.div>

      </div>
    </section>
  );
}
