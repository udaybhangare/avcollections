"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

interface CollectionSectionProps {
  title: string
  description: string
  imageUrl: string
  reverse?: boolean
}

export default function CollectionSection({ title, description, imageUrl, reverse = false }: CollectionSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 overflow-hidden ${reverse ? "bg-deep-green bg-opacity-20" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}>
          {/* Text Content - 30% */}
          <motion.div
            className="w-full md:w-[30%]"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-gold mb-6 font-light">{title}</h2>
            <p className="font-manrope text-silver mb-8">{description}</p>
            <Link href="/collections" className="luxury-button">
              View Collection
            </Link>
          </motion.div>

          {/* Image Content - 70% */}
          <motion.div
            className="w-full md:w-[70%] relative"
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-lg">
              <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

