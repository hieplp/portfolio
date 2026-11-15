import SiteFooter from "@/archived/components/site-footer";
import SiteHeader from "@/archived/components/site-header";
import SectionSpy from "@/archived/components/section-spy";
import AboutSection from "@/archived/components/sections/about";
import ContactSection from "@/archived/components/sections/contact";
import ExperienceSection from "@/archived/components/sections/experience";
import HeroSection from "@/components/sections/hero-section";
import StackSection from "@/archived/components/sections/stack";
import WorkSection from "@/archived/components/sections/work";

export default function Home() {
  return (
    <div className="portfolio-home">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div id="top" className="wrap">
        <SiteHeader variant="home" />
        <main id="main" tabIndex={-1}>
          <HeroSection />
          <ExperienceSection />
          <WorkSection />
          <StackSection />
          <AboutSection />
          <ContactSection />
        </main>
        <SiteFooter label="Software Engineer" />
      </div>
      <SectionSpy />
    </div>
  );
}
