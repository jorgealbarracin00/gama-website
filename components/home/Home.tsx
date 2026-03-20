"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Specimen = {
  id: string;
  name: string;
  tone: string;
  href: string;
};

type VisibleCard = {
  specimen: Specimen;
  layer: "active" | "next" | "third";
};

const specimens: Specimen[] = [
  {
    id: "SPECIMEN 001",
    name: "CashCast",
    href: "https://cashcast.gamadynamics.com.au",
    tone:
      "bg-[linear-gradient(180deg,rgba(16,185,129,0.88),rgba(5,150,105,0.72))] border border-emerald-300/30",
  },
  {
    id: "SPECIMEN 002",
    name: "VOID",
    href: "https://void.gamadynamics.com.au",
    tone:
      "bg-[linear-gradient(180deg,rgba(56,189,248,0.65),rgba(14,116,144,0.58))] border border-cyan-300/30",
  },
  {
    id: "SPECIMEN 003",
    name: "Tensland",
    href: "https://tensland.gamadynamics.com.au",
    tone:
      "bg-[linear-gradient(180deg,rgba(217,70,239,0.66),rgba(126,34,206,0.58))] border border-fuchsia-300/30",
  },
  {
    id: "SPECIMEN 004",
    name: "ChronoFlow",
    href: "https://chronoflow.gamadynamics.com.au",
    tone:
      "bg-[linear-gradient(180deg,rgba(250,204,21,0.62),rgba(180,83,9,0.54))] border border-amber-300/30",
  },
  {
    id: "SPECIMEN 005",
    name: "Orbit",
    href: "https://orbit.gamadynamics.com.au",
    tone:
      "bg-[linear-gradient(180deg,rgba(129,140,248,0.66),rgba(67,56,202,0.58))] border border-indigo-300/30",
  },
  {
    id: "SPECIMEN 006",
    name: "Memoir",
    href: "https://memoir.gamadynamics.com.au",
    tone:
      "bg-[linear-gradient(180deg,rgba(244,114,182,0.64),rgba(157,23,77,0.56))] border border-pink-300/30",
  },
];

const cardLayerClasses: Record<VisibleCard["layer"], string> = {
  active:
    "left-[20%] top-[58%] z-30 h-[240px] w-[138px] -translate-x-1/2 -translate-y-1/2 opacity-100 md:h-[300px] md:w-[170px] xl:h-[340px] xl:w-[192px]",
  next:
    "left-[47%] top-[58%] z-20 h-[210px] w-[122px] -translate-x-1/2 -translate-y-1/2 opacity-80 md:h-[260px] md:w-[148px] xl:h-[300px] xl:w-[170px]",
  third:
    "left-[69%] top-[58%] z-10 h-[182px] w-[106px] -translate-x-1/2 -translate-y-1/2 opacity-52 md:h-[225px] md:w-[128px] xl:h-[260px] xl:w-[148px]",
};

