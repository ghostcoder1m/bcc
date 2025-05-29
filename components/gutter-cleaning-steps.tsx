import Image from "next/image"
import Link from "next/link"

export function GutterCleaningSteps() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">OUR 4-STEP PROCESS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a meticulous 4-step process to ensure your gutters are thoroughly cleaned and functioning
            properly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">INSPECT</h3>
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                <Image src="/gutter-inspection.png" alt="Gutter inspection process" fill className="object-cover" />
              </div>
              <p className="text-gray-600 text-center">
                We begin with a thorough inspection of your gutter system to identify problem areas and assess the level
                of debris.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">REMOVE</h3>
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                <Image src="/gutter-debris-removal.png" alt="Debris removal process" fill className="object-cover" />
              </div>
              <p className="text-gray-600 text-center">
                Our team carefully removes all debris from your gutters, including leaves, twigs, dirt, and other
                buildup.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">FLUSH</h3>
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                <Image src="/clean-gutters-flushing.png" alt="Gutter flushing process" fill className="object-cover" />
              </div>
              <p className="text-gray-600 text-center">
                We flush your gutters and downspouts with water to ensure proper flow and identify any leaks or drainage
                issues.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                4
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">REPORT</h3>
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                <Image
                  src="/clean-gutters-demonstration.png"
                  alt="Final inspection and report"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-600 text-center">
                We provide a detailed report of our work and any issues we found that may need additional attention.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/quote?service=gutter-cleaning"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all"
          >
            SCHEDULE YOUR CLEANING
          </Link>
        </div>
      </div>
    </section>
  )
}
