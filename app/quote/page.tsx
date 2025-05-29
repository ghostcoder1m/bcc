import Link from "next/link"
import { Suspense } from "react"
import QuotePageClient from "./QuotePageClient"
import { SuperBubblyHeader } from "@/components/super-bubbly-header"

export const metadata = {
  title: "Request a Quote | Blues Cleaning Crew",
  description: "Request a free quote for professional window cleaning and exterior cleaning services.",
}

function QuoteFormSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-pulse">
      <div className="h-8 bg-gray-200 rounded mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
      <div className="h-32 bg-gray-200 rounded my-6"></div>
      <div className="h-12 bg-gray-200 rounded-full"></div>
    </div>
  )
}

export default function QuotePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SuperBubblyHeader />

      <main className="flex-1 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">GET YOUR FREE QUOTE</h1>
              <p className="text-lg text-blue-600 max-w-2xl mx-auto">
                Fill out the form below and our team will provide you with a detailed quote for our professional
                cleaning services.
              </p>
            </div>

            <Suspense fallback={<QuoteFormSkeleton />}>
              <QuotePageClient />
            </Suspense>
          </div>
        </div>
      </main>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
