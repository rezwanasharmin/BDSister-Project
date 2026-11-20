import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopAnnouncement } from "@/components/layout/TopAnnouncement";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BDSisters.org — Commerce + Community for Sisters | Muhsina Organization",
  description:
    "A collaborative, member-based online haven for Muslim sisters featuring personal & business profiles, fair halal e-commerce, constructive forums, and skill exchange under Muhsina Organization.",
  keywords: [
    "BDSisters",
    "Muslim women network",
    "Halal e-commerce",
    "Sisters community Bangladesh",
    "Muhsina Organization",
    "Halal marketplace",
    "Sisterhood forum",
  ],
  authors: [{ name: "BDSisters & Muhsina Organization" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className}`}>
      <body className="min-h-screen flex flex-col bg-[#FAF5EE] text-[#173330] antialiased selection:bg-[#F7DFC7] selection:text-[#173330]">
        {/* Sacred Announcement & Network Top Bar */}
        <TopAnnouncement />

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Main Application Content */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>

        {/* Global Comprehensive Footer */}
        <Footer />
      </body>
    </html>
  );
}
