import HomeLayout from "@/components/layouts/home-layout";
import { ExperienceSection } from "./_components/experience-section";
import { IntroductionHero } from "./_components/introduction-hero";
import { ProjectsSection } from "./_components/projects-section";
import { SkillsSection } from "./_components/skills-section";

export default function Home() {
  return (
    <HomeLayout>
      <IntroductionHero />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </HomeLayout>
  );
}
