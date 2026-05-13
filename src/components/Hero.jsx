import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, ShieldCheck, ArrowDown } from "lucide-react";
import { easing, slowEasing, staggerContainer, fadeUp } from "../lib/animations";

const STATS = [
  { value: "10+", label: "Global Suppliers" },
  { value: "5+", label: "Countries Served" },
  { value: "10", label: "Product Categories" },
  { value: "100%", label: "Quality Assured" },
];

export default function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[10%] -bottom-[10%]"
      >
        <img
          src="/images/hero-1.png"
          alt="Premium dry food imports"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/60 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col flex-1 justify-end pb-0"
      >
        <div className="container mx-auto px-6 pt-40 pb-16 flex flex-col flex-1 justify-end">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easing }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-8 w-fit"
          >
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>Global Dry Food Imports</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: slowEasing }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6 max-w-5xl"
          >
            Premium Dry Food{" "}
            <span className="text-emerald-400 italic font-light font-serif">
              Imports
            </span>
            <br className="hidden md:block" />
            You Can Trust
          </motion.h1>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: easing }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed"
          >
            Reliable sourcing. Consistent quality. Global reach.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: easing }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold shadow-xl transition-all active:scale-95"
            >
              Request a Quote
            </a>

            <a
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold transition-all active:scale-95"
            >
              View Products
              <ArrowDown className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.9 }}
            className="border-t border-white/15 pt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: easing }}
              >
                <span className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-white/50 mt-1 block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: slowEasing }}
          className="absolute right-8 bottom-44 md:right-16 md:bottom-48 hidden md:flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 max-w-[220px]"
        >
          <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">
              International Food Safety
            </p>
            <p className="text-white/50 text-xs">Every shipment certified</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span className="text-white/30 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div> */}
    </section>
  );
}