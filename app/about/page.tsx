import Image from "next/image"
import Link from "next/link"
import LuxuryDivider from "@/components/ui/luxury-divider"
import FloatingWhatsAppButton from "@/components/floating-whatsapp-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | AV Collection",
  description: "Learn about AV Collection's journey, values, and commitment to creating timeless artificial jewelry.",
}

export default function AboutPage() {
  return (
    <main className="pt-24 bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/about-hero.jpg" alt="About AV Collection" fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white mb-6 font-light">
            Our <span className="text-gold">Story</span>
          </h1>
          <p className="font-manrope text-lg md:text-xl text-silver max-w-2xl mx-auto">
            Crafting elegance and luxury since 2010
          </p>
        </div>
      </section>

      <LuxuryDivider />

      {/* Our Journey */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-cormorant text-4xl md:text-5xl text-gold mb-6 font-light">Our Journey</h2>
              <p className="font-manrope text-silver mb-6">
                AV Collection was born from a passion for creating jewelry that embodies elegance and sophistication
                without the premium price tag. Founded in 2010, we started as a small boutique in New York, crafting
                unique pieces that captured the essence of luxury.
              </p>
              <p className="font-manrope text-silver mb-6">
                Over the years, we've grown into a renowned brand, recognized for our attention to detail, quality
                craftsmanship, and innovative designs. Our journey has been defined by a commitment to excellence and a
                desire to make luxury accessible to all.
              </p>
              <p className="font-manrope text-silver">
                Today, AV Collection stands as a testament to our founder's vision of creating jewelry that makes every
                woman feel special, confident, and beautiful.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/images/about-journey.jpg" alt="Our Journey" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <LuxuryDivider />

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-deep-green bg-opacity-20">
        <div className="container mx-auto px-4">
          <h2 className="font-cormorant text-4xl md:text-5xl text-gold text-center mb-16 font-light">Our Timeline</h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gold"></div>

            {/* Timeline Items */}
            <div className="space-y-24">
              {/* 2010 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-gold"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="font-cormorant text-3xl text-gold mb-4">2010</h3>
                    <p className="font-manrope text-silver">
                      AV Collection was founded in New York City, starting as a small boutique with a handful of unique
                      designs.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="relative h-[200px] rounded-lg overflow-hidden">
                      <Image src="/images/timeline-2010.jpg" alt="2010 - Foundation" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2015 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-gold"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <div className="relative h-[200px] rounded-lg overflow-hidden">
                      <Image src="/images/timeline-2015.jpg" alt="2015 - Expansion" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="font-cormorant text-3xl text-gold mb-4">2015</h3>
                    <p className="font-manrope text-silver">
                      Expanded our collection to include ethnic and contemporary designs, reaching customers across the
                      country.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2020 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-gold"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="font-cormorant text-3xl text-gold mb-4">2020</h3>
                    <p className="font-manrope text-silver">
                      Launched our online store, bringing AV Collection's luxury jewelry to customers worldwide.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="relative h-[200px] rounded-lg overflow-hidden">
                      <Image src="/images/timeline-2020.jpg" alt="2020 - Online Launch" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-gold"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <div className="relative h-[200px] rounded-lg overflow-hidden">
                      <Image src="/images/timeline-2023.jpg" alt="2023 - Milestone" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="font-cormorant text-3xl text-gold mb-4">2023</h3>
                    <p className="font-manrope text-silver">
                      Celebrated our milestone of serving over 10,000 customers and introduced our exclusive luxury
                      collection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LuxuryDivider />

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-cormorant text-4xl md:text-5xl text-gold text-center mb-16 font-light">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="p-8 border border-gold rounded-lg text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold bg-opacity-10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-gold mb-4">Premium Quality</h3>
              <p className="font-manrope text-silver">
                We use only the finest materials and craftsmanship to create jewelry that stands the test of time.
              </p>
            </div>

            {/* Innovation */}
            <div className="p-8 border border-gold rounded-lg text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold bg-opacity-10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-gold mb-4">Innovation</h3>
              <p className="font-manrope text-silver">
                We constantly push the boundaries of design to create unique and contemporary pieces.
              </p>
            </div>

            {/* Customer Service */}
            <div className="p-8 border border-gold rounded-lg text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold bg-opacity-10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-gold mb-4">Customer Service</h3>
              <p className="font-manrope text-silver">
                We are committed to providing exceptional service and ensuring customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LuxuryDivider />

      {/* Did You Know */}
      <section className="py-16 md:py-24 bg-deep-green bg-opacity-20">
        <div className="container mx-auto px-4">
          <h2 className="font-cormorant text-4xl md:text-5xl text-gold text-center mb-16 font-light">Did You Know?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-black border border-gold rounded-lg text-center">
              <h3 className="font-cormorant text-4xl text-gold mb-2">10,000+</h3>
              <p className="font-manrope text-silver">Happy Customers</p>
            </div>
            <div className="p-6 bg-black border border-gold rounded-lg text-center">
              <h3 className="font-cormorant text-4xl text-gold mb-2">500+</h3>
              <p className="font-manrope text-silver">Unique Designs</p>
            </div>
            <div className="p-6 bg-black border border-gold rounded-lg text-center">
              <h3 className="font-cormorant text-4xl text-gold mb-2">15+</h3>
              <p className="font-manrope text-silver">Countries Served</p>
            </div>
            <div className="p-6 bg-black border border-gold rounded-lg text-center">
              <h3 className="font-cormorant text-4xl text-gold mb-2">24/7</h3>
              <p className="font-manrope text-silver">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      <LuxuryDivider />

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl text-gold mb-6 font-light">Experience Luxury Today</h2>
          <p className="font-manrope text-silver max-w-2xl mx-auto mb-10">
            Discover our exquisite collection and find the perfect piece that speaks to your style and elegance.
          </p>
          <Link href="/collections" className="luxury-button text-xl">
            Explore Collections
          </Link>
        </div>
      </section>

      <FloatingWhatsAppButton />
    </main>
  )
}

