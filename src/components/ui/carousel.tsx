"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// — Responsive visible count —

export function useResponsiveVisible(sm = 1, md = 2, lg = 3): number {
  const [visible, setVisible] = useState(lg);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setVisible(sm);
      else if (w < 1024) setVisible(md);
      else setVisible(lg);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [sm, md, lg]);

  return visible;
}

// — State hook —

export interface CarouselState {
  current: number;
  direction: number;
  maxIndex: number;
  go: (idx: number) => void;
}

export function useCarousel(total: number, visible: number, hasExtra = false): CarouselState {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const lastPageStart = Math.max(0, total - visible + (hasExtra ? 1 : 0));
  const maxIndex = lastPageStart;

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(Math.max(0, Math.min(idx, maxIndex)));
  };

  return { current, direction, maxIndex, go };
}

// — Controls —

export function CarouselControls({ current, maxIndex, go }: Omit<CarouselState, "direction">) {
  if (maxIndex === 0) return null;
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-2 items-center">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to page ${i + 1}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === current ? "bg-primary w-5" : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/60"
            )}
          />
        ))}
      </div>
      <div className="flex gap-1">
        <button
          onClick={() => go(current - 1)}
          disabled={current === 0}
          className="p-2 rounded-full border border-border hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => go(current + 1)}
          disabled={current === maxIndex}
          className="p-2 rounded-full border border-border hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// — Slides —

const GAP = 24; // gap-6

interface CarouselSlidesProps<T> {
  items: T[];
  visible?: number;
  state: CarouselState;
  renderItem: (item: T, index: number) => React.ReactNode;
  renderExtra?: React.ReactNode;
}

export function CarouselSlides<T>({
  items,
  visible = 3,
  state,
  renderItem,
  renderExtra,
}: CarouselSlidesProps<T>) {
  const { current } = state;
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => setContainerWidth(el.offsetWidth));
    observer.observe(el);
    setContainerWidth(el.offsetWidth);
    return () => observer.disconnect();
  }, []);

  const itemWidth = containerWidth > 0
    ? (containerWidth - GAP * (visible - 1)) / visible
    : 0;

  const allSlots: Array<{ type: "item"; item: T; idx: number } | { type: "extra" }> = [
    ...items.map((item, idx) => ({ type: "item" as const, item, idx })),
    ...(renderExtra ? [{ type: "extra" as const }] : []),
  ];

  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div
        className="flex"
        style={{ gap: GAP }}
        animate={{ x: -(current * (itemWidth + GAP)) }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {allSlots.map((slot, i) => (
          <div key={i} style={{ width: itemWidth, flexShrink: 0 }} className="flex flex-col">
            {slot.type === "extra" ? renderExtra : renderItem(slot.item, slot.idx)}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
