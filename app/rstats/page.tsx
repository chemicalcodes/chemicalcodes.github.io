import React from "react";
import Link from "next/link";

export default function RStatsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      
      {/* NAVIGATION (Simple Back Button) */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4 px-6 z-50 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl tracking-tight text-black hover:opacity-70 transition-opacity">
          chemical codes
        </Link>
        <Link href="/" className="text-sm font-semibold border border-black px-4 py-2 hover:bg-black hover:text-white transition-all">
          ← Back to Home
        </Link>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="border-l-8 border-black pl-8 mb-12">
          <span className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-2 block">
            Workshop / Radionica
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tighter leading-none">
            Biostatistics <br /> in R
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-600 max-w-2xl">
            October 23 – 29, 2025 <br />
            <span className="font-semibold text-black">BIOCentre & Online</span>
          </p>
        </div>

        {/* TARGET AUDIENCE */}
        <div className="bg-gray-50 p-8 md:p-12 border-l-4 border-gray-300">
          <h3 className="text-xl font-bold mb-4">Is this for you?</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Do you research chemical and biological phenomena and need to analyze your data? 
            Are you interested in bioinformatics, machine learning, and data science? 
            <strong>This workshop is designed exactly for you.</strong>
          </p>
        </div>
      </section>

      {/* SCHEDULE SECTION */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight">Schedule</h2>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Online Block */}
            <div className="space-y-8">
              <div className="border-t border-gray-700 pt-6">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Online (MS Teams)</span>
                <div className="flex justify-between items-baseline mt-2 mb-2">
                  <h3 className="text-2xl font-bold">Oct 23</h3>
                  <span className="text-lg font-mono text-gray-300">13:00 - 16:00</span>
                </div>
                <p className="text-gray-300">Basics of Biostatistics</p>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Online (MS Teams)</span>
                <div className="flex justify-between items-baseline mt-2 mb-2">
                  <h3 className="text-2xl font-bold">Oct 24</h3>
                  <span className="text-lg font-mono text-gray-300">13:00 - 16:00</span>
                </div>
                <p className="text-gray-300">Basics of Biostatistics</p>
              </div>
            </div>

            {/* On-Site Block */}
            <div className="space-y-8">
              <div className="bg-white/10 p-6 border-l-4 border-white">
                <span className="text-sm font-bold text-white uppercase tracking-wider bg-black px-2 py-1">On-Site / Kampus</span>
                <div className="flex justify-between items-baseline mt-4 mb-2">
                  <h3 className="text-2xl font-bold">Oct 27</h3>
                  <span className="text-lg font-mono text-gray-300">09:00 - 15:00</span>
                </div>
                <ul className="text-gray-300 list-disc list-inside space-y-1">
                  <li>Tool Installation</li>
                  <li>Intro to R Programming</li>
                  <li>Numerical Operations in R</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 border-l-4 border-white">
                <span className="text-sm font-bold text-white uppercase tracking-wider bg-black px-2 py-1">On-Site / Kampus</span>
                <div className="flex justify-between items-baseline mt-4 mb-2">
                  <h3 className="text-2xl font-bold">Oct 28</h3>
                  <span className="text-lg font-mono text-gray-300">09:00 - 15:00</span>
                </div>
                <ul className="text-gray-300 list-disc list-inside space-y-1">
                  <li>Data Loading</li>
                  <li>Data Exploration</li>
                  <li>Data Visualization</li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 border-l-4 border-white">
                <span className="text-sm font-bold text-white uppercase tracking-wider bg-black px-2 py-1">On-Site / Kampus</span>
                <div className="flex justify-between items-baseline mt-4 mb-2">
                  <h3 className="text-2xl font-bold">Oct 29</h3>
                  <span className="text-lg font-mono text-gray-300">09:00 - 15:00</span>
                </div>
                <ul className="text-gray-300 list-disc list-inside space-y-1">
                  <li>Statistical Tests</li>
                  <li>Classification Models</li>
                  <li>Regression Models</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS GRID */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Lecturers */}
          <div>
            <h2 className="text-3xl font-black mb-8">Lecturers</h2>
            <ul className="space-y-4 text-lg">
              <li className="font-bold border-b border-gray-200 pb-2">doc. dr. sc. Mario Lovrić</li>
              <li className="font-bold border-b border-gray-200 pb-2">izv. prof. Mislav Stjepan Žebec</li>
              <li className="font-bold border-b border-gray-200 pb-2">dr. sc. Iva Šunić</li>
              <li className="font-bold border-b border-gray-200 pb-2">dr. sc. Sandra Vitko</li>
              <li className="font-bold border-b border-gray-200 pb-2">mag. Lucia Pole</li>
            </ul>
          </div>

          {/* Registration Box */}
          <div className="bg-gray-50 border-2 border-black p-8 text-center flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">Registration Fee</h3>
            <div className="text-6xl font-black mb-2">€290</div>
            <p className="text-sm text-gray-500 mb-8">VAT included. Group discounts available.</p>
            
            <a 
              href="mailto:mario@chemical.codes"
              className="w-full block bg-black text-white text-xl font-bold py-4 hover:bg-gray-800 transition-colors"
            >
              Register via Email
            </a>
            <p className="mt-4 text-gray-600 font-medium">mario@chemical.codes</p>
          </div>

        </div>
        
        {/* Location Info */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Location</h4>
          <p className="text-2xl font-bold">BIOCentar</p>
          <p className="text-xl text-gray-600">Borongajska 83H, Zagreb</p>
          <p className="text-gray-500 mt-2">& Online via MS Teams</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white text-center border-t border-gray-100">
        <p className="text-gray-500 text-sm">Organized by <strong>chemical codes d.o.o.</strong></p>
      </footer>
      
    </main>
  );
}