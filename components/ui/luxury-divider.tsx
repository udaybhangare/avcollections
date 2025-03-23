"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"

export default function LuxuryDivider() {
  const dividerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(dividerRef, { once: true, amount: 0.5 })

  useEffect(() => {
    // Create sparkle elements
    const createSparkles = () => {
      if (!dividerRef.current || !isInView) return

      const divider = dividerRef.current
      const sparkleCount = 5

      // Remove existing sparkles
      const existingSparkles = divider.querySelectorAll(".sparkle")
      existingSparkles.forEach((sparkle) => sparkle.remove())

      // Create new sparkles
      for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement("div")
        sparkle.classList.add("sparkle")

        // Position along the line
        sparkle.style.left = `${(i / (sparkleCount - 1)) * 100}%`
        sparkle.style.top = "50%"
        sparkle.style.transform = "translate(-50%, -50%)"

        // Random delay
        sparkle.style.animationDelay = `${Math.random() * 2}s`

        divider.appendChild(sparkle)
      }
    }

    if (isInView) {
      createSparkles()

      // Recreate sparkles periodically
      const interval = setInterval(createSparkles, 3000)

      return () => clearInterval(interval)
    }
  }, [isInView])

  return (
    <div ref={dividerRef} className="relative py-8 flex justify-center items-center">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "80%" } : {}}
        transition={{ duration: 1 }}
        className="h-px bg-gold relative"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold"></div>
      </motion.div>
    </div>
  )
}

