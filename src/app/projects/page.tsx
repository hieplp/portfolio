"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/experience";
import { ProjectCardModal } from "@/components/project/project-card-modal";
import { ProjectType } from "@/types/resume";
import { cn } from "@/lib/utils";

type Filter = "all" | ProjectType;

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Personal", value: "personal" },
  { label: "Company", value: "company" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  function handleFilter(value: Filter) {
    setFilter(value);
  }

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <main className="max-w-6xl w-full mx-auto py-32">
      <div className="mb-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <h1 className="text-4xl font-bold tracking-tight mb-2">All Projects</h1>
        <p className="text-muted-foreground">
          {filtered.length} projects · click a card to expand
        </p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-8">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => handleFilter(value)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium border transition-all",
              filter === value
                ? "bg-primary text-primary-foreground border-primary"
                : "border-foreground/10 text-muted-foreground hover:border-foreground/30 hover:text-foreground",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <ProjectCardModal key={item.title} item={item} />
        ))}
      </div>
    </main>
  );
}
