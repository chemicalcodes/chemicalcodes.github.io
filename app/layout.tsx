import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chemical Codes - Chemometrics & Machine Learning",
  description: "Specializing in learning from chemical data through advanced chemometrics, machine learning, and research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
