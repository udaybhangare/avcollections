"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Collections", href: "/collections" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black bg-opacity-90 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative z-10">
          <div className="w-32 h-16 relative">
            <Image src="/images/av-logo.png" alt="AV Collection" fill className="object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className=" text-lg text-white hover:text-gold transition-colors duration-300 uppercase tracking-wider"
              // font-cormorant
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/1234567890?text=Hello%20AV%20Collection,%20I'm%20interested%20in%20your%20jewelry."
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-button neon-glow"
          >
            Shop Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white z-10" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className=" text-2xl text-white hover:text-gold transition-colors duration-300 uppercase tracking-wider"
              // font-cormorant
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/1234567890?text=Hello%20AV%20Collection,%20I'm%20interested%20in%20your%20jewelry."
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-button neon-glow mt-4"
            onClick={() => setIsOpen(false)}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  )
}

