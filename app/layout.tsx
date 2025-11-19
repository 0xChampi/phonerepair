import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Phone Guys - We Repair | Professional Phone & Device Repair",
  description: "Professional phone and device repair services. We fix iPhones, Samsung, laptops, iPads, and gaming consoles. Fast service, quality parts, and fair pricing. Get your free quote today!",
  keywords: [
    "phone repair",
    "iPhone repair",
    "Samsung repair",
    "laptop repair",
    "iPad repair",
    "console repair",
    "device repair",
    "screen replacement",
    "battery replacement",
    "professional repair service"
  ],
  authors: [{ name: "Phone Guys" }],
  openGraph: {
    title: "Phone Guys - We Repair | Professional Phone & Device Repair",
    description: "Expert repair services for all your devices. Fast, reliable, and affordable.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phone Guys - We Repair",
    description: "Professional phone and device repair services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
