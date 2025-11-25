"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LifelongLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Logic to style the active tab
  const getTabClass = (path: string) => {
    // If the current path matches the link, make it bold/underlined
    const isActive = pathname === path;
    
    return isActive
      ? "text-sm font-bold text-black border-b-2 border-black pb-1"
      : "text-sm font-semibold text-gray-600 hover:text-black transition-colors";
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HEADER WITH TABS */}
      <header className="border-b border-gray-200 py-6 px-8 flex flex-col md:flex-row justify-between items-center sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        
        {/* Logo Area */}
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-xl font-bold tracking-tight text-black">
            Chemical Codes <span className="font-light text-gray-500">| Education</span>
          </Link>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-8">
          <Link href="/lifelong" className={getTabClass("/lifelong")}>
            Home
          </Link>
          <Link href="/lifelong/program" className={getTabClass("/lifelong/program")}>
            Program
          </Link>
          <Link href="/lifelong/lecturers" className={getTabClass("/lifelong/lecturers")}>
            Lecturers
          </Link>
          <Link href="/lifelong/venue" className={getTabClass("/lifelong/venue")}>
            Venue
          </Link>
        </nav>
      </header>

      {/* PAGE CONTENT */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h4 className="font-bold text-lg mb-2">Organized by PTF Osijek & Chemical Codes</h4>
          <p className="text-xs text-gray-400">
             © {new Date().getFullYear()} Chemical Codes. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}