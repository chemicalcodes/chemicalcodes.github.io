import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function RStatsPage() {
  return (
    <main className="min-h-[100dvh] bg-stone-50 text-zinc-900 selection:bg-emerald-600 selection:text-white">

      {/* NAVIGATION */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 glass rounded-full px-6 py-3 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity duration-300">
          <Image src="/cc_2_black.svg" alt="Chemical Codes" width={100} height={32} className="h-4 w-auto" />
        </Link>
        <div className="w-px h-4 bg-zinc-300/60" />
        <Link href="/" className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-300 tracking-wide uppercase flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Home
        </Link>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-36 pb-24 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto relative">
        {/* Background orb */}
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-semibold uppercase tracking-wider rounded-full mb-6">
              Workshop / Radionica
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-zinc-900 mb-10 tracking-tighter leading-[0.95]">
              Biostatistics <br /> in R
            </h1>
            <p className="text-xl md:text-2xl font-light text-zinc-500 max-w-[36ch] leading-relaxed">
              October 23 &ndash; 29, 2025 <br />
              <span className="font-semibold text-zinc-900">BIOCentre & Online</span>
            </p>
          </div>

          {/* TARGET AUDIENCE */}
          <div className="lg:col-span-5 surface rounded-2xl p-8 md:p-10 lg:mt-16">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400 mb-5">Is this for you?</h3>
            <p className="text-zinc-600 leading-relaxed font-light">
              Do you research chemical and biological phenomena and need to analyze your data?
              Are you interested in bioinformatics, machine learning, and data science?
              <strong className="text-zinc-900 font-medium"> This workshop is designed exactly for you.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* SCHEDULE SECTION */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-500 mb-5 block">
            Timetable
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-20 tracking-tighter leading-none">Schedule</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Online Block */}
            <div className="space-y-10">
              {[
                { day: "Oct 23", time: "13:00 - 16:00", topic: "Basics of Biostatistics" },
                { day: "Oct 24", time: "13:00 - 16:00", topic: "Basics of Biostatistics" },
              ].map((session) => (
                <div key={session.day} className="group border-t border-zinc-800/60 pt-8 hover:border-zinc-700 transition-colors duration-500">
                  <span className="text-[11px] font-semibold text-zinc-600 uppercase tracking-[0.15em]">Online (MS Teams)</span>
                  <div className="flex justify-between items-baseline mt-3 mb-2">
                    <h3 className="text-2xl font-bold tracking-tight">{session.day}</h3>
                    <span className="text-base font-mono text-zinc-500">{session.time}</span>
                  </div>
                  <p className="text-zinc-400 font-light">{session.topic}</p>
                </div>
              ))}
            </div>

            {/* On-Site Block */}
            <div className="space-y-6">
              {[
                { day: "Oct 27", time: "09:00 - 15:00", topics: ["Tool Installation", "Intro to R Programming", "Numerical Operations in R"] },
                { day: "Oct 28", time: "09:00 - 15:00", topics: ["Data Loading", "Data Exploration", "Data Visualization"] },
                { day: "Oct 29", time: "09:00 - 15:00", topics: ["Statistical Tests", "Classification Models", "Regression Models"] },
              ].map((session) => (
                <div key={session.day} className="group bg-white/[0.03] border border-zinc-800/50 rounded-2xl p-7 hover:border-zinc-700 hover:bg-white/[0.05] transition-all duration-500">
                  <span className="inline-block px-3 py-1 bg-emerald-600/20 text-emerald-400 text-[11px] font-semibold uppercase tracking-wider rounded-full mb-4">
                    On-Site / Kampus
                  </span>
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-2xl font-bold tracking-tight">{session.day}</h3>
                    <span className="text-base font-mono text-zinc-500">{session.time}</span>
                  </div>
                  <ul className="text-zinc-400 space-y-2 font-light">
                    {session.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS GRID */}
      <section className="py-28 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Lecturers */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400 mb-5 block">
              Team
            </span>
            <h2 className="text-3xl font-extrabold mb-10 tracking-tighter">Lecturers</h2>
            <ul className="space-y-0">
              {[
                "doc. dr. sc. Mario Lovri\u0107",
                "izv. prof. Mislav Stjepan \u017debec",
                "dr. sc. Iva \u0160uni\u0107",
                "dr. sc. Sandra Vitko",
                "mag. Lucia Pole",
              ].map((name) => (
                <li key={name} className="group font-medium border-b border-zinc-100 py-5 text-zinc-900 hover:pl-3 transition-all duration-300 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Registration Box */}
          <div className="surface rounded-2xl p-10 md:p-12 flex flex-col justify-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400 mb-3 block">Registration Fee</span>
            <div className="text-6xl font-extrabold tracking-tighter mb-2">&euro;290</div>
            <p className="text-sm text-zinc-400 mb-12 font-light">VAT included. Group discounts available.</p>

            <a
              href="mailto:info@chemical.codes"
              className="w-full block bg-zinc-900 text-white text-center text-sm font-medium tracking-wide py-4 rounded-full hover:bg-emerald-700 transition-all duration-500 active:scale-[0.97]"
            >
              Register via Email
            </a>
            <p className="mt-4 text-zinc-400 font-light text-sm text-center">info@chemical.codes</p>
          </div>
        </div>

        {/* Location Info */}
        <div className="mt-24 text-center border-t border-zinc-200 pt-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400 mb-4 block">Location</span>
          <p className="text-3xl font-bold tracking-tight">BIOCentar</p>
          <p className="text-lg text-zinc-500 font-light mt-1">Borongajska 83H, Zagreb</p>
          <p className="text-zinc-400 mt-2 text-sm font-light">& Online via MS Teams</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-zinc-200/60 bg-stone-50 text-center">
        <p className="text-zinc-400 text-sm font-light">Organized by <strong className="text-zinc-600 font-medium">chemical codes d.o.o.</strong></p>
      </footer>

    </main>
  );
}
