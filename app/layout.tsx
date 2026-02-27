import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Load the Google Font 'Inter' for a professional look
const inter = Inter({ subsets: ["latin"] });

// 2. This is the SEO Magic. Google reads this object.
export const metadata: Metadata = {
  title: {
    template: '%s | Full-Stack Mobile Developer',
    default: 'Raviteja | Flutter & React Developer', // REPLACE THIS
  },
  description: "Portfolio of a Full-Stack Mobile Developer specializing in Flutter, React, and Scalable App Architectures. View my ride-booking and directory app projects.",
  keywords: [
    "Chintamani app developer",
    "Mokshabani",
    "Raviteja",
    "Flutter Developer", 
    "React Developer", 
    "Freelance App Developer", 
    "Mobile App Architect", 
    "Andhra Pradesh Developer", // Local SEO helps you rank faster
    "UI/UX Design"
  ],
  verification: {
    google: "Y8vvHfWZzU2uWm-GeEDzQoBQvAkp4ia0CQqcSGw2TZg",
  },
  authors: [{ name: "Raviteja" }],
  openGraph: {
    title: "Raviteja - Mobile & Web Developer",
    description: "Building scalable ride-booking systems and custom mobile applications.",
    type: "website",
    locale: "en_US",
    siteName: "Raviteja Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"> 
      {/* 'scroll-smooth' makes the "Jump to Projects" buttons glide nicely */}
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}