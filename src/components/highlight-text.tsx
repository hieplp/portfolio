"use client";

export function HighlightText({ text }: { text: string }) {
  return (
    <span className="font-bold text-primary relative inline-block">
      {text}
      <span className="absolute -bottom-[0.2px] left-0 w-full h-[2px] bg-primary/30" />
    </span>
  );
} 