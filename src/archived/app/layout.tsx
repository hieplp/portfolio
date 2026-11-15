import type { Metadata, Viewport } from "next";
import { profile, themeInitScript } from "@/archived/content/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | Software Engineer`,
  description:
    "A software engineer’s personal portfolio: professional experience, selected project case studies, technical skills, and contact information.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f9fb",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
