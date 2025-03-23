"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sophia Williams",
    text: "The quality of AV Collection's jewelry is exceptional. I've received countless compliments on my necklace!",
    rating: 5,
  },
  {
    id: 2,
    name: "Emma Thompson",
    text: "Absolutely stunning pieces that look far more expensive than they are. The attention to detail is remarkable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Olivia Davis",
    text: "I ordered a set for my wedding and was blown away by the elegance and quality. Highly recommend!",
    rating: 5,
  },
  {
    id: 4,
    name: "Isabella Johnson",
    text: "The customer service is as impressive as their jewelry. Quick responses and they helped me find the perfect piece.",
    rating: 4,
  },
  {
    id: 5,
    name: "Ava Wilson",
    text: "These pieces have become my go-to for both everyday wear and special occasions. Simply beautiful!",
    rating: 5,
  },
  {
    id: 6,
    name: "Mia Garcia",
    text: "The ethnic collection is a perfect blend of traditional designs with modern aesthetics. Love it!",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-gold mb-4 font-light">
            Client Testimonials
          </h2>
          <p className="font-manrope text-silver max-w-2xl mx-auto">
            Discover what our clients have to say about their experience with AV Collection.
          </p>
        </motion.div>

        {/* Marquee Animation */}
        <div className="relative overflow-hidden py-10">
          <div className="flex animate-marquee">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="min-w-[300px] md:min-w-[400px] p-6 mx-4 bg-black border border-gold rounded-lg flex flex-col"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${i < testimonial.rating ? "text-gold" : "text-gray-400"}`}
                      fill={i < testimonial.rating ? "#d4af37" : "none"}
                    />
                  ))}
                </div>
                <p className="font-manrope text-white mb-4 flex-grow">"{testimonial.text}"</p>
                <p className="font-cormorant text-gold text-lg">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center p-6 border border-gold rounded-lg">
            <h3 className="font-cormorant text-5xl text-gold mb-2">10,000+</h3>
            <p className="font-manrope text-silver">Happy Customers</p>
          </div>
          <div className="text-center p-6 border border-gold rounded-lg">
            <h3 className="font-cormorant text-5xl text-gold mb-2">500+</h3>
            <p className="font-manrope text-silver">Unique Designs</p>
          </div>
          <div className="text-center p-6 border border-gold rounded-lg">
            <h3 className="font-cormorant text-5xl text-gold mb-2">98%</h3>
            <p className="font-manrope text-silver">Customer Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

