"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface WorksWheelItem {
  /** Project name. Shown beside the front card and in the index. */
  title: string;
  /** Cover art. Any src an <img> takes. */
  image: string;
  /** Where the card links to. Omit for a carousel that only browses. */
  href?: string;
  /** Project category or discipline */
  category?: string;
  /** Project index string (e.g. "01") */
  index?: string;
  /** Short project summary */
  description?: string;
  /** Tech tags */
  tags?: string[];
  /** Unique ID */
  id?: string;
}

export interface WorksWheelProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  items: WorksWheelItem[];
  /** Callback fired when the active item is clicked */
  onItemClick?: (item: WorksWheelItem, index: number) => void;
}

/* 3D Drum Perspective Geometry */
const CARD_H_RATIO = 0.46; // card height relative to stage
const CARD_MAX_W_RATIO = 0.40; // card max width relative to stage
const CARD_RATIO = 1.48; // aspect ratio: width / height
const STEP = 40; // degrees between cards on the drum
const DRUM_MULT = 2.15; // drum radius in card heights
const LENS_MULT = 2.65; // perspective distance
const CULL = 1.8; // cull cards beyond this distance

const WHEEL_UNITS = 750;
const DRAG_UNITS = 360;
const SETTLE = 140;
const EASE = 0.12;

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));

type Stage = { w: number; h: number };

