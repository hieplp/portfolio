import { HeroSection } from "@/components/sections/hero-section";
import { WorkSection } from "@/components/sections/work-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EducationSection } from "@/components/sections/education-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import {SideNav} from "@/components/side-nav";
import React from "react";

export default function Home() {
  return (
    <main className="px-5">
      <SideNav />
      <HeroSection />
      <WorkSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
