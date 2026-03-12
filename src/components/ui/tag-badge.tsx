import { cn } from "@/lib/utils";

interface TagBadgeProps {
  tags: string[];
  className?: string;
}

export function TagBadge({ tags, className }: TagBadgeProps) {
  if (!tags.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            "px-2.5 py-1 rounded-md bg-foreground/5 text-[10px] font-medium tracking-wider",
            className
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
