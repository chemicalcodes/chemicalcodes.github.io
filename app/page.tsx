import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-white px-6 py-20">
        <div className="max-w-7xl w-full mx-auto text-center">
          <div className="mb-24 flex justify-center">
            <Image
              src="/cc_2_black.svg"
              alt="Chemical Codes Logo"
              width={1200}
              height={600}
              priority
              className="w-full max-w-4xl h-auto"
            />
          </div>

          <p className="text-2xl md:text-3xl lg:text-4xl text-black mb-24 max-w-5xl mx-auto font-light leading-relaxed">
            Unlocking insights from chemical data through advanced chemometrics and machine learning
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#expertise"
              className="px-12 py-6 bg-black text-white text-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Our Expertise
            </a>
            <a
              href="#contact"
              className="px-12 py-6 bg-white text-black border-3 border-black text-lg font-semibold hover:bg-black hover:text-white transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-24 text-white tracking-tight">
            Our Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-10 bg-white hover:bg-gray-100 transition-all duration-200 group">
              <div className="mb-6">
                <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="5" r="1.5" />
                  <circle cx="12" cy="19" r="1.5" />
                  <circle cx="5" cy="12" r="1.5" />
                  <circle cx="19" cy="12" r="1.5" />
                  <line x1="12" y1="8" x2="12" y2="9" />
                  <line x1="12" y1="15" x2="12" y2="16.5" />
                  <line x1="9" y1="12" x2="6.5" y2="12" />
                  <line x1="15" y1="12" x2="17.5" y2="12" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-black">Chemometrics</h3>
              <p className="text-black text-lg leading-relaxed font-light">
                Advanced statistical methods for extracting meaningful information from complex chemical datasets and analytical measurements.
              </p>
            </div>

            <div className="p-10 bg-white hover:bg-gray-100 transition-all duration-200 group">
              <div className="mb-6">
                <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M9 9h6v6H9z" />
                  <line x1="9" y1="9" x2="4" y2="4" />
                  <line x1="15" y1="9" x2="20" y2="4" />
                  <line x1="9" y1="15" x2="4" y2="20" />
                  <line x1="15" y1="15" x2="20" y2="20" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-black">Machine Learning</h3>
              <p className="text-black text-lg leading-relaxed font-light">
                State-of-the-art machine learning algorithms tailored for chemical data analysis, predictive modeling, and pattern recognition.
              </p>
            </div>

            <div className="p-10 bg-white hover:bg-gray-100 transition-all duration-200 group">
              <div className="mb-6">
                <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  <path d="M12 7v10" />
                  <path d="M9 10h6" />
                  <path d="M9 14h6" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-black">Research</h3>
              <p className="text-black text-lg leading-relaxed font-light">
                Cutting-edge research in data-driven chemistry, developing innovative approaches to understanding and predicting chemical behavior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16 flex justify-center">
            <Image
              src="/cc_2_black.svg"
              alt="Chemical Codes Logo"
              width={400}
              height={200}
              className="w-auto h-24 md:h-28"
            />
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tight leading-tight">
            Decoding Chemical Data
          </h2>

          <p className="text-2xl md:text-3xl mb-10 font-light leading-relaxed">
            At Chemical Codes, we specialize in learning from chemical data by combining advanced chemometrics, machine learning, and innovative research approaches.
          </p>

          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700">
            Our expertise bridges chemistry and data science, enabling researchers and organizations to extract valuable insights from complex chemical datasets and drive scientific discovery forward.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-12 text-white tracking-tight">
            Let's Collaborate
          </h2>

          <p className="text-2xl md:text-3xl text-white mb-16 font-light leading-relaxed">
            Interested in applying advanced chemometrics and machine learning to your chemical data? Let's discuss how we can help.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:info@chemical.codes"
              className="flex items-center gap-3 text-2xl text-white hover:text-gray-300 transition-colors duration-200 font-light border-b-2 border-white hover:border-gray-300 pb-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@chemical.codes
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white text-black text-center border-t-2 border-black">
        <p className="text-lg font-light">
          © {new Date().getFullYear()} Chemical Codes. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
