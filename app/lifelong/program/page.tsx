import React from "react";

export default function ProgramPage() {
  return (
    <div className="animate-in fade-in duration-500 space-y-12">
      <div className="border-b border-gray-200 pb-6">
        <h2 className="text-4xl font-black mb-4">Curriculum</h2>
        <p className="text-gray-600">
          The program consists of 30 hours of instruction, combining theoretical lectures, practical workshops, and project work.
        </p>
      </div>

      <div className="space-y-8">
        <div className="grid md:grid-cols-4 gap-6 border-b border-gray-100 pb-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold">Introduction</h3>
            <span className="text-sm text-gray-500 block mt-1">1h Lecture + 3h Exercises</span>
            <span className="text-sm text-gray-400 block mt-1">Location: Online </span>
            <span className="text-sm text-gray-400 block">Date: 19.4.2026. </span>
          </div>
          <div className="col-span-3">
            <h4 className="font-bold text-lg mb-2">Introduction to Python</h4>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Basic syntax</li>
              <li>Installation of required tools and libraries</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 border-b border-gray-100 pb-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold">Data Basics</h3>
            <span className="text-sm text-gray-500 block mt-1">1h Lecture + 4h Exercises</span>
            <span className="text-sm text-gray-400 block mt-1">Location: Online </span>
            <span className="text-sm text-gray-400 block">Date: 20.4.2026. </span>
          </div>
          <div className="col-span-3">
            <h4 className="font-bold text-lg mb-2">Python for Data Processing</h4>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Variables</li>
              <li>Control structures</li>
              <li>Functions and modules</li>
              <li>Introduction to <strong>NumPy</strong> and <strong>pandas</strong></li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 border-b border-gray-100 pb-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold">Automation</h3>
            <span className="text-sm text-gray-500 block mt-1">1h Lecture + 4h Exercises</span>
            <span className="text-sm text-gray-400 block mt-1">Location: Online </span>
            <span className="text-sm text-gray-400 block">Date: 4.5.2026. </span>
          </div>
          <div className="col-span-3">
            <h4 className="font-bold text-lg mb-2">Automation & Advanced Processing</h4>
            <p className="text-gray-700 mb-2">Task automation using Python scripts. Advanced data processing:</p>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Cleaning</li>
              <li>Normalization</li>
              <li>Transformation</li>
              <li>Loading and processing data</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 border-b border-gray-100 pb-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold">Machine Learning</h3>
            <span className="text-sm text-gray-500 block mt-1">1h Lecture + 4h Exercises</span>
            <span className="text-sm text-gray-400 block mt-1">Location: Osijek </span>
            <span className="text-sm text-gray-400 block">Date: 11.5 - 13.5.2026. </span>
          </div>
          <div className="col-span-3">
            <h4 className="font-bold text-lg mb-2">Building machine learning models</h4>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Building and training models for classification and regression</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 border-b border-gray-100 pb-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold">AI Fundamentals</h3>
            <span className="text-sm text-gray-500 block mt-1">1h Lecture + 3h Exercises</span>
            <span className="text-sm text-gray-400 block mt-1">Location: Osijek </span>
            <span className="text-sm text-gray-400 block">Date: 11.5 - 13.5.2026. </span>
          </div>
          <div className="col-span-3">
            <h4 className="font-bold text-lg mb-2">Intro to AI & Deep Learning</h4>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Theoretical foundations of artificial intelligence and deep learning</li>
              <li>Overview of the most important deep learning algorithms</li>
              <li>Working with <strong>PyTorch</strong> to build deep learning models</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 border-b border-gray-100 pb-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold">Visualization</h3>
            <span className="text-sm text-gray-500 block mt-1">1h Lecture + 3h Exercises</span>
            <span className="text-sm text-gray-400 block mt-1">Location: Osijek </span>
            <span className="text-sm text-gray-400 block">Date: 11.5 - 13.5.2026. </span>
          </div>
          <div className="col-span-3">
            <h4 className="font-bold text-lg mb-2">Dimensionality Reduction</h4>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>PCA</li>
              <li>UMAP</li>
              <li>Visualization of high-dimensional data</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 pb-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold">Final Project</h3>
            <span className="text-sm text-gray-500 block mt-1">3h Seminar</span>
           <span className="text-sm text-gray-400 block mt-1">Location: Online </span>
            <span className="text-sm text-gray-400 block">Date: 18.5.2026. </span>
          </div>
          <div className="col-span-3">
            <h4 className="font-bold text-lg mb-2">Project Work</h4>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Application of learned techniques to real-world bioscience problems</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-black mb-8">Schedule</h2>
        <div className="grid md:grid-cols-2 gap-10">

          {/* April 2026 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-center">April 2026</h3>
            <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-400 mb-2">
              {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 text-center text-sm gap-y-1">
              {/* April 1 = Wednesday → 2 empty cells */}
              {[null,null,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,null,null,null].map((d, i) => {
                const isOnline = d === 19 || d === 20;
                return (
                  <div key={i} className={`py-1.5 rounded text-sm font-medium
                    ${!d ? "" : isOnline ? "bg-black text-white" : "text-gray-700"}`}>
                    {d ?? ""}
                  </div>
                );
              })}
            </div>
          </div>

          {/* May 2026 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-center">May 2026</h3>
            <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-400 mb-2">
              {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 text-center text-sm gap-y-1">
              {/* May 1 = Friday → 4 empty cells */}
              {[null,null,null,null,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map((d, i) => {
                const isOnline = d === 4 || d === 18;
                const isOsijek = d === 11 || d === 12 || d === 13;
                return (
                  <div key={i} className={`py-1.5 rounded text-sm font-medium
                    ${!d ? "" : isOnline ? "bg-black text-white" : isOsijek ? "bg-gray-700 text-white" : "text-gray-700"}`}>
                    {d ?? ""}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Legend */}
        <div className="flex gap-6 mt-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-black inline-block" />
            Online session
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-gray-700 inline-block" />
            Osijek (in-person)
          </div>
        </div>
      </div>
    </div>
  );
}
