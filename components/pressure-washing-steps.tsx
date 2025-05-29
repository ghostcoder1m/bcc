import Image from "next/image"
import Link from "next/link"

export function PressureWashingSteps() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">OUR 4-STEP PROCESS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a careful process to ensure effective cleaning without damaging your property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">ASSESS</h3>
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                <Image
                  src="/pressure-washing-inspection.png"
                  alt="Surface assessment process"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-600 text-center">
                We evaluate the surface type and level of dirt to determine the appropriate pressure and cleaning
                solution.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">PRE-TREAT</h3>
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                <Image
                  src="/pressure-washing-pretreat.png"
                  alt="Pre-treatment process"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-600 text-center">
                We apply eco-friendly cleaning solutions to break down stubborn stains and biological growth.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">CLEAN</h3>
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                <Image
                  src="/pressure-washing-cleaning.png"
                  alt="Pressure washing process"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-600 text-center">
                Using professional-grade equipment, we carefully pressure wash the surface to remove dirt and grime.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                4
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">INSPECT</h3>
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                <Image
                  src="/pressure-washing-inspection.png"
                  alt="Final inspection process"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-600 text-center">
                We perform a final inspection to ensure all areas are thoroughly cleaned and no damage has occurred.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/quote?service=pressure-washing"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all"
          >
            SCHEDULE YOUR CLEANING
          </Link>
        </div>
      </div>
    </section>
  )
}
