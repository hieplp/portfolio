import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { experience } from "@/data/experience";
import { TimelineItem } from "@/components/works/timeline-item";

export default function WorksPage() {
  return (
    <main className="max-w-6xl w-full mx-auto py-32">
      <div className="mb-16">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Work Experience
        </h1>
        <p className="text-muted-foreground">{experience.length} positions</p>
      </div>

      <div className="flex flex-col">
        {experience.map((item, i) => (
          <TimelineItem
            key={item.company}
            item={item}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </main>
  );
}
