import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SuperBubblyHeader } from "@/components/super-bubbly-header"

export const metadata = {
  title: "About Us | Blues Cleaning Crew",
  description: "Learn about Blues Cleaning Crew and our professional window cleaning services.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SuperBubblyHeader />

      <main className="flex-1">
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">ABOUT BLUES CLEANING CREW</h1>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                Professional window cleaning and exterior cleaning services for residential and commercial properties.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/about-team-image.png"
                    alt="Blues Cleaning Crew team members"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-100 p-1 rounded-full">
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
                        className="text-blue-600"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Trusted by 100+ Customers</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Blues Cleaning Crew was founded with a simple mission: to provide exceptional window cleaning and
                  exterior cleaning services that exceed customer expectations. What started as a small operation has
                  grown into a trusted cleaning service across Ottawa, Montreal, and Kingston.
                </p>
                <p className="text-gray-600 mb-6">
                  Our team consists of highly trained professionals who take pride in their work and are committed to
                  delivering spotless results every time. We use professional-grade equipment and eco-friendly cleaning
                  solutions to ensure the best possible outcome for your home or business.
                </p>
                <p className="text-gray-600">
                  At Blues Cleaning Crew, we believe that clean windows and exteriors not only enhance the appearance of
                  your property but also contribute to a healthier living and working environment. That's why we go
                  above and beyond to ensure every job is done right the first time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Why Choose Blues Cleaning Crew?</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
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
                      className="text-white"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Professional Expertise</h3>
                  <p className="text-gray-600">
                    Our team is thoroughly trained in the latest cleaning techniques and safety protocols to ensure
                    high-quality results and a safe working environment.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
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
                      className="text-white"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Fully Insured</h3>
                  <p className="text-gray-600">
                    We carry comprehensive liability insurance, giving you peace of mind knowing that your property is
                    protected during our service.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
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
                      className="text-white"
                    >
                      <path d="M3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z" />
                      <path d="M3 6h18" />
                      <path d="M15 10v8" />
                      <path d="M9 10v8" />
                      <path d="M9 2v4" />
                      <path d="M15 2v4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Eco-Friendly Solutions</h3>
                  <p className="text-gray-600">
                    We use environmentally friendly cleaning products that are effective yet safe for your family, pets,
                    and the planet.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
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
                      className="text-white"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-600">
                    We're not satisfied until you are. Our 100% satisfaction guarantee ensures that we'll address any
                    concerns promptly and professionally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Ready to Experience the Blues Difference?</h2>
              <p className="text-xl text-gray-600 mb-10">
                Contact us today for a free quote and see why homeowners and businesses trust Blues Cleaning Crew for
                their window cleaning and exterior cleaning needs.
              </p>
              <Button className="rounded-full px-8 py-6 text-lg bg-blue-500 hover:bg-blue-600" asChild>
                <Link href="/quote">GET YOUR FREE QUOTE</Link>
              </Button>
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
