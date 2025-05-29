import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SuperBubblyHeader } from "@/components/super-bubbly-header"
import { ProcessSteps } from "@/components/process-steps"

export const metadata = {
  title: "Window Cleaning Services | Blues Cleaning Crew",
  description: "Professional window cleaning services for residential and commercial properties.",
}

export default function WindowCleaningPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SuperBubblyHeader />

      <main className="flex-1">
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                  Professional Window Cleaning Services
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Our expert window cleaning services will leave your windows spotless and streak-free. We use
                  professional-grade equipment and eco-friendly cleaning solutions to ensure the best results for your
                  home or business.
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
                      <h3 className="font-semibold text-blue-900">Residential Window Cleaning</h3>
                      <p className="text-gray-600">Interior and exterior window cleaning for homes of all sizes.</p>
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
                      <h3 className="font-semibold text-blue-900">Commercial Window Cleaning</h3>
                      <p className="text-gray-600">
                        Professional cleaning for storefronts, office buildings, and multi-story structures.
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
                      <h3 className="font-semibold text-blue-900">Screen Cleaning</h3>
                      <p className="text-gray-600">
                        Thorough cleaning of window screens to remove dirt, pollen, and debris.
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
                    <Link href="/quote?service=window-cleaning">GET YOUR FREE QUOTE</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/services/window-cleaning-service.png"
                    alt="Professional window cleaning service"
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

        <ProcessSteps />

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600">
                  Get answers to common questions about our window cleaning services.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    How often should I have my windows professionally cleaned?
                  </h3>
                  <p className="text-gray-600">
                    For residential properties, we recommend professional window cleaning 2-3 times per year. Commercial
                    properties may require more frequent cleaning, typically every 1-3 months depending on location and
                    environmental factors.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Do I need to be home during the window cleaning service?
                  </h3>
                  <p className="text-gray-600">
                    While it's not necessary for you to be present during the entire service, we do recommend being
                    available at the beginning to discuss any specific concerns or requirements, and at the end to
                    inspect the completed work.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    What if it rains after my windows are cleaned?
                  </h3>
                  <p className="text-gray-600">
                    Our cleaning solutions are designed to help repel water and minimize spotting. However, if it rains
                    within 24 hours of your service and you notice significant spotting, contact us and we'll return to
                    touch up your windows at no additional charge.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Are your cleaning products safe for my family and pets?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we use eco-friendly, biodegradable cleaning solutions that are safe for your family, pets, and
                    plants. Our products are effective at removing dirt and grime without harsh chemicals.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button className="rounded-full px-8 py-6 text-lg bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/quote?service=window-cleaning">GET YOUR FREE QUOTE</Link>
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
