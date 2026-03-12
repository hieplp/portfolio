"use client";

import { useReducer, useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { cn } from "@/lib/utils";

// — Responsive visible count —

export function useResponsiveVisible(sm = 1, md = 2, lg = 3): number {
  const [visible, setVisible] = useState(lg);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisible(w < 768 ? sm : w < 1024 ? md : lg);
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

type CarouselAction = { type: "go"; index: number; direction: number };
type CarouselReducerState = { current: number; direction: number };

function carouselReducer(_state: CarouselReducerState, action: CarouselAction): CarouselReducerState {
  return { current: action.index, direction: action.direction };
}

export function useCarousel(total: number, visible: number, hasExtra = false): CarouselState {
  const [state, dispatch] = useReducer(carouselReducer, { current: 0, direction: 0 });

  const lastPageStart = Math.max(0, total - visible + (hasExtra ? 1 : 0));
  const maxIndex = lastPageStart;

  const go = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, maxIndex));
    dispatch({ type: "go", index: clamped, direction: idx > state.current ? 1 : -1 });
  };

  return { current: state.current, direction: state.direction, maxIndex, go };
}

// — Controls —

export function CarouselControls({ current, maxIndex, go }: Omit<CarouselState, "direction">) {
  if (maxIndex === 0) return null;
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-2 items-center">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={`page-${i}`}
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
    <LazyMotion features={domAnimation}>
      <div ref={containerRef} className="overflow-hidden">
        <m.div
          className="flex"
          style={{ gap: GAP }}
          animate={{ x: -(current * (itemWidth + GAP)) }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {allSlots.map((slot) => (
            <div
              key={slot.type === "extra" ? "extra" : slot.idx}
              style={{ width: itemWidth, flexShrink: 0 }}
              className="flex flex-col"
            >
              {slot.type === "extra" ? renderExtra : renderItem(slot.item, slot.idx)}
            </div>
          ))}
        </m.div>
      </div>
    </LazyMotion>
  );
}
