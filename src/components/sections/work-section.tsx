"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { experience } from "@/data/experience";
import { Section } from "@/components/sections/section";
import {
  useCarousel,
  useResponsiveVisible,
  CarouselControls,
  CarouselSlides,
} from "@/components/ui/carousel";
import { ExperienceEntry } from "@/types/resume";

function ExperienceCard({ item }: { item: ExperienceEntry }) {
  const inner = (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-medium opacity-60 uppercase tracking-wider">
          {item.role}
        </p>
        <h3 className="text-2xl font-semibold">{item.company}</h3>
        <p className="text-xs text-muted-foreground">{item.period}</p>
      </div>

      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-foreground/5 text-[10px] font-medium tracking-wider opacity-70 group-hover:bg-primary/5 group-hover:text-primary transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {item.description && (
        <p className="text-sm opacity-70 line-clamp-4 flex-1">
          {item.description}
        </p>
      )}

      {item.url && (
        <div className="mt-auto pt-2 flex items-center gap-1.5 text-sm font-medium text-primary">
          Visit Website
          <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
        </div>
      )}
    </div>
  );

  const cls =
    "group relative flex flex-col gap-6 p-8 rounded-3xl border border-foreground/10 hover:border-primary/30 hover:shadow-lg transition-all bg-foreground/[0.01] h-full";

  return item.url ? (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

function ShowAllCard() {
  return (
    <Link
      href="/works"
      className="group relative flex flex-col items-center justify-center text-center gap-4 p-8 rounded-3xl border border-foreground/10 hover:border-primary/30 hover:shadow-lg transition-all bg-foreground/[0.01] h-full min-h-[260px]"
    >
      <div>
        <h3 className="text-xl font-semibold">Show all</h3>
        <p className="opacity-60 text-sm">{experience.length} experiences</p>
      </div>
      <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
        View full portfolio
        <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
      </div>
    </Link>
  );
}

export function WorkSection() {
  const visible = useResponsiveVisible();
  const carousel = useCarousel(experience.length, visible, true);

  return (
    <Section
      id="work"
      title="Work"
      href="/works"
      subtitle="Companies & roles"
      headerRight={
        <CarouselControls
          current={carousel.current}
          maxIndex={carousel.maxIndex}
          go={carousel.go}
        />
      }
    >
      <CarouselSlides
        items={experience}
        visible={visible}
        state={carousel}
        renderItem={(item) => <ExperienceCard item={item} />}
        renderExtra={<ShowAllCard />}
      />
    </Section>
  );
}
