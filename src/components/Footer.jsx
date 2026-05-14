const PRODUCT_LINKS = [
  "Grains & Cereals",
  "Pulses & Legumes",
  "Rice Varieties",
  "Nuts & Seeds",
  "Dried Fruits",
  "Spices & Specialty",
];

const COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Why Choose Us", href: "#about" },
  { label: "Quality Standards", href: "#about" },
  { label: "Partnerships", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <p className="font-serif text-3xl font-bold tracking-tight text-white mb-4">
              ARK World Foods
            </p>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Connecting global producers with local markets through reliable,
              high-quality dry food imports. Bulk supply. Global sourcing.
              Quality assured.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <div className="space-y-3 text-white/60 text-sm">
              <p>
                <strong>Address:</strong>
                <br />
                Office Y08, 11 Bryant Avenue, 
                <br />
                Harold Wood, Romford, RM13 0AP, London.
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                info@arkworldfoods.com
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                +447736356704
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} CreativeassociateLimited All rights
            reserved..
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/40 hover:text-white text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
