"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageCircle, X } from "lucide-react"

export default function FloatingWhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gold text-black flex items-center justify-center shadow-lg hover:bg-gold-light transition-all duration-300 neon-glow"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Popup */}
      <div
        className={`fixed bottom-24 right-6 w-80 bg-black border border-gold rounded-lg shadow-xl z-50 transition-all duration-300 ${
          isOpen && isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-4 border-b border-gold/30">
          <h3 className="font-cormorant text-xl text-gold">Contact Us</h3>
          <p className="font-manrope text-sm text-silver mt-1">We typically reply within minutes</p>
        </div>
        <div className="p-4">
          <p className="font-manrope text-white mb-4">Hello! How can we help you today?</p>
          <Link
            href="https://wa.me/1234567890?text=Hello%20AV%20Collection,%20I'm%20interested%20in%20your%20jewelry."
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 bg-gold text-black font-manrope text-center rounded-md hover:bg-gold-light transition-colors duration-300"
          >
            Start Chat
          </Link>
        </div>
      </div>
    </>
  )
}

