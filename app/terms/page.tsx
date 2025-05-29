import Link from "next/link"
import { SuperBubblyHeader } from "@/components/super-bubbly-header"

export const metadata = {
  title: "Terms of Service | Blues Cleaning Crew",
  description: "Terms of Service for Blues Cleaning Crew window cleaning and exterior cleaning services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SuperBubblyHeader />

      <main className="flex-1 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Terms of Service</h1>
              <div className="w-24 h-1 bg-blue-500"></div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 prose prose-blue max-w-none">
              <p className="text-gray-600">Last Updated: May 25, 2025</p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the services provided by Blues Cleaning Crew ("we," "our," or "us"), you agree to
                be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2>2. Services</h2>
              <p>
                Blues Cleaning Crew provides window cleaning, pressure washing, gutter cleaning, and solar panel
                cleaning services for residential and commercial properties. Our services are subject to availability
                and may vary by location.
              </p>

              <h2>3. Scheduling and Cancellations</h2>
              <p>
                When scheduling a service, we will provide you with an estimated date and time. We reserve the right to
                reschedule due to inclement weather or other unforeseen circumstances.
              </p>
              <p>
                Cancellations must be made at least 24 hours in advance of your scheduled service. Cancellations made
                less than 24 hours in advance may be subject to a cancellation fee.
              </p>

              <h2>4. Payment Terms</h2>
              <p>
                Payment is due upon completion of services unless otherwise agreed upon in writing. We accept cash,
                checks, and major credit cards. A quote provided before service is an estimate and the final price may
                vary based on actual conditions and work performed.
              </p>

              <h2>5. Property Access and Condition</h2>
              <p>
                You agree to provide our team with reasonable access to your property to perform the requested services.
                You are responsible for ensuring that the areas to be cleaned are accessible and free from hazards.
              </p>
              <p>
                We will take reasonable care to protect your property during service, but we are not responsible for
                pre-existing damage or deterioration of surfaces that may become more apparent after cleaning.
              </p>

              <h2>6. Satisfaction Guarantee</h2>
              <p>
                We strive to provide high-quality service and your satisfaction is important to us. If you are not
                satisfied with our work, please notify us within 48 hours of service completion, and we will return to
                address any issues at no additional cost.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                Blues Cleaning Crew's liability is limited to the cost of the services provided. We are not liable for
                indirect, incidental, special, consequential, or punitive damages.
              </p>

              <h2>8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
                upon posting on our website. Your continued use of our services after any changes indicates your
                acceptance of the new terms.
              </p>

              <h2>9. Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
              <p>
                Blues Cleaning Crew
                <br />
                Email: contact@bluescleaningcrew.com
                <br />
                Phone: (613) 716-9705
              </p>
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
