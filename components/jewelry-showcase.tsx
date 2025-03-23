"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const jewelryItems = [
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
]

export default function JewelryShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % jewelryItems.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + jewelryItems.length) % jewelryItems.length)
  }

  useEffect(() => {
    if (carouselRef.current) {
      const scrollPosition = activeIndex * (carouselRef.current.scrollWidth / jewelryItems.length)
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }, [activeIndex])

  return (
    <div className="relative">
      {/* Carousel Navigation */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white hover:bg-opacity-70 transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white hover:bg-opacity-70 transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Carousel */}
      <div ref={carouselRef} className="flex overflow-x-hidden snap-x snap-mandatory">
        {jewelryItems.map((item, index) => (
          <div key={item.id} className="min-w-full snap-center px-4">
            <div className="relative group">
              <div className="relative h-[500px] overflow-hidden rounded-lg">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                <span className="text-gold text-sm font-manrope uppercase tracking-wider">{item.category}</span>
                <h3 className="font-cormorant text-2xl md:text-3xl text-white mt-2">{item.name}</h3>

                <Link
                  href={`https://wa.me/1234567890?text=Hello%20AV%20Collection,%20I'm%20interested%20in%20the%20${encodeURIComponent(item.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 luxury-button text-sm"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {jewelryItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-gold w-6" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

