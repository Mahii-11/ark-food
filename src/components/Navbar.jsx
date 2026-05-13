import { motion } from "framer-motion";
import { Link } from "wouter";
import { Search, Menu } from "lucide-react";
import { Button } from "../components/ui/button";
import { slowEasing } from "../lib/animations";

const NAV_LINKS = ["Home", "Products", "About", "Contact"];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: slowEasing }}
      className="fixed top-[3px] left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-primary">
            ARK
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="p-2 text-foreground/80 hover:text-primary transition-colors"
            data-testid="button-search"
          >
            <Search className="w-5 h-5" />
          </button>
          <Button
            className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-full px-6 shadow-md transition-all duration-200 hover:shadow-primary/25 hover:shadow-lg active:scale-95"
            data-testid="button-get-quote-nav"
          >
            Get a Quote
          </Button>
          <button
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
            data-testid="button-menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
