import Link from "next/link"
import { Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SuperBubblyHeader } from "@/components/super-bubbly-header"

export const metadata = {
  title: "Careers | Blues Cleaning Crew",
  description: "Join the Blues Cleaning Crew team. Career opportunities coming soon.",
}

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SuperBubblyHeader />

      <main className="flex-1 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="bg-blue-100 rounded-full p-6 inline-block mb-6">
                <Briefcase className="h-16 w-16 text-blue-500" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">CAREERS</h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>

            <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 mb-8">Coming Soon</h2>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              We're excited to announce that career opportunities with Blues Cleaning Crew will be available soon. Join
              our growing team of professional cleaners serving Ottawa, Kingston, and Montreal.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Why Work With Us?</h3>
              <ul className="space-y-3 text-left max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-700">Competitive wages and benefits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-700">Professional training and development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-700">Friendly and supportive work environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-700">Opportunities for growth and advancement</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              Check back soon or follow us on Instagram for updates on available positions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="rounded-full px-8 py-6 text-lg bg-blue-500 hover:bg-blue-600" asChild>
                <Link href="/">RETURN HOME</Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-blue-500 text-blue-500 hover:bg-blue-50"
                asChild
              >
                <Link
                  href="https://www.instagram.com/bluescleaningcrew?igsh=MTY2aDk5eG85MjZ2&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FOLLOW US ON INSTAGRAM
                </Link>
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
