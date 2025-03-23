import Image from "next/image"
import Link from "next/link"
import LuxuryDivider from "@/components/ui/luxury-divider"
import FloatingWhatsAppButton from "@/components/floating-whatsapp-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Collections | AV Collection",
  description: "Explore our exquisite jewelry collections featuring contemporary and ethnic designs.",
}

const collections = [
  {
    id: 1,
    name: "Necklaces",
    image: "/images/necklace-collection.jpg",
    count: 48,
  },
  {
    id: 2,
    name: "Earrings",
    image: "/images/earrings-collection.jpg",
    count: 36,
  },
  {
    id: 3,
    name: "Bracelets",
    image: "/images/bracelet-collection.jpg",
    count: 24,
  },
  {
    id: 4,
    name: "Rings",
    image: "/images/ring-collection.jpg",
    count: 30,
  },
  {
    id: 5,
    name: "Sets",
    image: "/images/set-collection.jpg",
    count: 18,
  },
  {
    id: 6,
    name: "Anklets",
    image: "/images/anklet-collection.jpg",
    count: 12,
  },
]

const products = [
  {
    id: 1,
    name: "Royal Elegance Necklace",
    image: "/images/necklace-1.jpg",
    category: "Necklaces",
  },
  {
    id: 2,
    name: "Diamond Essence Earrings",
    image: "/images/earrings-1.jpg",
    category: "Earrings",
  },
  {
    id: 3,
    name: "Sapphire Dream Bracelet",
    image: "/images/bracelet-1.jpg",
    category: "Bracelets",
  },
  {
    id: 4,
    name: "Pearl Perfection Set",
    image: "/images/set-1.jpg",
    category: "Sets",
  },
  {
    id: 5,
    name: "Golden Aura Necklace",
    image: "/images/necklace-2.jpg",
    category: "Necklaces",
  },
  {
    id: 6,
    name: "Emerald Whisper Earrings",
    image: "/images/earrings-2.jpg",
    category: "Earrings",
  },
  {
    id: 7,
    name: "Ruby Elegance Ring",
    image: "/images/ring-1.jpg",
    category: "Rings",
  },
  {
    id: 8,
    name: "Crystal Charm Bracelet",
    image: "/images/bracelet-2.jpg",
    category: "Bracelets",
  },
  {
    id: 9,
    name: "Vintage Pearl Earrings",
    image: "/images/earrings-3.jpg",
    category: "Earrings",
  },
  {
    id: 10,
    name: "Sapphire Glow Necklace",
    image: "/images/necklace-3.jpg",
    category: "Necklaces",
  },
  {
    id: 11,
    name: "Emerald Royalty Set",
    image: "/images/set-2.jpg",
    category: "Sets",
  },
  {
    id: 12,
    name: "Diamond Sparkle Anklet",
    image: "/images/anklet-1.jpg",
    category: "Anklets",
  },
]

export default function CollectionsPage() {
  return (
    <main className="pt-24 bg-black">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/collections-hero.jpg" alt="AV Collection Jewelry" fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white mb-6 font-light">
            Our <span className="text-gold">Collections</span>
          </h1>
          <p className="font-manrope text-lg md:text-xl text-silver max-w-2xl mx-auto">
            Explore our exquisite range of premium artificial jewelry
          </p>
        </div>
      </section>

      <LuxuryDivider />

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-cormorant text-4xl md:text-5xl text-gold text-center mb-16 font-light">
            Browse by Category
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div key={collection.id} className="group relative overflow-hidden rounded-lg">
                <div className="relative h-[300px]">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="font-cormorant text-3xl text-white mb-2">{collection.name}</h3>
                  <p className="font-manrope text-silver mb-6">{collection.count} Items</p>
                  <Link href={`#${collection.name.toLowerCase()}`} className="luxury-button text-sm">
                    View Collection
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LuxuryDivider />

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-deep-green bg-opacity-20">
        <div className="container mx-auto px-4">
          <h2 className="font-cormorant text-4xl md:text-5xl text-gold text-center mb-16 font-light">
            Featured Pieces
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 8).map((product) => (
              <div key={product.id} className="group">
                <div className="relative h-[300px] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href={`https://wa.me/1234567890?text=Hello%20AV%20Collection,%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="luxury-button text-sm"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-gold text-sm font-manrope uppercase tracking-wider">{product.category}</span>
                  <h3 className="font-cormorant text-xl text-white mt-1">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="#all-products" className="luxury-button">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <LuxuryDivider />

      {/* All Products */}
      <section id="all-products" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-cormorant text-4xl md:text-5xl text-gold text-center mb-16 font-light">All Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative h-[300px] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href={`https://wa.me/1234567890?text=Hello%20AV%20Collection,%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="luxury-button text-sm"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-gold text-sm font-manrope uppercase tracking-wider">{product.category}</span>
                  <h3 className="font-cormorant text-xl text-white mt-1">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LuxuryDivider />

      {/* CTA */}
      <section className="py-16 md:py-24 bg-deep-green bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl text-gold mb-6 font-light">Find Your Perfect Piece</h2>
          <p className="font-manrope text-silver max-w-2xl mx-auto mb-10">
            Can't find what you're looking for? Contact us directly and our team will help you find the perfect jewelry
            piece.
          </p>
          <Link
            href="https://wa.me/1234567890?text=Hello%20AV%20Collection,%20I'm%20looking%20for%20a%20specific%20jewelry%20piece."
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-button text-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <FloatingWhatsAppButton />
    </main>
  )
}