const cardLayerStyles: Record<VisibleCard["layer"], React.CSSProperties> = {
  active: {
    transform: "translate(-50%, -50%) perspective(1200px) rotateY(-4deg) rotateZ(-1deg) scale(1.02)",
    filter: "blur(0px) saturate(1)",
  },
  next: {
    transform: "translate(-50%, -50%) perspective(1200px) rotateY(-12deg) rotateZ(-3deg) scale(0.94)",
    filter: "blur(0.4px) saturate(0.92)",
  },
  third: {
    transform: "translate(-50%, -50%) perspective(1200px) rotateY(-18deg) rotateZ(-5deg) scale(0.88)",
    filter: "blur(1.1px) saturate(0.76)",
  },
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const visibleCards = useMemo<VisibleCard[]>(() => {
    const active = specimens[selectedIndex];
    const next = specimens[selectedIndex + 1];
    const third = specimens[selectedIndex + 2];

    return [
      active ? { specimen: active, layer: "active" } : null,
      next ? { specimen: next, layer: "next" } : null,
      third ? { specimen: third, layer: "third" } : null,
    ].filter(Boolean) as VisibleCard[];
  }, [selectedIndex]);

  function selectPrevious() {
    setSelectedIndex((current) => clamp(current - 1, 0, specimens.length - 1));
  }

  function selectNext() {
    setSelectedIndex((current) => clamp(current + 1, 0, specimens.length - 1));
  }

  const canGoLeft = selectedIndex > 0;
  const canGoRight = selectedIndex < specimens.length - 1;

  return (
    <section
      className="relative h-screen overflow-hidden bg-[#050b16] text-white"
      style={{
        backgroundImage: "url('/backgrounds/home-hero-hd.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,180,255,0.18),rgba(0,0,0,0)_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,9,20,0.32),rgba(3,9,20,0.55)_55%,rgba(3,9,20,0.72))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,7,18,0.7),rgba(2,7,18,0.22)_30%,rgba(2,7,18,0.22)_70%,rgba(2,7,18,0.7))]" />

      <header className="relative z-20 flex items-center justify-between px-8 pt-5 md:px-12 md:pt-6">
        <div className="flex items-center gap-4">
          <div className="group relative flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:bg-white/15">
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle,rgba(120,180,255,0.25),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-0 rounded-xl animate-[pulse_6s_ease-in-out_infinite] bg-[radial-gradient(circle,rgba(120,180,255,0.6),transparent_70%)] opacity-[0.08]" />

            <Image
              src="/brand/logo-transp.png"
              alt="GAMA Dynamics"
              width={210}
              height={56}
              className="relative h-10 w-auto object-contain brightness-110 transition duration-500 group-hover:brightness-125 md:h-12"
              priority
            />
          </div>
        </div>

        <nav className="hidden items-center gap-10 text-lg text-white/80 md:flex">
          <Link href="#specimens" className="transition hover:text-white">
            Specimens
          </Link>
          <Link href="#ideas" className="transition hover:text-white">
            Incubation Chamber
          </Link>
          <Link href="#evolution" className="transition hover:text-white">
            Evolution Log
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:bg-white/20"
          >
            Contact
          </Link>
        </nav>
      </header>

      <div className="relative z-10 flex h-[calc(100vh-92px)] items-center px-6 pb-8 pt-6 md:h-[calc(100vh-96px)] md:px-10 md:pb-10 md:pt-4 xl:px-14">
        <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-center gap-6 md:grid-cols-[0.9fr_2.1fr] md:gap-8 xl:grid-cols-[0.85fr_2.15fr] xl:gap-10">
          <div className="max-w-md text-center md:text-left">
            <h1 className="text-2xl font-semibold tracking-[0.08em] text-white md:text-3xl xl:text-4xl">
              GAMA DYNAMICS
            </h1>

            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300 md:text-sm xl:text-base">
              Experimental Systems Lab
            </p>

            <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/78 md:text-sm xl:text-base">
              Digital systems grown, tested, and deployed for real life.
            </p>

            <div className="mt-6 flex w-full max-w-sm items-center gap-4 text-white/90 md:mt-7">
              <div className="h-px flex-1 bg-white/18" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/92 md:text-xs xl:text-sm">
                Active Specimens
              </p>
              <div className="h-px flex-1 bg-white/18" />
            </div>
          </div>

          <div className="flex h-full w-full items-center justify-center">
            <div className="relative z-10 flex w-full items-center justify-center pb-2 md:pb-0">
              <div className="relative mt-10 h-[320px] w-full max-w-4xl md:mt-14 md:h-[400px] xl:mt-16 xl:h-[470px]">
                {visibleCards.map(({ specimen, layer }) => (
                  <div
                    key={specimen.name}
                    className={`absolute ${cardLayerClasses[layer]}`}
                    style={{
                      ...cardLayerStyles[layer],
                      transition:
                        "left 520ms cubic-bezier(0.22, 1, 0.36, 1), top 520ms cubic-bezier(0.22, 1, 0.36, 1), transform 520ms cubic-bezier(0.22, 1, 0.36, 1), opacity 520ms cubic-bezier(0.22, 1, 0.36, 1), filter 520ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <a
                      href={specimen.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative flex h-full w-full items-center justify-center overflow-hidden rounded-[28px] text-white shadow-[0_0_40px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-all duration-500 hover:scale-[1.03] ${specimen.tone}`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_52%)]" />
                      <div className="absolute inset-x-3 top-3 h-10 rounded-2xl border border-white/12 bg-white/6" />
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(180deg,rgba(2,6,23,0),rgba(2,6,23,0.34))]" />
                      <div className="absolute inset-0 rounded-[28px] border border-white/14" />

                      <div className="relative z-10 flex h-full w-full flex-col justify-between p-4 md:p-5">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.24em] text-white/72 md:text-[11px]">
                            {specimen.id}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold md:text-xl xl:text-2xl">
                            {specimen.name}
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}

                <div className="pointer-events-none absolute inset-x-[16%] bottom-5 h-16 rounded-full bg-cyan-400/10 blur-[48px] md:bottom-10" />

                <button
                  type="button"
                  aria-label="Previous specimen"
                  onClick={selectPrevious}
                  disabled={!canGoLeft}
                  className="absolute left-[22%] top-[88%] z-50 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl text-white shadow-[0_10px_28px_rgba(0,0,0,0.34)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/12 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 md:h-14 md:w-14 md:text-2xl"
                >
                  <span aria-hidden="true">←</span>
                </button>

                <button
                  type="button"
                  aria-label="Next specimen"
                  onClick={selectNext}
                  disabled={!canGoRight}
                  className="absolute left-[76%] top-[88%] z-50 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl text-white shadow-[0_10px_28px_rgba(0,0,0,0.34)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/12 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 md:h-14 md:w-14 md:text-2xl"
                >
                  <span aria-hidden="true">→</span>
                </button>

                <div className="absolute bottom-[8%] left-[50%] z-40 flex -translate-x-1/2 items-center gap-2 md:bottom-[6%]">
                  {specimens.map((specimen, index) => (
                    <button
                      key={specimen.name}
                      type="button"
                      aria-label={`Select ${specimen.name}`}
                      onClick={() => setSelectedIndex(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === selectedIndex ? "w-8 bg-white" : "w-2.5 bg-white/35 hover:bg-white/55"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
