import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { fadeLeft, fadeRight, fadeUp, staggerContainer, easing } from "../lib/animations";

const CONTACT_INFO = [
  { icon: Mail,   label: "Email",       value: "info.arkworldfoods@creativeassociate.co.uk" },
  { icon: Phone,  label: "Phone",       value: "+447736356704" },
  { icon: MapPin, label: "Head Office", value: "Y08, 11 Bryant Avenue, Harold Wood, Romford,  RM13 0AP, London." },
];

const PRODUCT_OPTIONS = [
  { value: "rice", label: "RICE" },
  { value: "cooking-foods", label: "COOKING FOODS" },
  { value: "spices", label: "SPICES" },
  { value: "snacks", label: "SNACKS" },
  { value: "cookies", label: "COOKIES" },
  { value: "sweets", label: "SWEETS" },
  { value: "drinks", label: "DRINKS" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: easing }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md leading-relaxed">
              Looking for a reliable dry food importer? We'd be happy to discuss your sourcing needs. Contact us to request product details, pricing, or partnership opportunities.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {CONTACT_INFO.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: easing }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-secondary border border-border hover:border-primary/20 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-0.5">{item.label}</p>
                    <p className="text-muted-foreground whitespace-pre-line text-[10px] sm:text-[13px] md:text-[15px]">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: easing, delay: 0.15 }}
            className="bg-card text-foreground p-8 md:p-10 rounded-3xl shadow-xl border border-border"
          >
            <h3 className="text-xl font-bold mb-2">Request Product Details or Pricing</h3>
            <p className="text-muted-foreground text-sm mb-8">Tell us what you need and we'll get back to you promptly.</p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    data-testid="input-name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    data-testid="input-company"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  data-testid="input-email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  placeholder="your@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="product">Product Interest</label>
                <select
                  id="product"
                  data-testid="select-product"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                >
                  <option value="">Select a category...</option>
                  {PRODUCT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  data-testid="input-message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 resize-none"
                  placeholder="Describe your sourcing needs, volumes, or any questions..."
                />
              </div>

              <Button
                type="submit"
                data-testid="button-submit-contact"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
              >
                Send Enquiry
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
