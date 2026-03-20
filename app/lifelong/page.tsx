import React from "react";

export default function LifelongHome() {
  return (
    <div className="animate-fade-up">
      {/* Hero */}
      <div className="mb-24">
        <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-semibold uppercase tracking-wider rounded-full mb-6">
          Lifelong Learning Program
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] text-zinc-900 mb-8 max-w-[16ch]">
          Application of AI in Biosciences
        </h1>
        <p className="text-xl text-zinc-500 font-light max-w-[52ch] leading-relaxed">
          A specialized program designed to train participants in Python programming,
          task automation, and the application of deep learning algorithms.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        {/* Left: Course info */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-tight accent-line pb-2">Course Overview</h3>
            <p className="text-zinc-600 leading-relaxed mb-4 max-w-[55ch] font-light mt-6">
              This program prepares participants to independently process and analyze biomedical data.
              You will master Python, NumPy, pandas, and PyTorch to create your own scripts
              for data processing and apply deep learning to chemical and biological problems.
            </p>
          </div>

          <div className="surface rounded-2xl p-8">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400 mb-4">Target Audience</h4>
            <p className="text-zinc-600 leading-relaxed font-light">
              Students and professionals in food technology,
              biotechnology, chemical/pharmaceutical engineering, and biomedicine.
            </p>
          </div>
        </div>

        {/* Right: Key details card */}
        <div className="lg:col-span-5">
          <div className="surface rounded-2xl p-10 sticky top-28">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400 mb-8">Key Details</h3>
            <ul className="space-y-6">
              {[
                { label: "Duration", value: "30 Hours (10 days)" },
                { label: "Format", value: "Lectures, Seminars, Projects" },
                { label: "Price", value: "\u20AC500 per participant" },
                { label: "Prerequisites", value: "Graduate degree in STEM" },
              ].map((item, i) => (
                <li key={i} className="flex justify-between items-baseline border-b border-zinc-100 pb-4 last:border-0 last:pb-0">
                  <span className="text-sm text-zinc-400">{item.label}</span>
                  <span className="font-semibold text-sm text-zinc-900">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a
                href={`mailto:info@chemical.codes?subject=${encodeURIComponent("Application – AI in Biosciences (2026)")}&body=${encodeURIComponent("Name: \nEmail: \nPhone: \nInstitution/Company: \nRole/Title: \nDegree: \nHow did you hear about us: ")}`}
                className="block w-full text-center bg-zinc-900 text-white py-4 text-sm font-medium tracking-wide rounded-full hover:bg-emerald-700 transition-all duration-500 active:scale-[0.97]"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
