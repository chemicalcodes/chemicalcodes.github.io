import React from "react";

export default function VenuePage() {
  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-4xl font-black mb-8">Venue & Location</h2>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Faculty of Food Technology Osijek</h3>
        <p className="text-xl text-gray-600 font-light">
          Sveučilište Josipa Jurja Strossmayera u Osijeku<br />
          Franje Kuhača 18, 31000 Osijek, Croatia
        </p>
      </div>

      <div className="p-6 bg-yellow-50 border border-yellow-200 text-yellow-900 rounded-md max-w-2xl">
        <strong>Important Note:</strong> The specific classrooms/labs for the practical exercises will be arranged by agreement with the participants prior to the start of the course.
      </div>
      
      <div className="mt-12 h-64 bg-gray-100 flex items-center justify-center text-gray-400 rounded-lg border-2 border-dashed border-gray-300">
        Google Maps Embed Placeholder (Franje Kuhača 18)
      </div>
    </div>
  );
}