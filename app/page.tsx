import HeroSection from "@/components/hero-section"
import JewelryShowcase from "@/components/jewelry-showcase"
import CollectionSection from "@/components/collection-section"
import TestimonialsSection from "@/components/testimonials-section"
import LuxuryDivider from "@/components/ui/luxury-divider"
import FloatingWhatsAppButton from "@/components/floating-whatsapp-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AV Collection | Timeless Luxury & Grace",
  description:
    "Discover the finest artificial jewelry collection that embodies elegance, sophistication, and timeless beauty.",
}

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black">
      <HeroSection />

      <LuxuryDivider />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-center text-gold mb-12 font-light">
          Exquisite Collections
        </h2>
        <JewelryShowcase />
      </section>

      <LuxuryDivider />

      <CollectionSection
        title="Contemporary Elegance"
        description="Modern designs that capture the essence of today's fashion with timeless appeal."
        imageUrl="/images/contemporary.jpg"
        reverse={false}
      />

      <LuxuryDivider />

      <CollectionSection
        title="Ethnic Treasures"
        description="Traditional designs reimagined with a modern touch, celebrating cultural heritage."
        imageUrl="/images/ethnic.jpg"
        reverse={true}
      />

      <LuxuryDivider />

      <TestimonialsSection />

      <FloatingWhatsAppButton />
    </main>
  )
}

