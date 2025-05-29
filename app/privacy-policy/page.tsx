import Link from "next/link"
import { SuperBubblyHeader } from "@/components/super-bubbly-header"

export const metadata = {
  title: "Privacy Policy | Blues Cleaning Crew",
  description: "Privacy Policy for Blues Cleaning Crew window cleaning and exterior cleaning services.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SuperBubblyHeader />

      <main className="flex-1 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Privacy Policy</h1>
              <div className="w-24 h-1 bg-blue-500"></div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 prose prose-blue max-w-none">
              <p className="text-gray-600">Last Updated: May 25, 2025</p>

              <h2>1. Introduction</h2>
              <p>
                Blues Cleaning Crew ("we," "our," or "us") respects your privacy and is committed to protecting it
                through our compliance with this policy. This Privacy Policy describes the types of information we may
                collect from you or that you may provide when you visit our website and our practices for collecting,
                using, maintaining, protecting, and disclosing that information.
              </p>

              <h2>2. Information We Collect</h2>
              <p>We collect several types of information from and about users of our website, including:</p>
              <ul>
                <li>
                  Personal information such as name, postal address, email address, telephone number, and any other
                  identifier by which you may be contacted online or offline when you provide it to us through our quote
                  request form or newsletter signup.
                </li>
                <li>
                  Information about your internet connection, the equipment you use to access our website, and usage
                  details.
                </li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use information that we collect about you or that you provide to us:</p>
              <ul>
                <li>To present our website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To carry out our obligations and enforce our rights.</li>
                <li>To notify you about changes to our website or any products or services we offer.</li>
                <li>In any other way we may describe when you provide the information.</li>
                <li>For any other purpose with your consent.</li>
              </ul>

              <h2>4. Disclosure of Your Information</h2>
              <p>
                We may disclose aggregated information about our users without restriction. We may disclose personal
                information that we collect or you provide:
              </p>
              <ul>
                <li>To our subsidiaries and affiliates.</li>
                <li>To contractors, service providers, and other third parties we use to support our business.</li>
                <li>
                  To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization,
                  dissolution, or other sale or transfer of some or all of our assets.
                </li>
                <li>To fulfill the purpose for which you provide it.</li>
                <li>For any other purpose disclosed by us when you provide the information.</li>
                <li>With your consent.</li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We have implemented measures designed to secure your personal information from accidental loss and from
                unauthorized access, use, alteration, and disclosure.
              </p>

              <h2>6. Changes to Our Privacy Policy</h2>
              <p>
                It is our policy to post any changes we make to our privacy policy on this page. The date the privacy
                policy was last revised is identified at the top of the page.
              </p>

              <h2>7. Contact Information</h2>
              <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
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
