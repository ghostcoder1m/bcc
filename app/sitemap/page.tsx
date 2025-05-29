import Link from "next/link"
import { SuperBubblyHeader } from "@/components/super-bubbly-header"

export const metadata = {
  title: "Sitemap | Blues Cleaning Crew",
  description: "Sitemap for Blues Cleaning Crew website.",
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SuperBubblyHeader />

      <main className="flex-1 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Sitemap</h1>
              <div className="w-24 h-1 bg-blue-500"></div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-blue-900 mb-4">Main Pages</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/quote" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Get a Quote
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-blue-600 hover:text-blue-800 hover:underline">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="text-blue-600 hover:text-blue-800 hover:underline">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-blue-900 mb-4">Services</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/services/window-cleaning"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        Window Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/pressure-washing"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        Pressure Washing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/gutter-cleaning"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        Gutter Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/solar-panel-cleaning"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        Solar Panel Cleaning
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-blue-900 mb-4">Legal & Info</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/sitemap" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Sitemap
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-xl font-bold text-blue-900 mb-4">Locations</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link
                    href="/quote?city=ottawa"
                    className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <h3 className="font-bold text-blue-800">Ottawa</h3>
                    <p className="text-blue-600">Ontario</p>
                  </Link>
                  <Link
                    href="/quote?city=montreal"
                    className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <h3 className="font-bold text-blue-800">Montreal</h3>
                    <p className="text-blue-600">Quebec</p>
                  </Link>
                  <Link
                    href="/quote?city=kingston"
                    className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <h3 className="font-bold text-blue-800">Kingston</h3>
                    <p className="text-blue-600">Ontario</p>
                  </Link>
                </div>
              </div>
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
