import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SuperBubblyHeader } from "@/components/super-bubbly-header"
import { GutterCleaningSteps } from "@/components/gutter-cleaning-steps"

export const metadata = {
  title: "Gutter Cleaning Services | Blues Cleaning Crew",
  description: "Professional gutter cleaning services for residential and commercial properties.",
}

export default function GutterCleaningPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SuperBubblyHeader />

      <main className="flex-1">
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                  Professional Gutter Cleaning Services
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Keep your gutters functioning properly with our professional gutter cleaning services. Clogged gutters
                  can lead to water damage, foundation issues, and pest infestations. Our team will ensure your gutters
                  are clean and flowing freely.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
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
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">Residential Gutter Cleaning</h3>
                      <p className="text-gray-600">
                        Complete gutter cleaning for homes of all sizes, including downspout clearing.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
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
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">Commercial Gutter Cleaning</h3>
                      <p className="text-gray-600">
                        Professional gutter maintenance for commercial buildings, offices, and multi-unit properties.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
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
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">Gutter Guard Installation</h3>
                      <p className="text-gray-600">
                        Optional installation of gutter guards to prevent future debris buildup.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
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
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">Fully Insured Service</h3>
                      <p className="text-gray-600">
                        Our comprehensive liability insurance protects your property during all cleaning services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <Button className="rounded-full px-8 py-6 text-lg bg-blue-500 hover:bg-blue-600" asChild>
                    <Link href="/quote?service=gutter-cleaning">GET YOUR FREE QUOTE</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/services/gutter-cleaning-service.png"
                    alt="Professional gutter cleaning service"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 p-1 rounded-full">
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
                        className="text-green-600"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">100% Satisfaction Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Process Steps Component */}
        <GutterCleaningSteps />

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Clean Your Gutters?</h2>
                <p className="text-lg text-gray-600">
                  Regular gutter cleaning is essential for maintaining your home's structural integrity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Prevent Water Damage</h3>
                  <p className="text-gray-600">
                    Clogged gutters can cause water to overflow and damage your roof, fascia, siding, and foundation.
                    Regular cleaning prevents costly repairs.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Avoid Pest Infestations</h3>
                  <p className="text-gray-600">
                    Debris-filled gutters create an ideal breeding ground for insects, birds, and rodents. Clean gutters
                    eliminate these potential habitats.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Protect Your Landscaping</h3>
                  <p className="text-gray-600">
                    Overflowing gutters can damage your garden beds and erode your landscaping. Proper gutter function
                    directs water away from these areas.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Extend Gutter Lifespan</h3>
                  <p className="text-gray-600">
                    The weight of debris and standing water can cause gutters to sag or pull away from your home.
                    Regular cleaning extends the life of your gutter system.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button className="rounded-full px-8 py-6 text-lg bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/quote?service=gutter-cleaning">GET YOUR FREE QUOTE</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
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
