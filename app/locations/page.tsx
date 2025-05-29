import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SuperBubblyHeader } from "@/components/super-bubbly-header"

export const metadata = {
  title: "Our Locations | Blues Cleaning Crew",
  description: "Blues Cleaning Crew serves Ottawa, Montreal, Kingston and surrounding areas.",
}

export default function LocationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SuperBubblyHeader />

      <main className="flex-1 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">OUR LOCATIONS</h1>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-xl text-blue-600 max-w-2xl mx-auto">
                Blues Cleaning Crew proudly serves these cities and their surrounding areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Ottawa */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179436.12384652547!2d-76.02772484179685!3d45.34992526000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1714936800000!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of Ottawa, Ontario"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">Ottawa</h2>
                  <p className="text-gray-600 mb-4">
                    Our headquarters is located in Ottawa, serving the entire National Capital Region including Kanata,
                    Orleans, Barrhaven, and Gatineau.
                  </p>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                    <Link href="/quote?city=ottawa">Get a Quote</Link>
                  </Button>
                </div>
              </div>

              {/* Montreal */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178784.32549756595!2d-73.87203984179687!3d45.55884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC!5e0!3m2!1sen!2sca!4v1714937300000!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of Montreal, Quebec"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">Montreal</h2>
                  <p className="text-gray-600 mb-4">
                    Our Montreal team serves the Greater Montreal area, including Laval, Longueuil, and the West Island.
                  </p>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                    <Link href="/quote?city=montreal">Get a Quote</Link>
                  </Button>
                </div>
              </div>

              {/* Kingston */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90925.21101534698!2d-76.59122384179687!3d44.22976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2ab0674408ea9%3A0x76a75495d3d97629!2sKingston%2C%20ON!5e0!3m2!1sen!2sca!4v1714937400000!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of Kingston, Ontario"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">Kingston</h2>
                  <p className="text-gray-600 mb-4">
                    Our Kingston team serves Kingston and surrounding areas including Belleville, Brockville, and
                    Gananoque.
                  </p>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                    <Link href="/quote?city=kingston">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Service Area Coverage</h2>
              <p className="text-gray-600 mb-6">
                In addition to our main service areas, we also serve many surrounding communities. If you don't see your
                location listed, please contact us to check if we service your area.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold text-blue-800 mb-2">Ottawa Region</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Kanata</li>
                    <li>• Orleans</li>
                    <li>• Barrhaven</li>
                    <li>• Nepean</li>
                    <li>• Stittsville</li>
                    <li>• Gatineau</li>
                    <li>• Aylmer</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-blue-800 mb-2">Montreal Region</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Laval</li>
                    <li>• Longueuil</li>
                    <li>• West Island</li>
                    <li>• Brossard</li>
                    <li>• Saint-Laurent</li>
                    <li>• Dorval</li>
                    <li>• Pointe-Claire</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-blue-800 mb-2">Kingston Region</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Belleville</li>
                    <li>• Brockville</li>
                    <li>• Gananoque</li>
                    <li>• Napanee</li>
                    <li>• Smiths Falls</li>
                    <li>• Perth</li>
                    <li>• Trenton</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Ready to Get Started?</h2>
              <Button className="rounded-full px-8 py-6 text-lg bg-blue-500 hover:bg-blue-600" asChild>
                <Link href="/quote">REQUEST A FREE QUOTE</Link>
              </Button>
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
