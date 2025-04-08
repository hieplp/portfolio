"use client";

export function HighlightText({
  text,
  underline = true,
}: {
  text: string;
  underline?: boolean;
}) {
  return (
    <span className="font-bold text-primary relative inline-block">
      {text}
      {underline && (
        <span className="absolute -bottom-[0.2px] left-0 w-full h-[2px] bg-primary/30" />
      )}
    </span>
  );
}
