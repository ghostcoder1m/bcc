import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SuperBubblyHeader } from "@/components/super-bubbly-header"

export const metadata = {
  title: "Frequently Asked Questions | Blues Cleaning Crew",
  description: "Find answers to common questions about our window cleaning and exterior cleaning services.",
}

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SuperBubblyHeader />

      <main className="flex-1 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-blue-600">Find answers to common questions about our services.</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  How often should I have my windows professionally cleaned?
                </h2>
                <p className="text-gray-600">
                  For residential properties, we recommend professional window cleaning 2-3 times per year. Commercial
                  properties may require more frequent cleaning, typically every 1-3 months depending on location and
                  environmental factors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  Do I need to be home during the window cleaning service?
                </h2>
                <p className="text-gray-600">
                  While it's not necessary for you to be present during the entire service, we do recommend being
                  available at the beginning to discuss any specific concerns or requirements, and at the end to inspect
                  the completed work.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-blue-900 mb-2">What if it rains after my windows are cleaned?</h2>
                <p className="text-gray-600">
                  Our cleaning solutions are designed to help repel water and minimize spotting. However, if it rains
                  within 24 hours of your service and you notice significant spotting, contact us and we'll return to
                  touch up your windows at no additional charge.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  Are your cleaning products safe for my family and pets?
                </h2>
                <p className="text-gray-600">
                  Yes, we use eco-friendly, biodegradable cleaning solutions that are safe for your family, pets, and
                  plants. Our products are effective at removing dirt and grime without harsh chemicals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-blue-900 mb-2">Do you offer any guarantees on your work?</h2>
                <p className="text-gray-600">
                  Yes, we offer a 100% satisfaction guarantee. If you're not completely satisfied with our work, contact
                  us within 48 hours and we'll return to address any issues at no additional cost.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  How do you handle high or difficult-to-reach windows?
                </h2>
                <p className="text-gray-600">
                  Our team is equipped with professional-grade extension poles, ladders, and safety equipment to safely
                  access high or difficult-to-reach windows. For very tall buildings, we use water-fed pole systems that
                  can reach up to 60 feet.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-blue-900 mb-2">Do you clean screens and tracks as well?</h2>
                <p className="text-gray-600">
                  Yes, our standard window cleaning service includes cleaning the glass, frames, sills, and screens. We
                  also wipe down tracks to remove dirt and debris, ensuring your windows function properly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  How long does a typical window cleaning service take?
                </h2>
                <p className="text-gray-600">
                  The duration depends on the size of your property and the number of windows. A typical residential
                  service can take anywhere from 1-4 hours, while commercial properties may take longer. We'll provide
                  you with a time estimate when you schedule your service.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-6">
                Don't see your question here? Contact us directly and we'll be happy to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="rounded-full px-8 py-6 text-lg bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/quote">GET YOUR FREE QUOTE</Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg border-blue-500 text-blue-500 hover:bg-blue-50"
                  asChild
                >
                  <a href="tel:+16137169705">CALL US: (613) 716-9705</a>
                </Button>
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