export function WorksWheel({
  items,
  onItemClick,
  className,
  ...props
}: WorksWheelProps) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const wheelRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLElement | null)[]>([]);

  const turn = React.useRef(0);
  const target = React.useRef(0);
  const [active, setActive] = React.useState(0);
  const [stage, setStage] = React.useState<Stage>({ w: 0, h: 0 });

  const count = items.length;
  const last = Math.max(count - 1, 0);

  // Reduced motion support
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () => setReduced(query.matches);
    read();
    query.addEventListener("change", read);
    return () => query.removeEventListener("change", read);
  }, []);

  // Observe stage dimensions
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const read = () => setStage({ w: el.clientWidth, h: el.clientHeight });
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const metrics = React.useMemo(() => {
    const { w, h } = stage;
    const stageW = w || 1200;
    const stageH = h || 760;

    const cardW = Math.min(stageH * CARD_H_RATIO * CARD_RATIO, stageW * CARD_MAX_W_RATIO);
    const cardH = cardW / CARD_RATIO;
    const drumR = cardH * DRUM_MULT;
    const depth = cardH * LENS_MULT;

    return {
      cardW,
      cardH,
      drumR,
      depth,
    };
  }, [stage]);

  // RequestAnimationFrame animation loop
  React.useEffect(() => {
    if (!stage.h) return;
    let frame = 0;
    const { drumR } = metrics;

    const draw = () => {
      frame = requestAnimationFrame(draw);
      const gap = target.current - turn.current;
      if (Math.abs(gap) < 0.0005) {
        turn.current = target.current;
      } else {
        turn.current += gap * (reduced ? 1 : EASE);
      }

      const pos = turn.current;

      // Pull the drum back so the front face sits on the screen plane
      if (wheelRef.current) {
        wheelRef.current.style.transform = `translateZ(${-drumR}px)`;
      }

      for (let i = 0; i < count; i++) {
        const d = i - pos;
        const drumDeg = d * STEP;
        const card = cardRefs.current[i];
        if (card) {
          card.style.transform = `rotateX(${drumDeg}deg) translateZ(${drumR}px)`;

          // Smooth opacity falloff as card rotates into depth, vanishing off top & bottom
          const absD = Math.abs(d);
          if (absD > CULL) {
            card.style.opacity = "0";
            card.style.pointerEvents = "none";
          } else {
            card.style.opacity = String(Math.max(0, 1 - absD * 0.45));
            card.style.pointerEvents = "auto";
          }
          card.style.zIndex = String(Math.round(100 - absD * 10));
        }
      }

      const near = clamp(Math.round(pos), 0, last);
      setActive((prev) => (prev === near ? prev : near));
    };

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [metrics, stage.h, count, last, reduced]);

  const to = React.useCallback(
    (next: number) => {
      target.current = clamp(next, 0, last);
    },
    [last],
  );

  const settling = React.useRef(0);
  const isHovered = React.useRef(false);
  const autoMoveTimer = React.useRef<NodeJS.Timeout | null>(null);

  // 5-second auto-move timer
  const resetAutoMove = React.useCallback(() => {
    if (autoMoveTimer.current) clearInterval(autoMoveTimer.current);
    autoMoveTimer.current = setInterval(() => {
      if (isHovered.current || count <= 1) return;
      const currentIdx = Math.round(target.current);
      const nextIdx = (currentIdx + 1) % count;
      to(nextIdx);
    }, 5000);
  }, [count, to]);

  React.useEffect(() => {
    resetAutoMove();
    return () => {
      if (autoMoveTimer.current) clearInterval(autoMoveTimer.current);
    };
  }, [resetAutoMove]);

  // Wheel listener: smoothly rolls between items, doesn't trap page at the ends
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      resetAutoMove();
      const next = target.current + event.deltaY / WHEEL_UNITS;
      if (next >= 0 && next <= last) {
        event.preventDefault();
      }
      to(next);
      window.clearTimeout(settling.current);
      settling.current = window.setTimeout(
        () => to(Math.round(target.current)),
        SETTLE,
      );
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      window.clearTimeout(settling.current);
    };
  }, [to, last, resetAutoMove]);

  const dragY = React.useRef<number | null>(null);
  const dragStart = React.useRef<{ x: number; y: number; isDrag: boolean } | null>(null);

  return (
    <div
      className={cn(
        "relative w-full h-[620px] sm:h-[700px] md:h-[780px] lg:h-[840px] overflow-hidden select-none bg-transparent",
        className,
      )}
      onMouseEnter={() => {
        isHovered.current = true;
      }}
      onMouseLeave={() => {
        isHovered.current = false;
        resetAutoMove();
      }}
      {...props}
    >
      {/* 3D Perspective Stage */}
      <div
        ref={stageRef}
        tabIndex={0}
        role="region"
        aria-label="Projects Carousel"
        className="absolute inset-0 cursor-grab touch-pan-x outline-none active:cursor-grabbing z-0"
        style={{ perspective: `${metrics.depth}px` }}
        onPointerDown={(event) => {
          isHovered.current = true;
          dragY.current = event.clientY;
          dragStart.current = { x: event.clientX, y: event.clientY, isDrag: false };
        }}
        onPointerMove={(event) => {
          if (dragY.current === null) return;
          if (dragStart.current) {
            const dist = Math.hypot(
              event.clientX - dragStart.current.x,
              event.clientY - dragStart.current.y,
            );
            if (dist > 6) dragStart.current.isDrag = true;
          }
          to(target.current + (dragY.current - event.clientY) / DRAG_UNITS);
          dragY.current = event.clientY;
        }}
        onPointerUp={() => {
          isHovered.current = false;
          dragY.current = null;
          to(Math.round(target.current));
          resetAutoMove();
        }}
        onKeyDown={(event) => {
          resetAutoMove();
          if (event.key === "ArrowDown") {
            to(Math.round(target.current) + 1);
            event.preventDefault();
          } else if (event.key === "ArrowUp") {
            to(Math.round(target.current) - 1);
            event.preventDefault();
          }
        }}
      >
        <div
          ref={wheelRef}
          className="absolute top-1/2 left-1/2 [transform-style:preserve-3d]"
        >
          {items.map((item, i) => {
            return (
              <div
                key={item.id || item.title}
                ref={(node: HTMLElement | null) => {
                  cardRefs.current[i] = node;
                }}
                onClick={(e) => {
                  if (dragStart.current?.isDrag) {
                    e.preventDefault();
                    return;
                  }
                  if (i !== active) {
                    e.preventDefault();
                    to(i);
                  } else {
                    onItemClick?.(item, i);
                  }
                }}
                className="absolute [backface-visibility:hidden] cursor-pointer"
                style={{
                  width: metrics.cardW,
                  height: metrics.cardH,
                  marginLeft: -metrics.cardW / 2,
                  marginTop: -metrics.cardH / 2,
                }}
              >
                <div className="relative size-full overflow-hidden rounded-2xl md:rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.95)] bg-neutral-950 transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className="size-full object-cover object-center"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Left: Active Project Title (Vertically Centered) */}
      <div className="pointer-events-none absolute left-[5%] sm:left-[8%] lg:left-[10%] top-1/2 -translate-y-1/2 z-20 max-w-[260px] sm:max-w-xs md:max-w-sm lg:max-w-md">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-normal text-white tracking-tight leading-snug select-none transition-all duration-300">
          {items[active]?.title}
        </h3>
      </div>

      {/* Right: Vertical Index of Projects */}
      <div className="absolute right-[5%] sm:right-[7%] lg:right-[9%] top-[14%] sm:top-[16%] lg:top-[18%] z-20 hidden md:block">
        <ul className="flex flex-col items-start space-y-1.5 lg:space-y-2 select-none">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <li key={item.id || item.title}>
                <button
                  type="button"
                  onClick={() => {
                    to(i);
                    resetAutoMove();
                  }}
                  className={cn(
                    "text-left text-xs sm:text-sm font-sans tracking-tight transition-colors duration-200 outline-none cursor-pointer",
                    isActive
                      ? "text-white font-semibold"
                      : "text-neutral-500 hover:text-neutral-300 font-normal",
                  )}
                >
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Subtle 5-second Auto-move Progress Bar */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900/40 z-20 overflow-hidden">
        <div
          key={active}
          className="h-full bg-red-600/70"
          style={{
            animation: "autoMoveProgress 5s linear forwards",
          }}
        />
      </div>
    </div>
  );
}

export default WorksWheel;
