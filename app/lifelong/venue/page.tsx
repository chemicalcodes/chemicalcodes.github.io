import React from "react";

export default function VenuePage() {
  return (
    <div className="animate-fade-up">
      <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-semibold uppercase tracking-wider rounded-full mb-6">
        Location
      </span>
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-none mb-16">Venue & Location</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 tracking-tight">Faculty of Food Technology Osijek</h3>
          <p className="text-lg text-zinc-500 font-light leading-relaxed">
            Sveu&#269;ili&#353;te Josipa Jurja Strossmayera u Osijeku<br />
            Franje Kuha&#269;a 18, 31000 Osijek, Croatia
          </p>
        </div>

        <div className="surface rounded-2xl p-6 flex items-start gap-4 bg-amber-50/40 border-amber-200/40">
          <span className="text-amber-600 mt-0.5 flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </span>
          <p className="text-sm text-amber-900/70 leading-relaxed font-light">
            <strong className="font-medium">Important Note:</strong> The specific classrooms/labs for the practical exercises will be arranged by agreement with the participants prior to the start of the course.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl surface">
        <iframe
          src="https://maps.google.com/maps?q=Franje+Kuha%C4%8Da+18,+31000+Osijek,+Croatia&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Faculty of Food Technology Osijek"
        />
      </div>
    </div>
  );
}
