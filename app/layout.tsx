import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TalentScan AI",
  description: "Made with <3 by Futurelab Studios",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "TalentScan AI",
    description: "Intelligent Resume Screening powered by AI",
    siteName: "TalentScan AI",
    images: [
      {
        url: "/icon.svg",
        width: 32,
        height: 32,
        alt: "TalentScan AI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "TalentScan AI",
    description: "Intelligent Resume Screening powered by AI",
    images: ["/icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
