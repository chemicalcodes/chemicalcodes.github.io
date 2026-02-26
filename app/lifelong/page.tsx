import React from "react";

export default function LifelongHome() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-16 border-l-4 border-black pl-6">
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-black">
          AI in Life Sciences with Python
        </h1>
        <p className="text-xl text-gray-600 font-light max-w-3xl">
          A specialized lifelong learning program designed to train participants in Python programming, 
          task automation, and the application of deep learning algorithms.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-4">Course Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            This program prepares participants to independently process and analyze biomedical data. 
            You will master Python, NumPy, pandas, and PyTorch to create your own scripts 
            for data processing and apply deep learning to chemical and biological problems.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Target Audience:</strong> Students and professionals in food technology, 
            biotechnology, chemical/pharmaceutical engineering, and biomedicine.
          </p>
        </div>
        
        <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Key Details</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span>Duration:</span>
              <span className="font-semibold">30 Hours (10 days)</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span>Format:</span>
              <span className="font-semibold">Lectures, Seminars, Projects</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span>Price:</span>
              <span className="font-semibold">€500 per participant</span>
            </li>
            <li className="flex justify-between pt-2">
              <span>Prerequisites:</span>
              <span className="font-semibold text-right text-sm">Graduate degree in STEM</span>
            </li>
          </ul>
          <div className="mt-8">
            <a
              href={`mailto:info@chemical.codes?subject=${encodeURIComponent("Application – AI in Biosciences (2026)")}&body=${encodeURIComponent("Name: \nEmail: \nPhone: \nInstitution/Company: \nRole/Title: \nDegree: \nHow did you hear about us: ")}`}
              className="block w-full text-center bg-black text-white py-3 font-bold hover:bg-gray-800 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}