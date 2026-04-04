"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function LifelongLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const tabs = [
    { href: "/lifelong", label: "Overview" },
    { href: "/lifelong/program", label: "Program" },
    { href: "/lifelong/lecturers", label: "Lecturers" },
    { href: "/lifelong/venue", label: "Venue" },
  ];

  return (
    <div className="min-h-[100dvh] bg-stone-50 text-zinc-900">

      {/* HEADER */}
      <header className="sticky top-0 z-40 glass">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">

          <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity duration-300">
            <Image src="/cc_2_black.svg" alt="Chemical Codes" width={100} height={32} className="h-5 w-auto" />
            <span className="w-px h-4 bg-zinc-300" />
            <span className="text-sm font-medium text-zinc-400">Education</span>
          </Link>

          <nav className="flex items-center gap-1 bg-zinc-100/80 rounded-full p-1 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => {
              const isActive = pathname === tab.href;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`text-xs font-medium px-4 sm:px-5 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-20">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200/60 py-12 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500 font-light">Organized by <strong className="font-medium text-zinc-700">PTF Osijek</strong> & <strong className="font-medium text-zinc-700">chemical codes d.o.o.</strong></p>
          <p className="text-xs text-zinc-400">
             &copy; {new Date().getFullYear()} Chemical Codes
          </p>
        </div>
      </footer>
    </div>
  );
}
