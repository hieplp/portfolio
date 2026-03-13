"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/experience";
import { PageContainer } from "@/components/layouts/page-container";
import { ProjectCardModal } from "@/components/project/project-card-modal";
import { ProjectType } from "@/types/resume";
import { ProjectFilters } from "./project-filters";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

type Filter = "all" | ProjectType;

function ProjectsContent() {
  const searchParams = useSearchParams();
  const filter = (searchParams.get("type") ?? "all") as Filter;

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <>
      <p className="text-muted-foreground">
        {filtered.length} projects · click a card to expand
      </p>

      <ProjectFilters />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <ProjectCardModal key={item.title} item={item} />
        ))}
      </div>
    </>
  );
}

export default function ProjectsPage() {
  return (
    <PageContainer>
      <div className="mb-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <h1 className="text-4xl font-bold tracking-tight mb-2">All Projects</h1>
        <Suspense fallback={<p className="text-muted-foreground">Loading...</p>}>
          <ProjectsContent />
        </Suspense>
      </div>
    </PageContainer>
  );
}
