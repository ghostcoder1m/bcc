"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const socialPosts = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5D425290-7A09-4908-9626-3CD7ACAB30AE-Oo2XiW4xkPfQlUp6RuU2f31TtlKZfd.jpeg", // WE NEED TO TALK
    link: "https://www.instagram.com/p/DJr-mbYBdu8/",
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4CD14CD2-AC89-46A8-8A07-0C023BD25AE8-iMn2qNnbwyoz2gvWPyZS6VsTkZDmKh.jpeg", // LAST BOOKING
    link: "https://www.instagram.com/p/DJpKlx7vDMR/",
  },
  {
    id: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F04C377A-FE65-4495-8AE5-DB791D52C0A7-wqUjpaREhy0Rv1Q4UmvWLaNtpTjPIg.jpeg", // OUR STORY
    link: "https://www.instagram.com/p/DJmyv6hvzox/",
  },
  {
    id: 4,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2235D554-7741-468A-B634-DB338AE882F1-ckV0DFzY8HjyHsA7Our2j9WoSMF0HF.jpeg", // WE DON'T MIND
    link: "https://www.instagram.com/p/DJ7MNZyvpFC/",
  },
  {
    id: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/99E42E5D-C983-463B-909A-3A15E29BC774-ZvKKL9grjWTDqUxDsBBLhvgtRfqi9k.jpeg", // DAY WITH THE BLUES
    link: "https://www.instagram.com/p/DJuiCszPzTC/",
  },
  {
    id: 6,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/50146228-A399-42CD-9C81-52FF1623622F-jSpC5lTrpbASiPlpYVjQ0Ts0UpMSqE.jpeg", // FEAR LATER!
    link: "https://www.instagram.com/p/DJ933GaPFGK/",
  },
  {
    id: 7,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A8216C46-4E87-454D-B2C4-A5904566F877-a7KJlZM3mByvaKyqvY59G2l62y68fz.jpeg", // WHAT WE DO
    link: "https://www.instagram.com/p/DJ2RAmhh2je/",
  },
]

export function SocialMediaCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 5) // Add a small buffer
      setCanScrollRight(scrollWidth - scrollLeft - clientWidth > 5) // Add a small buffer
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      checkScrollButtons() // Initial check
      container.addEventListener("scroll", checkScrollButtons)
      window.addEventListener("resize", checkScrollButtons)
      return () => {
        container.removeEventListener("scroll", checkScrollButtons)
        window.removeEventListener("resize", checkScrollButtons)
      }
    }
  }, [socialPosts])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8 // Scroll by 80% of visible width
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const nextMobileSlide = () => {
    setActiveIndex((prev) => (prev === socialPosts.length - 1 ? 0 : prev + 1))
  }

  const prevMobileSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? socialPosts.length - 1 : prev - 1))
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-2">FOLLOW ALONG</h2>
          <p className="text-2xl text-blue-400 font-medium">AS WE REDEFINE CLEAN WINDOWS</p>
        </div>

        <div className="relative">
          {/* Desktop Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={cn(
              "absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-all hidden md:block",
              !canScrollLeft && "opacity-50 cursor-not-allowed",
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-8 w-8 text-blue-900" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={cn(
              "absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-all hidden md:block",
              !canScrollRight && "opacity-50 cursor-not-allowed",
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="h-8 w-8 text-blue-900" />
          </button>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={prevMobileSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-all md:hidden"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-8 w-8 text-blue-900" />
          </button>

          <button
            onClick={nextMobileSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-all md:hidden"
            aria-label="Next slide"
          >
            <ChevronRight className="h-8 w-8 text-blue-900" />
          </button>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src={socialPosts[activeIndex].image || "/placeholder.svg?width=400&height=533&query=social+media+post"}
                alt={`Instagram post ${activeIndex + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Link href={socialPosts[activeIndex].link} target="_blank" rel="noopener noreferrer">
                  <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" fill="white" />
                  </div>
                </Link>
              </div>
            </div>
            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {socialPosts.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${activeIndex === index ? "bg-blue-500" : "bg-blue-200"}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Scrollable Container */}
          <div ref={scrollContainerRef} className="hidden md:flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {socialPosts.map((post, index) => (
              <Link
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block flex-shrink-0 w-[280px] lg:w-[20%]"
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
                  <Image
                    src={post.image || "/placeholder.svg?width=400&height=533&query=social+media+post"}
                    alt={`Instagram post ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/50 transition-all">
                      <Play className="h-6 w-6 text-white" fill="white" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-10">
          <Link
            href="https://www.instagram.com/bluescleaningcrew"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
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
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Follow us on Instagram
          </Link>
        </div>
      </div>
    </section>
  )
}
