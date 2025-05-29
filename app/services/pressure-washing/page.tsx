import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SuperBubblyHeader } from "@/components/super-bubbly-header"
import { PressureWashingSteps } from "@/components/pressure-washing-steps"

export const metadata = {
  title: "Pressure Washing Services | Blues Cleaning Crew",
  description: "Professional pressure washing services for driveways, decks, patios, and more.",
}

export default function PressureWashingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SuperBubblyHeader />

      <main className="flex-1">
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                  Professional Pressure Washing Services
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Restore the appearance of your exterior surfaces with our professional pressure washing services. We
                  use state-of-the-art equipment and eco-friendly cleaning solutions to remove dirt, grime, mold, and
                  mildew.
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
                      <h3 className="font-semibold text-blue-900">Driveway & Walkway Cleaning</h3>
                      <p className="text-gray-600">
                        Remove oil stains, dirt, and grime from concrete and paver surfaces.
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
                      <h3 className="font-semibold text-blue-900">Deck & Patio Restoration</h3>
                      <p className="text-gray-600">
                        Revitalize wood, composite, and stone surfaces to look like new again.
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
                      <h3 className="font-semibold text-blue-900">House Siding Cleaning</h3>
                      <p className="text-gray-600">
                        Safely remove dirt, algae, and mildew from vinyl, aluminum, and other siding materials.
                      </p>
                    </div>
                  </div>
                  {/* Add insurance information to the features list */}
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
                    <Link href="/quote?service=pressure-washing">GET YOUR FREE QUOTE</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/services/pressure-washing-service.png"
                    alt="Professional pressure washing service"
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

        {/* Before and After Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">BEFORE & AFTER</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See the dramatic difference our professional pressure washing services can make.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="max-w-2xl mx-auto">
                  <Image
                    src="/roof-cleaning-before-after.png"
                    alt="Roof cleaning before and after - showing moss and algae removal"
                    width={900}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Roof Cleaning Transformation</h3>
                  <p className="text-gray-600">
                    Our specialized cleaning process removes years of moss, algae, and dirt buildup, restoring your roof
                    to its original appearance while extending its lifespan.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button className="rounded-full px-8 py-6 text-lg bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/quote?service=pressure-washing">SCHEDULE YOUR CLEANING</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* New Process Steps Component */}
        <PressureWashingSteps />

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                  Benefits of Professional Pressure Washing
                </h2>
                <p className="text-lg text-gray-600">
                  Discover why professional pressure washing is essential for maintaining your property.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Enhances Curb Appeal</h3>
                  <p className="text-gray-600">
                    Pressure washing can dramatically improve the appearance of your property, making it look fresh and
                    well-maintained.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Prevents Damage</h3>
                  <p className="text-gray-600">
                    Regular cleaning removes harmful substances like mold, algae, and dirt that can deteriorate surfaces
                    over time.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Healthier Environment</h3>
                  <p className="text-gray-600">
                    Eliminating mold, mildew, and allergens from exterior surfaces creates a healthier environment
                    around your home.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Increases Property Value</h3>
                  <p className="text-gray-600">
                    A clean, well-maintained exterior can significantly increase your property's value and
                    marketability.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button className="rounded-full px-8 py-6 text-lg bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/quote?service=pressure-washing">GET YOUR FREE QUOTE</Link>
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
