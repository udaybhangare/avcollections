import Image from "next/image"
import Link from "next/link"
import LuxuryDivider from "@/components/ui/luxury-divider"
import FloatingWhatsAppButton from "@/components/floating-whatsapp-button"
import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | AV Collection",
  description:
    "Get in touch with AV Collection for inquiries, custom orders, or any questions about our luxury jewelry.",
}

export default function ContactPage() {
  return (
    <main className="pt-24 bg-black">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/contact-hero.jpg" alt="Contact AV Collection" fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white mb-6 font-light">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="font-manrope text-lg md:text-xl text-silver max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for any inquiries.
          </p>
        </div>
      </section>

      <LuxuryDivider />

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-cormorant text-4xl md:text-5xl text-gold mb-8 font-light">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gold bg-opacity-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl text-white mb-2">Our Location</h3>
                    <p className="font-manrope text-silver">
                      123 Luxury Avenue, Fashion District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gold bg-opacity-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl text-white mb-2">Email Us</h3>
                    <Link
                      href="mailto:info@avcollection.com"
                      className="font-manrope text-silver hover:text-gold transition-colors duration-300"
                    >
                      info@avcollection.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gold bg-opacity-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl text-white mb-2">Call Us</h3>
                    <Link
                      href="tel:+1234567890"
                      className="font-manrope text-silver hover:text-gold transition-colors duration-300"
                    >
                      +1 (234) 567-890
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gold bg-opacity-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl text-white mb-2">Business Hours</h3>
                    <p className="font-manrope text-silver">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-cormorant text-2xl text-white mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-gold bg-opacity-10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-gold bg-opacity-10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-gold bg-opacity-10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-black border border-gold rounded-lg p-8">
              <h3 className="font-cormorant text-3xl text-gold mb-6 text-center">Send Us a Message</h3>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-manrope text-silver mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black border border-gold/50 rounded-md px-4 py-3 font-manrope text-white focus:outline-none focus:border-gold"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-manrope text-silver mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black border border-gold/50 rounded-md px-4 py-3 font-manrope text-white focus:outline-none focus:border-gold"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-manrope text-silver mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-black border border-gold/50 rounded-md px-4 py-3 font-manrope text-white focus:outline-none focus:border-gold"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-manrope text-silver mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-black border border-gold/50 rounded-md px-4 py-3 font-manrope text-white focus:outline-none focus:border-gold"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="w-full luxury-button py-4">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <LuxuryDivider />

      {/* Map */}
      <section className="py-16 md:py-24 bg-deep-green bg-opacity-20">
        <div className="container mx-auto px-4">
          <h2 className="font-cormorant text-4xl md:text-5xl text-gold text-center mb-16 font-light">
            Visit Our Store
          </h2>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425872426698!3d40.74076987138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1679323830987!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <LuxuryDivider />

      {/* WhatsApp CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl text-gold mb-6 font-light">Connect on WhatsApp</h2>
          <p className="font-manrope text-silver max-w-2xl mx-auto mb-10">
            For quick responses and personalized assistance, reach out to us directly on WhatsApp.
          </p>
          <Link
            href="https://wa.me/1234567890?text=Hello%20AV%20Collection,%20I'd%20like%20to%20inquire%20about%20your%20jewelry."
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-button text-xl"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </section>

      <FloatingWhatsAppButton />
    </main>
  )
}

