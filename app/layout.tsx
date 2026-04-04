import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chemical.codes"),
  title: {
    default: "Chemical Codes — Bioinformatics, Chemometrics & Machine Learning",
    template: "%s | Chemical Codes",
  },
  description:
    "Chemical Codes specializes in transforming complex biological and chemical datasets into actionable knowledge through bioinformatics, chemometrics, and machine learning.",
  keywords: [
    "chemometrics",
    "machine learning",
    "bioinformatics",
    "chemical data analysis",
    "deep learning",
    "data science",
    "biostatistics",
    "Python",
    "R statistics",
    "predictive modeling",
    "chemical codes",
  ],
  authors: [{ name: "chemical codes d.o.o." }],
  creator: "chemical codes d.o.o.",
  publisher: "chemical codes d.o.o.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.chemical.codes",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.chemical.codes",
    siteName: "Chemical Codes",
    title: "Chemical Codes — Bioinformatics, Chemometrics & Machine Learning",
    description:
      "Transforming complex biological and chemical datasets into actionable knowledge through bioinformatics, chemometrics, and machine learning.",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Chemical Codes logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Chemical Codes — Bioinformatics, Chemometrics & Machine Learning",
    description:
      "Transforming complex biological and chemical datasets into actionable knowledge through bioinformatics, chemometrics, and machine learning.",
    images: ["/icon-512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} grain`}>{children}</body>
    </html>
  );
}
