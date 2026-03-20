import React from "react";

const modules = [
  {
    number: "01",
    title: "Introduction",
    subtitle: "Introduction to Python",
    hours: "1h Lecture + 3h Exercises",
    location: "Online",
    date: "19.4.2026.",
    topics: ["Basic syntax", "Installation of required tools and libraries"],
  },
  {
    number: "02",
    title: "Data Basics",
    subtitle: "Python for Data Processing",
    hours: "1h Lecture + 4h Exercises",
    location: "Online",
    date: "20.4.2026.",
    topics: ["Variables", "Control structures", "Functions and modules", "Introduction to NumPy and pandas"],
  },
  {
    number: "03",
    title: "Automation",
    subtitle: "Automation & Advanced Processing",
    hours: "1h Lecture + 4h Exercises",
    location: "Online",
    date: "4.5.2026.",
    description: "Task automation using Python scripts. Advanced data processing:",
    topics: ["Cleaning", "Normalization", "Transformation", "Loading and processing data"],
  },
  {
    number: "04",
    title: "Machine Learning",
    subtitle: "Building machine learning models",
    hours: "1h Lecture + 4h Exercises",
    location: "Osijek",
    date: "11.5 - 13.5.2026.",
    topics: ["Building and training models for classification and regression"],
  },
  {
    number: "05",
    title: "AI Fundamentals",
    subtitle: "Intro to AI & Deep Learning",
    hours: "1h Lecture + 3h Exercises",
    location: "Osijek",
    date: "11.5 - 13.5.2026.",
    topics: [
      "Theoretical foundations of artificial intelligence and deep learning",
      "Overview of the most important deep learning algorithms",
      "Working with PyTorch to build deep learning models",
    ],
  },
  {
    number: "06",
    title: "Visualization",
    subtitle: "Dimensionality Reduction",
    hours: "1h Lecture + 3h Exercises",
    location: "Osijek",
    date: "11.5 - 13.5.2026.",
    topics: ["PCA", "UMAP", "Visualization of high-dimensional data"],
  },
  {
    number: "07",
    title: "Final Project",
    subtitle: "Project Work",
    hours: "3h Seminar",
    location: "Online",
    date: "18.5.2026.",
    topics: ["Application of learned techniques to real-world bioscience problems"],
  },
];

export default function ProgramPage() {
  return (
    <div className="animate-fade-up space-y-20">
      <div>
        <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-semibold uppercase tracking-wider rounded-full mb-6">
          30 Hours Total
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-none mb-5">Curriculum</h2>
        <p className="text-zinc-500 font-light max-w-[55ch] leading-relaxed">
          The program consists of 30 hours of instruction, combining theoretical lectures, practical workshops, and project work.
        </p>
      </div>

      <div className="space-y-0">
        {modules.map((mod) => (
          <div
            key={mod.number}
            className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 border-t border-zinc-200/80 hover:bg-white/60 transition-all duration-500 -mx-8 px-8 rounded-xl"
          >
            {/* Left meta */}
            <div className="md:col-span-4 flex flex-col gap-2">
              <span className="text-sm font-mono text-zinc-300 group-hover:text-emerald-500 transition-colors duration-500">{mod.number}</span>
              <h3 className="text-xl font-bold tracking-tight text-zinc-900">{mod.title}</h3>
              <span className="text-sm text-zinc-400 mt-2 font-light">{mod.hours}</span>
              <div className="flex items-center gap-3 mt-1">
                <span className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                  mod.location === "Online"
                    ? "bg-zinc-900 text-white"
                    : "bg-emerald-50 text-emerald-700"
                }`}>
                  {mod.location}
                </span>
                <span className="text-xs text-zinc-400 font-light">{mod.date}</span>
              </div>
            </div>

            {/* Right content */}
            <div className="md:col-span-8">
              <h4 className="font-semibold text-lg mb-3 text-zinc-900 tracking-tight">{mod.subtitle}</h4>
              {mod.description && (
                <p className="text-zinc-500 mb-3 font-light">{mod.description}</p>
              )}
              <ul className="text-zinc-500 space-y-2 font-light">
                {mod.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Calendar */}
      <div className="pt-8">
        <h2 className="text-2xl font-bold tracking-tight mb-10">Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* April 2026 */}
          <div className="surface rounded-2xl p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400 mb-6 text-center">April 2026</h3>
            <div className="grid grid-cols-7 text-center text-[11px] font-semibold text-zinc-400 mb-3">
              {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 text-center text-sm gap-y-1">
              {[null,null,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,null,null,null].map((d, i) => {
                const isOnline = d === 19 || d === 20;
                return (
                  <div key={i} className={`py-2 text-sm font-medium rounded-lg transition-colors duration-200
                    ${!d ? "" : isOnline ? "bg-zinc-900 text-white" : "text-zinc-500 hover:bg-zinc-100"}`}>
                    {d ?? ""}
                  </div>
                );
              })}
            </div>
          </div>

          {/* May 2026 */}
          <div className="surface rounded-2xl p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400 mb-6 text-center">May 2026</h3>
            <div className="grid grid-cols-7 text-center text-[11px] font-semibold text-zinc-400 mb-3">
              {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 text-center text-sm gap-y-1">
              {[null,null,null,null,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map((d, i) => {
                const isOnline = d === 4 || d === 18;
                const isOsijek = d === 11 || d === 12 || d === 13;
                return (
                  <div key={i} className={`py-2 text-sm font-medium rounded-lg transition-colors duration-200
                    ${!d ? "" : isOnline ? "bg-zinc-900 text-white" : isOsijek ? "bg-emerald-600 text-white" : "text-zinc-500 hover:bg-zinc-100"}`}>
                    {d ?? ""}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex gap-8 mt-8 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-zinc-900 rounded-md inline-block" />
            <span className="font-light">Online session</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-emerald-600 rounded-md inline-block" />
            <span className="font-light">Osijek (in-person)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
