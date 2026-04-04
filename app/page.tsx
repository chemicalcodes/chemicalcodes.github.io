import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "chemical codes d.o.o.",
    url: "https://www.chemical.codes",
    logo: "https://www.chemical.codes/icon-512.png",
    email: "info@chemical.codes",
    description:
      "Specializing in transforming complex biological and chemical datasets into actionable knowledge through bioinformatics, chemometrics, and machine learning.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zagrebačkog odreda 17a",
      addressLocality: "Sesvetski Kraljevec",
      postalCode: "HR-10361",
      addressCountry: "HR",
    },
    vatID: "HR61857067281",
    knowsAbout: [
      "Chemometrics",
      "Machine Learning",
      "Bioinformatics",
      "Chemical Data Analysis",
      "Deep Learning",
      "Biostatistics",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-[100dvh] bg-stone-50">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 glass rounded-full px-5 sm:px-8 py-3 flex items-center gap-4 sm:gap-8 animate-fade-in">
        <Image
          src="/cc_2_black.svg"
          alt="Chemical Codes"
          width={120}
          height={40}
          className="h-5 w-auto opacity-80"
        />
        <div className="hidden sm:block w-px h-5 bg-zinc-300/60" />
        <a href="#expertise" className="hidden sm:block text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-300 tracking-wide uppercase">
          Expertise
        </a>
        <a href="#about" className="hidden sm:block text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-300 tracking-wide uppercase">
          About
        </a>
        <a href="#contact" className="hidden sm:block text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-300 tracking-wide uppercase">
          Contact
        </a>
        {/* Mobile: single contact link */}
        <a href="#contact" className="sm:hidden text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-300 tracking-wide uppercase">
          Contact
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center px-6 md:px-16 lg:px-24 overflow-hidden">
        {/* Subtle gradient orb in background */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-stone-200/60 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 py-32 relative">
          {/* Left: Content — takes more space */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="animate-fade-up mb-10">
              <Image
                src="/cc_2_black.svg"
                alt="Chemical Codes Logo"
                width={600}
                height={300}
                priority
                className="w-full max-w-sm h-auto"
              />
            </div>

            <h1 className="animate-fade-up delay-1 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.05] text-zinc-900 mb-8 max-w-[18ch]">
              Unlocking insights from chemical data
            </h1>

            <p className="animate-fade-up delay-2 text-lg md:text-xl text-zinc-500 mb-14 max-w-[48ch] leading-relaxed font-light">
              Through bioinformatics and machine learning, we transform complex biological and chemical datasets into actionable knowledge.
            </p>

            <div className="animate-fade-up delay-3 flex flex-col sm:flex-row gap-4">
              <a
                href="#expertise"
                className="group px-8 py-4 bg-zinc-900 text-white text-sm font-medium tracking-wide rounded-full hover:bg-emerald-700 transition-all duration-500 active:scale-[0.97] flex items-center gap-3"
              >
                Our Expertise
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 text-zinc-700 text-sm font-medium tracking-wide rounded-full border border-zinc-200 hover:border-zinc-400 hover:bg-white transition-all duration-300 active:scale-[0.97]"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Education programs */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-5 animate-fade-up delay-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400 mb-1">
              Programs
            </p>

            <Link
              href="/lifelong"
              className="group surface rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-semibold uppercase tracking-wider rounded-full">
                  New
                </span>
                <span className="text-zinc-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-300 text-lg">
                  &rarr;
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2 tracking-tight">
                AI in Biosciences
              </h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                Lifelong Learning Program — Python, deep learning, and data analysis for bioscience professionals.
              </p>
            </Link>

            <Link
              href="/rstats"
              className="group surface rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-600 text-[11px] font-semibold uppercase tracking-wider rounded-full">
                  Workshop
                </span>
                <span className="text-zinc-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-300 text-lg">
                  &rarr;
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2 tracking-tight">
                Biostatistics in R
              </h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                Hands-on workshop covering statistical analysis and data visualization in R.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-40 px-6 md:px-16 lg:px-24 bg-zinc-950 relative overflow-hidden">
        {/* Subtle gradient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative">
          <div className="mb-28">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-500 mb-5 block">
              What we do
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-none max-w-[14ch]">
              Our Expertise
            </h2>
          </div>

          <div className="space-y-0">
            {[
              {
                num: "01",
                title: "Bioinformatics",
                text: "Advanced statistical methods for extracting meaningful information from complex bio/chemical datasets and analytical measurements.",
              },
              {
                num: "02",
                title: "Machine Learning",
                text: "State-of-the-art machine learning algorithms tailored for chemical data analysis, predictive modeling, and pattern recognition.",
              },
              {
                num: "03",
                title: "Research",
                text: "Cutting-edge research in data-driven chemistry, developing innovative approaches to understanding and predicting chemical behavior.",
              },
            ].map((item, i) => (
              <div
                key={item.num}
                className={`group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-14 border-t border-zinc-800/60 hover:border-zinc-700 transition-colors duration-500 items-baseline ${
                  i === 0 ? "animate-fade-up delay-1" : i === 1 ? "animate-fade-up delay-2" : "animate-fade-up delay-3"
                }`}
              >
                <div className="md:col-span-1">
                  <span className="text-sm font-mono text-zinc-600 group-hover:text-emerald-500 transition-colors duration-500">{item.num}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-500">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-lg text-zinc-400 leading-relaxed font-light max-w-[52ch] group-hover:text-zinc-300 transition-colors duration-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 px-6 md:px-16 lg:px-24 bg-stone-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/60 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <Image
                src="/cc_2_black.svg"
                alt="Chemical Codes Logo"
                width={400}
                height={200}
                className="w-auto h-12 md:h-16 mb-10 opacity-70"
              />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.05] text-zinc-900">
                Decoding bio/chemical data
              </h2>
            </div>

            <div className="lg:col-span-7 lg:pl-8">
              <div className="surface rounded-3xl p-10 md:p-14">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-600 max-w-[48ch]">
                  At chemical codes, we specialize in learning from chemical and biological data by combining bioinformatics, chemometrics, machine learning, and innovative research approaches.
                </p>
                <div className="mt-10 pt-8 border-t border-zinc-100 flex flex-wrap gap-6">
                  <div>
                    <p className="text-3xl font-bold text-zinc-900 tracking-tight">4+</p>
                    <p className="text-sm text-zinc-400 font-light mt-1">Years of research</p>
                  </div>
                  <div className="w-px bg-zinc-100" />
                  <div>
                    <p className="text-3xl font-bold text-zinc-900 tracking-tight">3</p>
                    <p className="text-sm text-zinc-400 font-light mt-1">Core disciplines</p>
                  </div>
                  <div className="w-px bg-zinc-100" />
                  <div>
                    <p className="text-3xl font-bold text-zinc-900 tracking-tight">2</p>
                    <p className="text-sm text-zinc-400 font-light mt-1">Active programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 md:px-16 lg:px-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto text-center relative">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-500 mb-6 block">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-none mb-8">
            Let&apos;s Collaborate
          </h2>
          <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-[45ch] mx-auto mb-16">
            Interested in applying advanced chemometrics and machine learning to your chemical data? Let&apos;s discuss how we can help.
          </p>

          <a
            href="mailto:info@chemical.codes"
            className="group inline-flex items-center gap-4 px-10 py-5 rounded-full border border-zinc-700 hover:border-emerald-500 hover:bg-emerald-600/10 transition-all duration-500 active:scale-[0.97]"
          >
            <span className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            <span className="text-lg text-white font-light">info@chemical.codes</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-16 lg:px-24 bg-zinc-950 border-t border-zinc-800/50">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-1">
            <p className="font-semibold text-sm text-zinc-300">chemical codes d.o.o.</p>
            <p className="text-xs text-zinc-600">VAT ID: HR61857067281 | MBS: 081447959</p>
            <p className="text-xs text-zinc-600">Zagrebačkog odreda 17a, HR-10361 Sesvetski Kraljevec</p>
            <p className="text-xs text-zinc-600">Temeljni kapital, &euro;2.654</p>
          </div>
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} chemical codes d.o.o.
          </p>
        </div>
      </footer>
    </main>
    </>
  );
}
