import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chauffeur Labs — On-Chain Driver Credentials",
    template: "%s — Chauffeur Labs",
  },
  description:
    "Soulbound Tokens for professional drivers and valet attendants. Verifiable, non-transferable credentials on Stellar Soroban.",
  openGraph: {
    title: "Chauffeur Labs — On-Chain Driver Credentials",
    description:
      "Soulbound Tokens for professional drivers and valet attendants. Verifiable, non-transferable credentials on Stellar Soroban.",
    siteName: "Chauffeur Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffeur Labs — On-Chain Driver Credentials",
    description:
      "Soulbound Tokens for professional drivers and valet attendants. Verifiable, non-transferable credentials on Stellar Soroban.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
