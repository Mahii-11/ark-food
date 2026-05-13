import SectionReveal from "../components/SectionReveal";

export default function QualityBanner() {
  return (
    <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Commitment to Quality
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Quality is at the heart of everything we do. Each product is selected, packed, and shipped with care to preserve freshness and nutritional value. We prioritize compliance with import regulations and food safety requirements in every destination market.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
