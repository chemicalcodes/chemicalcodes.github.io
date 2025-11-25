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
          </div>
          <div className="col-span-3">
            <h4 className="font-bold text-lg mb-2">Introduction to Python</h4>
            <p className="text-gray-700">Basic syntax, installation of tools, and library setup.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 border-b border-gray-100 pb-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold">Data Basics</h3>
            <span className="text-sm text-gray-500 block mt-1">1h Lecture + 4h Exercises</span>
          </div>
          <div className="col-span-3">
            <h4 className="font-bold text-lg mb-2">Python for Data Processing</h4>
            <p className="text-gray-700">Variables, control structures, functions. Deep dive into <strong>NumPy</strong> and <strong>pandas</strong>.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 border-b border-gray-100 pb-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold">Automation</h3>
            <span className="text-sm text-gray-500 block mt-1">1h Lecture + 4h Exercises</span>
          </div>
          <div className="col-span-3">
            <h4 className="font-bold text-lg mb-2">Automation & Advanced Processing</h4>
            <p className="text-gray-700">Task automation scripts. Cleaning, normalization, transformation, and loading of scientific data.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 border-b border-gray-100 pb-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold">AI Fundamentals</h3>
            <span className="text-sm text-gray-500 block mt-1">1h Lecture + 3h Exercises</span>
          </div>
          <div className="col-span-3">
            <h4 className="font-bold text-lg mb-2">Intro to AI & Deep Learning</h4>
            <p className="text-gray-700">Theoretical foundations, overview of algorithms, and working with <strong>PyTorch</strong>.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 border-b border-gray-100 pb-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold">Neural Networks</h3>
            <span className="text-sm text-gray-500 block mt-1">1h Lecture + 4h Exercises</span>
          </div>
          <div className="col-span-3">
            <h4 className="font-bold text-lg mb-2">Deep Neural Networks Application</h4>
            <p className="text-gray-700">Building and training models for classification and regression.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 border-b border-gray-100 pb-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold">Visualization</h3>
            <span className="text-sm text-gray-500 block mt-1">1h Lecture + 3h Exercises</span>
          </div>
          <div className="col-span-3">
            <h4 className="font-bold text-lg mb-2">Dimensionality Reduction</h4>
            <p className="text-gray-700">PCA, UMAP, and visualization of high-dimensional data.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 pb-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold">Final Project</h3>
            <span className="text-sm text-gray-500 block mt-1">3h Seminar</span>
          </div>
          <div className="col-span-3">
            <h4 className="font-bold text-lg mb-2">Project Work</h4>
            <p className="text-gray-700">Application of learned techniques to real-world bioscience problems.</p>
          </div>
        </div>
      </div>
    </div>
  );
}