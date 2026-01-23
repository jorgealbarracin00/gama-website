"use client";

import { useRef } from "react";
import type { Specimen } from "../../lib/types";
import SpecimenCard from "../cards/SpecimenCard";

const SCROLL_AMOUNT = 560;

type SpecimenCarouselProps = {
  specimens: Specimen[];
};

export default function SpecimenCarousel({ specimens }: SpecimenCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="specimens" className="relative pb-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Live specimens
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Each card is a system in motion. Some are shipping. Some are incubating.
              All are part of a larger organism.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollByAmount("left")}
              className="h-11 w-11 rounded-full bg-white/70 backdrop-blur border border-white/70 shadow-[0_10px_20px_rgba(15,23,42,0.12)] ring-1 ring-white/60 hover:bg-white transition"
              aria-label="Scroll left"
            >
              {"<"}
            </button>
            <button
              onClick={() => scrollByAmount("right")}
              className="h-11 w-11 rounded-full bg-white/70 backdrop-blur border border-white/70 shadow-[0_10px_20px_rgba(15,23,42,0.12)] ring-1 ring-white/60 hover:bg-white transition"
              aria-label="Scroll right"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-10 flex gap-10 overflow-x-auto px-6 snap-x snap-mandatory scroll-smooth pb-4"
      >
        {specimens.map((specimen) => (
          <SpecimenCard key={specimen.index} specimen={specimen} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-6 text-sm text-slate-500">
        Tip: swipe horizontally on mobile.
      </div>
    </section>
  );
}
