import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/images/av-logo.png" alt="AV Collection" width={120} height={60} />
            </Link>
            <p className="font-manrope text-silver mb-6">
              Discover the finest artificial jewelry collection that embodies elegance, sophistication, and timeless
              beauty.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-silver hover:text-gold transition-colors duration-300">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-silver hover:text-gold transition-colors duration-300">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-silver hover:text-gold transition-colors duration-300">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cormorant text-2xl text-gold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="font-manrope text-silver hover:text-gold transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-manrope text-silver hover:text-gold transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="font-manrope text-silver hover:text-gold transition-colors duration-300"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-manrope text-silver hover:text-gold transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-cormorant text-2xl text-gold mb-6">Collections</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/collections"
                  className="font-manrope text-silver hover:text-gold transition-colors duration-300"
                >
                  Contemporary
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="font-manrope text-silver hover:text-gold transition-colors duration-300"
                >
                  Ethnic
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="font-manrope text-silver hover:text-gold transition-colors duration-300"
                >
                  Bridal
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="font-manrope text-silver hover:text-gold transition-colors duration-300"
                >
                  Festive
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-cormorant text-2xl text-gold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gold mr-3 mt-1 flex-shrink-0" />
                <span className="font-manrope text-silver">
                  123 Luxury Avenue, Fashion District, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gold mr-3 flex-shrink-0" />
                <Link
                  href="tel:+1234567890"
                  className="font-manrope text-silver hover:text-gold transition-colors duration-300"
                >
                  +1 (234) 567-890
                </Link>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gold mr-3 flex-shrink-0" />
                <Link
                  href="mailto:info@avcollection.com"
                  className="font-manrope text-silver hover:text-gold transition-colors duration-300"
                >
                  info@avcollection.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-12 pt-8 text-center">
          <p className="font-manrope text-silver text-sm">
            &copy; {new Date().getFullYear()} AV Collection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

