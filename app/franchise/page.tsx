import Link from "next/link"
import { Briefcase, CheckCircle } from "lucide-react"

// Import the SuperBubblyHeader component
import { SuperBubblyHeader } from "@/components/super-bubbly-header"

export const metadata = {
  title: "Franchise Opportunities | Blues Cleaning Crew",
  description:
    "Explore franchise opportunities with Blues Cleaning Crew. Join our growing network of professional window cleaning businesses.",
}

export default function FranchisePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Replace the existing header section with: */}
      <SuperBubblyHeader />

      <main className="flex-1 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="bg-blue-100 rounded-full p-6 inline-block mb-6">
                <Briefcase className="h-16 w-16 text-blue-500" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">FRANCHISE OPPORTUNITIES</h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Join the Blues Cleaning Crew family and build your own successful window cleaning business with our proven
              systems and ongoing support.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Why Franchise With Blues Cleaning Crew?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-800">Low Startup Costs</h3>
                    <p className="text-gray-600">
                      Begin your business with minimal initial investment compared to other franchise opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-800">Proven Business Model</h3>
                    <p className="text-gray-600">
                      Leverage our established systems and processes that have been refined over years.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-800">Comprehensive Training</h3>
                    <p className="text-gray-600">
                      Receive thorough training in technical skills, business operations, and customer service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-800">Marketing Support</h3>
                    <p className="text-gray-600">
                      Benefit from our established brand and marketing strategies to attract customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-800">Recurring Revenue</h3>
                    <p className="text-gray-600">
                      Build a business with repeat customers and steady income throughout the year.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-800">Exclusive Territory</h3>
                    <p className="text-gray-600">
                      Secure your own protected service area with no competition from other franchisees.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Franchise Investment</h2>
              <p className="text-gray-600 mb-6">
                Initial franchise fee: $25,000 - $35,000
                <br />
                Total investment: $50,000 - $75,000
                <br />
                Royalty fee: 6% of gross sales
              </p>
              <p className="text-gray-600">
                *Actual costs may vary based on location and other factors. Detailed information will be provided during
                the application process.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/franchise/apply"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-center transition-all"
              >
                REQUEST FRANCHISE INFO
              </Link>
              <Link
                href="tel:+16137169705"
                className="bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-4 px-8 rounded-full text-center transition-all"
              >
                CALL TO LEARN MORE
              </Link>
            </div>
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
