"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Phone, Menu, X, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { BubblyButton } from "./bubbly-button"

interface BubbleProps {
  size: number
  left: string
  top: string
  delay: number
}

const Bubble = ({ size, left, top, delay }: BubbleProps) => {
  return (
    <motion.div
      className="absolute rounded-full bg-blue-100/70 pointer-events-none"
      style={{
        width: size,
        height: size,
        left,
        top,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1.2, 1],
        opacity: [0, 0.7, 0.5],
        y: [0, -15, -30],
      }}
      transition={{
        duration: 2,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        repeatDelay: Math.random() * 5 + 5,
      }}
    />
  )
}

export function SuperBubblyHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [bubbles, setBubbles] = useState<BubbleProps[]>([])

  useEffect(() => {
    // Generate random bubbles (fewer on mobile)
    const isMobile = window.innerWidth < 768
    const bubbleCount = isMobile ? 6 : 12
    const newBubbles: BubbleProps[] = []
    for (let i = 0; i < bubbleCount; i++) {
      newBubbles.push({
        size: Math.random() * (isMobile ? 20 : 30) + 10,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
      })
    }
    setBubbles(newBubbles)

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)

    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 overflow-hidden",
          isScrolled ? "py-2 bg-white/95 shadow-md backdrop-blur-sm" : "py-3 md:py-4 bg-white",
        )}
      >
        {/* Decorative bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {bubbles.map((bubble, index) => (
            <Bubble key={index} {...bubble} />
          ))}
        </div>

        {/* Top bubble border */}
        <div className="absolute top-0 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 rounded-b-full"></div>

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center group">
              <div className="relative overflow-hidden rounded-full p-0.5 md:p-1 bg-gradient-to-r from-blue-100 to-blue-50 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <Image
                  src="/blues-cleaning-crew-logo.png"
                  alt="Blues Cleaning Crew Logo"
                  width={140}
                  height={47}
                  className="h-10 md:h-14 w-auto relative z-10"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-transparent rounded-full animate-pulse"></div>
              </div>
              <div className="ml-2 md:ml-3 flex flex-col">
                <span className="text-base sm:text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight">
                  Blues Cleaning
                </span>
                <span className="text-[10px] sm:text-xs text-blue-500 font-medium tracking-wider hidden sm:block">
                  PROFESSIONAL WINDOW CLEANING
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="tel:+16137169705"
                className="bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors rounded-full px-6 py-3 font-medium flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                CALL US
              </Link>

              <Link href="/locations" className="font-medium text-blue-900 hover:text-blue-700 transition-colors">
                LOCATIONS
              </Link>

              <Link href="/careers" className="font-medium text-blue-900 hover:text-blue-700">
                CAREERS
              </Link>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <BubblyButton size="sm" asChild>
                  <Link href="/quote">GET QUOTE</Link>
                </BubblyButton>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden bg-blue-100 p-2.5 rounded-full text-blue-600 touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-[60px] left-0 right-0 bottom-0 bg-white z-50 md:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="p-6 space-y-4">
                {/* Quick Actions */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Quick Actions</h3>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href="tel:+16137169705"
                      className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl px-6 py-4 font-medium shadow-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5" />
                        <span>Call Now</span>
                      </div>
                      <span className="text-sm opacity-90">(613) 716-9705</span>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link href="/quote" className="block w-full" onClick={() => setIsMenuOpen(false)}>
                      <BubblyButton className="w-full py-4 text-lg">GET FREE QUOTE</BubblyButton>
                    </Link>
                  </motion.div>
                </div>

                {/* Services */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v6m0 6v6" />
                      <path d="m9 9 3 3 3-3" />
                      <path d="m9 15 3-3 3 3" />
                      <path d="M1 12h6m6 0h6" />
                    </svg>
                    Our Services
                  </h3>

                  {[
                    { name: "Window Cleaning", path: "/services/window-cleaning" },
                    { name: "Pressure Washing", path: "/services/pressure-washing" },
                    { name: "Gutter Cleaning", path: "/services/gutter-cleaning" },
                  ].map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Link
                        href={service.path}
                        className="flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition-colors rounded-2xl px-6 py-4"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="font-medium text-blue-900">{service.name}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-500"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Locations */}
                <div className="space-y-3 pt-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Service Areas
                  </h3>

                  {[
                    { city: "Ottawa", province: "Ontario" },
                    { city: "Montreal", province: "Quebec" },
                    { city: "Kingston", province: "Ontario" },
                  ].map((location, index) => (
                    <motion.div
                      key={location.city}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <Link
                        href={`/quote?city=${location.city.toLowerCase()}`}
                        className="flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition-colors rounded-2xl px-6 py-4"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div>
                          <span className="font-medium text-blue-900">{location.city}</span>
                          <span className="text-sm text-blue-600 ml-2">{location.province}</span>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-500"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Other Links */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <Link
                      href="/locations"
                      className="block text-blue-900 hover:text-blue-700 py-3 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All Locations
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <Link
                      href="/careers"
                      className="block text-blue-900 hover:text-blue-700 py-3 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Careers
                    </Link>
                  </motion.div>
                </div>

                {/* Truck Image Section */}
                <div className="pt-6 border-t border-gray-100">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 mb-4">
                      <div className="w-full h-32 rounded-xl overflow-hidden mb-3 relative">
                        <Image
                          src="/window-cleaner-blue-truck.png"
                          alt="Blues Cleaning Crew professional service truck"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-blue-900 mb-1">Professional Service</h4>
                      <p className="text-sm text-blue-600">Fully equipped trucks ready to serve you</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-gray-100">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-center"
                  >
                    <p className="text-sm text-gray-500 mb-3">Follow us on social media</p>
                    <Link
                      href="https://www.instagram.com/bluescleaningcrew?igsh=MTY2aDk5eG85MjZ2&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
