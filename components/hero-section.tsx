"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create sparkle elements
    const createSparkles = () => {
      if (!heroRef.current) return

      const hero = heroRef.current
      const sparkleCount = 100

      // Remove existing sparkles
      const existingSparkles = hero.querySelectorAll(".sparkle")
      existingSparkles.forEach((sparkle) => sparkle.remove())

      // Create new sparkles
      for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement("div")
        sparkle.classList.add("sparkle")

        // Random position
        sparkle.style.left = `${Math.random() * 100}%`
        sparkle.style.top = `${Math.random() * 100}%`

        // Random delay
        sparkle.style.animationDelay = `${Math.random() * 2}s`

        hero.appendChild(sparkle)
      }
    }

    createSparkles()

    // Recreate sparkles periodically
    const interval = setInterval(createSparkles, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/videos/jewelry-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Logo Animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
        <Image src="/images/av-logo.png" alt="AV Collection Logo" fill className="object-contain animate-pulse" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <Image src="/images/av-logo.png" alt="AV Collection" width={200} height={100} className="mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-cormorant text-4xl md:text-6xl lg:text-7xl text-white mb-6 font-light"
        >
          Timeless Luxury <span className="text-gold">&</span> Grace
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-manrope text-lg md:text-xl text-silver max-w-2xl mx-auto mb-10"
        >
          Discover our exquisite collection of premium artificial jewelry that embodies elegance and sophistication.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link
            href="https://wa.me/1234567890?text=Hello%20AV%20Collection,%20I'm%20interested%20in%20your%20jewelry."
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-button neon-glow text-xl"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2 font-manrope">Scroll to Explore</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  )
}

