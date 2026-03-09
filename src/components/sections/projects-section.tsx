"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/experience";
import { Section } from "@/components/sections/section";
import { ProjectCard } from "@/components/project/project-card";
import {
  useCarousel,
  useResponsiveVisible,
  CarouselControls,
  CarouselSlides,
} from "@/components/ui/carousel";

const LATEST = projects.slice(0, 4);

function ShowAllCard() {
  return (
    <a
      href="/projects"
      className="group relative flex flex-col items-center justify-center text-center gap-4 p-6 rounded-3xl border border-foreground/10 hover:border-primary/30 hover:shadow-lg transition-all bg-foreground/[0.01] flex-1"
    >
      <div>
        <h3 className="text-xl font-semibold">Show all</h3>
        <p className="opacity-60 text-sm">{projects.length} projects</p>
      </div>
      <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
        View all projects
        <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
      </div>
    </a>
  );
}

export function ProjectsSection() {
  const visible = useResponsiveVisible();
  const carousel = useCarousel(LATEST.length, visible, true);

  return (
    <Section
      id="projects"
      title="Projects"
      href="/projects"
      subtitle="Things I've built"
      headerRight={
        <CarouselControls
          current={carousel.current}
          maxIndex={carousel.maxIndex}
          go={carousel.go}
        />
      }
    >
      <CarouselSlides
        items={LATEST}
        visible={visible}
        state={carousel}
        renderItem={(item) => <ProjectCard item={item} />}
        renderExtra={<ShowAllCard />}
      />
    </Section>
  );
}
