import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Search, Menu, X} from "lucide-react";
import { slowEasing, easing } from "../lib/animations";

const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* ── Top bar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: slowEasing }}
        className="fixed top-[3px] left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/30"
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-10">
          <Link href="/" className="flex flex-col items-center">
            <img
             src="/images/logo.png"
             alt="Ark logo"
             className="h-6 sm:h-8 md:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />

           <span className=" text-[7px] sm:text-[7px] font-semibold tracking-wide text-primary">
             ARK World Foods
          </span>
         </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-[0.75rem] font-medium tracking-[0.12em] uppercase text-foreground/60 hover:text-primary transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-foreground/50 hover:text-primary transition-colors" data-testid="button-search">
              <Search className="w-4 h-4" />
            </button>
            <a
              href="#contact"
              data-testid="button-get-quote-nav"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-sans text-[0.72rem] font-semibold tracking-[0.1em] uppercase shadow-md hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
            >
              Get a Quote
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden p-2 text-foreground/60 hover:text-primary transition-colors"
              data-testid="button-menu"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
            />

            {/* Drawer panel — slides from left */}
            <motion.aside
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 left-0 bottom-0 z-[70] w-[300px] bg-background flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-border/40">
                <div className="flex items-center gap-2.5">
                  <span className="font-serif text-[1.5rem] font-semibold tracking-[-0.02em] text-primary leading-none">ARK</span>
                  <span className="w-px h-4 bg-border/60" />
                  <span className="font-sans text-[0.65rem] font-medium tracking-[0.2em] uppercase text-muted-foreground leading-none">World Foods</span>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-xl text-foreground/50 hover:text-primary hover:bg-secondary transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-4 py-8 gap-1 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.32, delay: 0.08 + i * 0.06, ease: easing }}
                    onClick={() => setDrawerOpen(false)}
                    className="group flex items-center gap-4 px-4 py-4 rounded-xl font-sans text-[0.78rem] font-medium tracking-[0.12em] uppercase text-foreground/60 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                  >
                    <span className="w-5 h-px bg-border group-hover:bg-primary group-hover:w-8 transition-all duration-300" />
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

