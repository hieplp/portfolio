"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { ProjectType } from "@/types/resume";

type Filter = "all" | ProjectType;

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Personal", value: "personal" },
  { label: "Company", value: "company" },
];

export function ProjectFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = (searchParams.get("type") ?? "all") as Filter;

  function handleFilter(value: Filter) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("type");
    } else {
      params.set("type", value);
    }
    router.push(`/projects?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex items-center gap-2 mb-8">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => handleFilter(value)}
          className={cn(
            "px-4 py-1.5 rounded-full text-sm font-medium border transition-all",
            current === value
              ? "bg-primary text-primary-foreground border-primary"
              : "border-foreground/10 text-muted-foreground hover:border-foreground/30 hover:text-foreground",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
