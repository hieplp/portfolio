import type { Metadata } from "next";
import { seo } from "@/data/seo";

export const metadata: Metadata = {
  title: "Work Experience",
  description: `Full work history of ${seo.name} — ${seo.description}`,
  alternates: { canonical: "/works" },
};

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
