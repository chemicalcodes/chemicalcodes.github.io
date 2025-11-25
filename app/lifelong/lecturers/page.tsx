import React from "react";

export default function LecturersPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-4xl font-black mb-12">Program Leaders</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="p-8 border border-gray-200 bg-gray-50 rounded-lg">
          <div className="mb-4">
             <span className="bg-black text-white text-xs font-bold px-2 py-1 uppercase tracking-wide">Program Leader</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">doc. dr. sc. Mario Lovrić</h3>
          <p className="text-gray-600 mb-4 font-medium">chemical codes d.o.o. / PTF Osijek</p>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Email:</strong> mario@chemical.codes</p>
            <p><strong>Web:</strong> www.chemical.codes</p>
          </div>
        </div>

        <div className="p-8 border border-gray-200 bg-gray-50 rounded-lg">
           <div className="mb-4">
             <span className="bg-gray-300 text-black text-xs font-bold px-2 py-1 uppercase tracking-wide">Co-Leader</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">izv. prof. dr. sc. Krunoslav Aladić</h3>
          <p className="text-gray-600 mb-4 font-medium">PTF Osijek</p>
          <p className="text-gray-700 text-sm">
            Associate Professor at the Faculty of Food Technology Osijek.
          </p>
        </div>
      </div>
      
      <p className="mt-12 text-gray-500 italic text-center text-sm">
        *The program is officially organized by the Faculty of Food Technology Osijek (PTFOS).
      </p>
    </div>
  );
}