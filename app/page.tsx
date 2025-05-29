"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronLeft, ChevronRight } from "lucide-react"
import { Suspense, useState, useEffect } from "react"
import { QuoteRequestForm } from "@/components/quote-request-form"
import { SocialMediaCarousel } from "@/components/social-media-carousel"
import { BubblyButton } from "@/components/bubbly-button"
import { BubbleCard } from "@/components/bubble-card"
import { SuperBubblyHeader } from "@/components/super-bubbly-header"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"

import { motion, AnimatePresence } from "framer-motion"
import { RealisticBubbles } from "@/components/realistic-bubbles"

function QuoteFormWrapper() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      }
    >
      <QuoteRequestForm />
    </Suspense>
  )
}

const locations = [
  {
    city: "OTTAWA",
    province: "Ontario",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179436.12384652547!2d-76.02772484179685!3d45.34992526000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1714936800000!5m2!1sen!2sca",
    link: "/quote?city=ottawa",
  },
  {
    city: "MONTREAL",
    province: "Quebec",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178784.32549756595!2d-73.87203984179687!3d45.55884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC!5e0!3m2!1sen!2sca!4v1714937300000!5m2!1sen!2sca",
    link: "/quote?city=montreal",
  },
  {
    city: "KINGSTON",
    province: "Ontario",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90925.21101534698!2d-76.59122384179687!3d44.22976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2ab0674408ea9%3A0x76a75495d3d97629!2sKingston%2C%20ON!5e0!3m2!1sen!2sca!4v1714937400000!5m2!1sen!2sca",
    link: "/quote?city=kingston",
  },
]

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocation((prev) => (prev + 1) % locations.length)
    }, 5000) // Auto-scroll every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const nextLocation = () => {
    setCurrentLocation((prev) => (prev + 1) % locations.length)
  }

  const prevLocation = () => {
    setCurrentLocation((prev) => (prev - 1 + locations.length) % locations.length)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SuperBubblyHeader />

      <main className="flex-1">
        <section className="relative min-h-[85vh] md:flex md:items-center md:justify-center overflow-hidden">
          {/* Hero image - squeegee cleaning action */}
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33F8B31C-B534-4DA8-A07C-AFE7BBEF8723-Msv8h5QQCNIemYZePWzgkqQaR1jxyV.jpeg"
              alt="Professional window cleaning in action - squeegee creating crystal clear results"
              fill
              className="object-cover object-[center_20%] sm:object-center md:object-center scale-100 sm:scale-110 md:scale-100"
              priority
            />
          </div>

          {/* Content positioned in the clean area */}
          <div className="relative z-20 text-center max-w-2xl mx-auto px-6 pt-16 pb-32 md:ml-auto md:mr-4 lg:mr-16 xl:mr-24 md:pb-40 md:pt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="md:mt-16"
            >
              <div className="p-6 md:p-8">
                {/* Main heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-2xl"
                  style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
                >
                  DIRTY HOUSE?
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-6 drop-shadow-xl"
                  style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
                >
                  WE CAN FIX THAT
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/quote"
                      className="inline-flex items-center justify-center bg-white text-blue-600 font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg shadow-2xl hover:shadow-3xl transition-all border-2 border-white hover:bg-blue-50"
                    >
                      GET YOUR FREE QUOTE
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">OUR SERVICES</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
              <p className="text-xl text-blue-400 font-medium">PROFESSIONAL CLEANING SOLUTIONS</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Window Cleaning */}
              <Link href="/services/window-cleaning" className="group">
                <BubbleCard className="text-center h-full transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                    <Image
                      src="/services/window-cleaning-service.png"
                      alt="Professional window cleaning service"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">Window Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Professional window cleaning for residential and commercial properties.
                  </p>
                  <div className="flex justify-center">
                    <div className="bg-blue-100 text-blue-500 font-medium py-2 px-4 rounded-full inline-flex items-center gap-2 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      Learn More
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
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </BubbleCard>
              </Link>

              {/* Gutter Cleaning */}
              <Link href="/services/gutter-cleaning" className="group">
                <BubbleCard className="text-center h-full transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                    <Image
                      src="/services/gutter-cleaning-service.png"
                      alt="Professional gutter cleaning service"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">Gutter Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Keep your gutters clear and functioning properly with our professional cleaning service.
                  </p>
                  <div className="flex justify-center">
                    <div className="bg-blue-100 text-blue-500 font-medium py-2 px-4 rounded-full inline-flex items-center gap-2 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      Learn More
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
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </BubbleCard>
              </Link>

              {/* Pressure Washing */}
              <Link href="/services/pressure-washing" className="group">
                <BubbleCard className="text-center h-full transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                    <Image
                      src="/services/pressure-washing-service.png"
                      alt="Professional pressure washing service"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">Pressure Washing</h3>
                  <p className="text-gray-600 mb-4">
                    Restore the appearance of your exterior surfaces with our pressure washing service.
                  </p>
                  <div className="flex justify-center">
                    <div className="bg-blue-100 text-blue-500 font-medium py-2 px-4 rounded-full inline-flex items-center gap-2 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      Learn More
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
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </BubbleCard>
              </Link>
            </div>

            <div className="mt-12 text-center">
              <BubblyButton size="lg" asChild>
                <Link href="/quote">GET YOUR FREE QUOTE</Link>
              </BubblyButton>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section - Sliding Carousel */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 md:py-24 relative overflow-hidden">
          {/* Decorative bubbles */}
          <div className="absolute inset-0 pointer-events-none">
            <RealisticBubbles color="blue" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 text-shadow-bubble"
              >
                WHAT OUR CUSTOMERS SAY
              </motion.h2>
              <div className="w-32 h-2 bg-blue-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl md:text-2xl text-blue-600 font-medium">
                Join hundreds of satisfied homeowners and businesses
              </p>
            </div>

            {/* Testimonials Carousel */}
            <TestimonialsCarousel />

            <div className="flex justify-center gap-2 mb-16">
              <div className="w-8 h-1.5 rounded-full bg-blue-500"></div>
              <div className="w-2 h-1.5 rounded-full bg-blue-200"></div>
            </div>

            {/* Enhanced Satisfied Customers Counter */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-full p-8 shadow-2xl border-4 border-white/70">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl p-3">
                    <Image
                      src="/blues-cleaning-crew-logo.png"
                      alt="Blues Cleaning Crew Logo"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Counter badge */}
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xl font-bold rounded-full w-16 h-16 flex items-center justify-center shadow-xl border-3 border-white">
                      100+
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-full p-8 shadow-2xl border-4 border-white/70">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-green-400 to-green-500 text-white text-sm font-bold rounded-full px-4 py-2 flex items-center justify-center shadow-xl border-3 border-white">
                      INSURED
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center lg:text-left max-w-md"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                    Satisfied
                  </span>{" "}
                  <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                    Customers
                  </span>
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Join our growing family of happy customers who enjoy{" "}
                  <span className="font-bold text-blue-600">crystal-clear views</span> through{" "}
                  <span className="font-bold text-blue-600">spotless windows</span>!
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <BubblyButton size="lg" asChild>
                    <Link href="/quote">GET YOUR FREE QUOTE</Link>
                  </BubblyButton>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Proudly Serving Section - Updated with Carousel */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4 text-shadow-bubble">PROUDLY SERVING</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                {/* Navigation Arrows */}
                <button
                  onClick={prevLocation}
                  className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-all"
                  aria-label="Previous location"
                >
                  <ChevronLeft className="h-6 w-6 text-blue-900" />
                </button>

                <button
                  onClick={nextLocation}
                  className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-all"
                  aria-label="Next location"
                >
                  <ChevronRight className="h-6 w-6 text-blue-900" />
                </button>

                {/* Location Cards */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentLocation}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BubbleCard className="text-center">
                      <div className="w-full h-48 md:h-64 mx-auto mb-6 rounded-2xl overflow-hidden">
                        <iframe
                          src={locations[currentLocation].mapSrc}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={false}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Google Map of ${locations[currentLocation].city}, ${locations[currentLocation].province}`}
                          className="w-full h-full"
                        ></iframe>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                        {locations[currentLocation].city}
                      </h3>
                      <p className="text-xl text-blue-600 mb-6">{locations[currentLocation].province}</p>
                      <BubblyButton size="md" asChild>
                        <Link href={locations[currentLocation].link}>Get Quote</Link>
                      </BubblyButton>
                    </BubbleCard>
                  </motion.div>
                </AnimatePresence>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                  {locations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentLocation(index)}
                      className={`transition-all duration-300 ${
                        currentLocation === index
                          ? "w-8 h-2 bg-blue-500 rounded-full"
                          : "w-2 h-2 bg-blue-200 rounded-full hover:bg-blue-300"
                      }`}
                      aria-label={`Go to ${locations[index].city}`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-16 text-center">
                <BubblyButton variant="secondary" size="lg" asChild>
                  <Link href="/locations">VIEW ALL LOCATIONS</Link>
                </BubblyButton>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Carousel Section */}
        <SocialMediaCarousel />

        {/* Quote Request Form Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">GET YOUR FREE QUOTE</h2>
                <p className="text-lg text-blue-600 max-w-2xl mx-auto">
                  Fill out the form below and our team will provide you with a detailed quote for our professional
                  cleaning services.
                </p>
              </div>

              <QuoteFormWrapper />
            </div>
          </div>
        </section>

        {/* Modern Beautiful Footer */}
        <footer className="relative overflow-hidden pt-20 pb-10 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 opacity-80"></div>
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/10 to-transparent"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-700/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-700/20 blur-3xl"></div>

          <div className="container relative mx-auto px-4 md:px-6">
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white rounded-lg p-2">
                  <Image
                    src="/blues-cleaning-crew-logo.png"
                    alt="Blues Cleaning Crew Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
              </div>
              <p className="text-blue-200 text-lg max-w-md text-center">
                Professional window cleaning services that deliver spotless results every time.
              </p>
            </div>

            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-white text-xl font-bold relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-blue-400">
                  Contact Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-800/50 p-2 rounded-lg mt-1">
                      <Phone className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-white font-medium">(613) 716-9705</p>
                      <p className="text-blue-300 text-sm">Sun-Mon: 8am - 8pm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-800/50 p-2 rounded-lg mt-1">
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
                        className="text-blue-300"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">contact@bluescleaningcrew.com</p>
                      <p className="text-blue-300 text-sm">For quotes & inquiries</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h3 className="text-white text-xl font-bold relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-blue-400">
                  Our Services
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/quote?service=window-cleaning"
                      className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-white transition-colors"></span>
                      Window Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/quote?service=pressure-washing"
                      className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-white transition-colors"></span>
                      Pressure Washing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/quote?service=gutter-cleaning"
                      className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-white transition-colors"></span>
                      Gutter Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/quote?service=solar-panel-cleaning"
                      className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-white transition-colors"></span>
                      Solar Panel Cleaning
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-6">
                <h3 className="text-white text-xl font-bold relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-blue-400">
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/about"
                      className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-white transition-colors"></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations"
                      className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-white transition-colors"></span>
                      Locations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-white transition-colors"></span>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-white transition-colors"></span>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-white transition-colors"></span>
                      <span>Fully Insured</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="space-y-6">
                <h3 className="text-white text-xl font-bold relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-blue-400">
                  Stay Connected
                </h3>
                <p className="text-blue-200">Subscribe to our newsletter for tips, special offers, and updates.</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    const form = e.target as HTMLFormElement
                    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement
                    if (emailInput.value) {
                      form.style.display = "none"
                      const successMessage = document.getElementById("newsletter-success")
                      if (successMessage) successMessage.style.display = "block"
                    }
                  }}
                  className="flex"
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-400 transition-colors text-white px-4 py-3 rounded-r-lg font-medium"
                  >
                    Subscribe
                  </button>
                </form>
                <div id="newsletter-success" className="bg-blue-800/50 p-4 rounded-lg text-blue-100 hidden">
                  <p className="font-medium">Coming Soon!</p>
                  <p className="text-sm mt-1">
                    Thank you for your interest. Our newsletter is currently in development.
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4 mt-6">
                  <Link
                    href="https://www.instagram.com/bluescleaningcrew?igsh=MTY2aDk5eG85MjZ2&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-800/50 p-3 rounded-full hover:bg-blue-700 transition-colors group"
                  >
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
                      className="text-blue-300 group-hover:text-white transition-colors"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-blue-800/50">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-blue-300 text-sm">
                  © {new Date().getFullYear()} Blues Cleaning Crew. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <Link href="/privacy-policy" className="text-blue-300 hover:text-white text-sm transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-blue-300 hover:text-white text-sm transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/sitemap" className="text-blue-300 hover:text-white text-sm transition-colors">
                    Sitemap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
