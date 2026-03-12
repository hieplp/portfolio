import type { Metadata } from "next";
import { seo } from "@/data/seo";
import { profile } from "@/data/profile";
import { Geist_Mono, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";
import { SideNav } from "@/components/side-nav";
import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import React from "react";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-secondary",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: seo.title,
    template: `%s — ${seo.shortTitle}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: seo.name, url: seo.url }],
  creator: seo.name,
  metadataBase: new URL(seo.url),
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    url: seo.url,
    title: seo.title,
    description: seo.description,
    siteName: seo.shortTitle,
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    creator: seo.twitterHandle,
    images: [seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: seo.name,
    url: seo.url,
    jobTitle: profile.title,
    email: profile.contact.email,
    sameAs: [profile.contact.github, profile.contact.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
  };

  return (
    <html lang="en" className={cn("font-sans", outfit.variable, poppins.variable)} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistMono.variable} antialiased bg-secondary min-h-screen flex flex-col`}
      >
        <Providers>
          <Navbar />
          <BackToTop />
          <div className="flex-1">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
