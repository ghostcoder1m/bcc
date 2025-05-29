"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { BubbleStarIcon } from "@/components/bubbly-icons"

const testimonials = [
  {
    id: 1,
    name: "Michael Tremblay",
    location: "Ottawa",
    type: "Commercial",
    rating: 5,
    text: "Blues Cleaning Crew transformed our storefront windows! They removed years of built-up grime that other companies couldn't tackle.",
    initial: "M",
  },
  {
    id: 2,
    name: "Rebecca Lavoie",
    location: "Montreal",
    type: "Residential",
    rating: 5,
    text: "I was amazed at how quickly and thoroughly the team cleaned our two-story home's windows. The difference is incredible!",
    initial: "R",
  },
  {
    id: 3,
    name: "James Wilson",
    location: "Kingston",
    type: "Residential",
    rating: 5,
    text: "We've tried several window cleaning services over the years, but Blues is by far the best. Their attention to detail is impressive.",
    initial: "J",
  },
  {
    id: 4,
    name: "Sarah Chen",
    location: "Ottawa",
    type: "Commercial",
    rating: 5,
    text: "The team was professional, efficient, and left our office windows spotless. We've scheduled regular cleanings going forward!",
    initial: "S",
  },
  {
    id: 5,
    name: "David Martinez",
    location: "Ottawa",
    type: "Multi-Service",
    rating: 5,
    text: "Outstanding service! They cleaned our gutters and windows in the same visit. Very thorough and the pricing was fair.",
    initial: "D",
  },
  {
    id: 6,
    name: "Lisa Thompson",
    location: "Montreal",
    type: "Commercial",
    rating: 5,
    text: "Managing multiple properties, I need reliable service providers. Blues Cleaning Crew consistently delivers excellent results.",
    initial: "L",
  },
]

export function TestimonialsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollButtons)
      return () => container.removeEventListener("scroll", checkScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320 // Width of one card plus gap
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-3 shadow-lg transition-all ${
          canScrollLeft ? "hover:bg-white hover:shadow-xl opacity-100" : "opacity-50 cursor-not-allowed"
        }`}
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-6 w-6 text-blue-900" />
      </button>

      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-3 shadow-lg transition-all ${
          canScrollRight ? "hover:bg-white hover:shadow-xl opacity-100" : "opacity-50 cursor-not-allowed"
        }`}
        aria-label="Scroll right"
      >
        <ChevronRight className="h-6 w-6 text-blue-900" />
      </button>

      {/* Scrolling Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4 md:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-80 bg-gradient-to-br from-white to-blue-50 border-2 border-blue-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Stars */}
            <div className="flex items-center justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <BubbleStarIcon key={star} className="w-5 h-5" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 mb-4 text-sm italic leading-relaxed line-clamp-4">"{testimonial.text}"</p>

            {/* Customer Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {testimonial.initial}
              </div>
              <div className="flex-1">
                <p className="font-bold text-blue-900">{testimonial.name}</p>
                <p className="text-blue-600 text-sm">{testimonial.location}</p>
                <span className="inline-block mt-1 text-xs text-blue-500 font-medium bg-blue-100 px-2 py-1 rounded-full">
                  {testimonial.type}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-2 text-sm text-blue-600">
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
            className="animate-pulse"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
          <span>Scroll to see more reviews</span>
        </div>
      </div>
    </div>
  )
}
