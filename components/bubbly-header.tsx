"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function BubblyHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)

  return (
    <header className="container mx-auto py-4 px-4 md:px-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/blues-cleaning-crew-logo.png"
            alt="Blues Cleaning Crew Logo"
            width={180}
            height={60}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="tel:+16137169705"
            className="bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors rounded-full px-6 py-3 font-medium flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            CALL US
          </Link>

          <div className="relative">
            <button
              className="flex items-center gap-1 font-medium text-blue-900 hover:text-blue-700"
              onMouseEnter={() => setIsLocationsOpen(true)}
              onMouseLeave={() => setIsLocationsOpen(false)}
            >
              LOCATIONS
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
                className={cn("ml-1 transition-transform duration-200", isLocationsOpen && "rotate-180")}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div
              className={cn(
                "absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white overflow-hidden transition-all duration-200",
                isLocationsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2",
              )}
              onMouseEnter={() => setIsLocationsOpen(true)}
              onMouseLeave={() => setIsLocationsOpen(false)}
            >
              <div className="py-1" role="menu" aria-orientation="vertical">
                <Link
                  href="/quote?city=ottawa"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  role="menuitem"
                >
                  Ottawa, Ontario
                </Link>
                <Link
                  href="/quote?city=montreal"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  role="menuitem"
                >
                  Montreal, Quebec
                </Link>
                <Link
                  href="/quote?city=kingston"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  role="menuitem"
                >
                  Kingston, Ontario
                </Link>
              </div>
            </div>
          </div>

          <Link href="/careers" className="font-medium text-blue-900 hover:text-blue-700">
            CAREERS
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            className="text-blue-900"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white shadow-lg z-50 md:hidden p-4">
            <div className="flex flex-col gap-4">
              <Link
                href="tel:+16137169705"
                className="bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors rounded-full px-6 py-3 font-medium flex items-center gap-2 justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                CALL US
              </Link>

              <Link
                href="/locations"
                className="text-blue-900 hover:text-blue-700 py-2 text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                LOCATIONS
              </Link>

              <Link
                href="/careers"
                className="text-blue-900 hover:text-blue-700 py-2 text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                CAREERS
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
