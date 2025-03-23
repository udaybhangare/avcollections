"use client"

import { useState, useEffect } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  // Don't render on mobile devices
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return null
  }

  return (
    <>
      <div
        className={`fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(212, 175, 55, 0.2)",
          boxShadow: "0 0 20px 5px rgba(212, 175, 55, 0.3)",
          transition: "transform 0.1s ease-out, width 0.2s, height 0.2s, background-color 0.2s",
          width: isClicking ? "24px" : "32px",
          height: isClicking ? "24px" : "32px",
        }}
      ></div>
      <div
        className={`fixed w-4 h-4 rounded-full bg-gold pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s ease-out, width 0.2s, height 0.2s",
          width: isClicking ? "8px" : "4px",
          height: isClicking ? "8px" : "4px",
        }}
      ></div>
    </>
  )
}

