import Image from "next/image"
import Link from "next/link"

export function ProcessSteps() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">OUR 4-STEP PROCESS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a meticulous 4-step process to ensure your windows are perfectly clean and streak-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">SCRUB</h3>
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                <Image src="/window-cleaner-scrubbing.png" alt="Scrub process" fill className="object-cover" />
              </div>
              <p className="text-gray-600 text-center">
                We start by applying our eco-friendly cleaning solution and thoroughly scrubbing the glass to loosen
                dirt, grime, and other contaminants.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">SQUEEGEE</h3>
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                <Image src="/window-cleaner-squeegee.png" alt="Squeegee process" fill className="object-cover" />
              </div>
              <p className="text-gray-600 text-center">
                Using professional-grade squeegees, we remove the cleaning solution along with all the dirt, leaving
                your windows crystal clear.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">DETAIL</h3>
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                <Image src="/window-cleaner-detailing.png" alt="Detail process" fill className="object-cover" />
              </div>
              <p className="text-gray-600 text-center">
                We meticulously detail the edges and corners of each window, ensuring no spots or streaks are left
                behind.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                4
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">PROTECT</h3>
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                <Image src="/window-cleaner-frame-sill.png" alt="Protect process" fill className="object-cover" />
              </div>
              <p className="text-gray-600 text-center">
                We clean and wipe down window sills, tracks, and frames, protecting your windows from future buildup.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/quote"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all"
          >
            SCHEDULE YOUR CLEANING
          </Link>
        </div>
      </div>
    </section>
  )
}
