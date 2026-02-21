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
      
      <div className="mt-12 rounded-lg overflow-hidden border border-gray-200">
        <iframe
          src="https://maps.google.com/maps?q=Franje+Kuha%C4%8Da+18,+31000+Osijek,+Croatia&output=embed"
          width="100%"
          height="400"
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