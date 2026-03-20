import React from "react";

export default function LecturersPage() {
  return (
    <div className="animate-fade-up">
      <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-semibold uppercase tracking-wider rounded-full mb-6">
        Team
      </span>
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-none mb-20">Program Leaders</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="surface rounded-2xl p-10 transition-all duration-500 hover:-translate-y-1">
          <div className="mb-8">
            <span className="inline-block px-3 py-1.5 bg-zinc-900 text-white text-[11px] font-semibold uppercase tracking-wider rounded-full">
              Program Leader
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-2 tracking-tight">doc. dr. sc. Mario Lovri&#263;</h3>
          <p className="text-zinc-400 mb-8 font-light text-sm">chemical codes d.o.o. / PTF Osijek</p>
          <div className="space-y-3 text-sm text-zinc-500 border-t border-zinc-100 pt-6">
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              <span><strong className="text-zinc-700 font-medium">Email:</strong> mario@chemical.codes</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              <span><strong className="text-zinc-700 font-medium">Web:</strong> www.chemical.codes</span>
            </p>
          </div>
        </div>

        <div className="surface rounded-2xl p-10 transition-all duration-500 hover:-translate-y-1">
          <div className="mb-8">
            <span className="inline-block px-3 py-1.5 bg-zinc-200 text-zinc-600 text-[11px] font-semibold uppercase tracking-wider rounded-full">
              Co-Leader
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-2 tracking-tight">izv. prof. dr. sc. Krunoslav Aladi&#263;</h3>
          <p className="text-zinc-400 mb-8 font-light text-sm">PTF Osijek</p>
          <p className="text-zinc-500 text-sm font-light border-t border-zinc-100 pt-6">
            Associate Professor at the Faculty of Food Technology Osijek.
          </p>
        </div>
      </div>

      <p className="mt-20 text-zinc-400 italic text-center text-sm font-light">
        *The program is officially organized by the Faculty of Food Technology Osijek (PTFOS).
      </p>
    </div>
  );
}
