"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Specimen = {
  id: string;
  name: string;
  tone: string;
};

type PodSlot = {
  key: "front" | "left" | "right" | "back";
  wrapperClassName: string;
  style: React.CSSProperties;
  cardClassName: string;
};

const specimens: Specimen[] = [
  {
    id: "SPECIMEN 001",
    name: "CashCast",
    tone:
      "bg-[linear-gradient(180deg,rgba(16,185,129,0.88),rgba(5,150,105,0.72))] border border-emerald-300/30",
  },
  {
    id: "SPECIMEN 002",
    name: "VOID",
    tone:
      "bg-[linear-gradient(180deg,rgba(56,189,248,0.65),rgba(14,116,144,0.58))] border border-cyan-300/30",
  },
  {
    id: "SPECIMEN 003",
    name: "Tensland",
    tone:
      "bg-[linear-gradient(180deg,rgba(217,70,239,0.66),rgba(126,34,206,0.58))] border border-fuchsia-300/30",
  },
  {
    id: "SPECIMEN 004",
    name: "ChronoFlow",
    tone:
      "bg-[linear-gradient(180deg,rgba(250,204,21,0.62),rgba(180,83,9,0.54))] border border-amber-300/30",
  },
];

const podSlots: PodSlot[] = [
  {
    key: "front",
    wrapperClassName:
      "absolute left-[50%] top-[58%] -translate-x-1/2 -translate-y-1/2",
    style: { transform: "translate(-50%, -50%) scale(1.02)", zIndex: 30 },
    cardClassName:
      "h-[240px] w-[138px] md:h-[300px] md:w-[170px] xl:h-[340px] xl:w-[192px] opacity-100",
  },
  {
    key: "left",
    wrapperClassName: "absolute left-[20%] top-[67%] -translate-x-1/2 -translate-y-1/2",
    style: { transform: "scale(0.88) rotate(-7deg)", opacity: 0.82, zIndex: 20 },
    cardClassName:
      "h-[200px] w-[118px] md:h-[248px] md:w-[140px] xl:h-[286px] xl:w-[162px]",
  },
  {
    key: "right",
    wrapperClassName: "absolute left-[80%] top-[67%] -translate-x-1/2 -translate-y-1/2",
    style: { transform: "scale(0.88) rotate(7deg)", opacity: 0.82, zIndex: 20 },
    cardClassName:
      "h-[200px] w-[118px] md:h-[248px] md:w-[140px] xl:h-[286px] xl:w-[162px]",
  },
  {
    key: "back",
    wrapperClassName: "absolute left-[50%] top-[36%] -translate-x-1/2 -translate-y-1/2",
    style: { transform: "translate(-50%, -50%) scale(0.72)", opacity: 0.46, zIndex: 10 },
    cardClassName:
      "h-[166px] w-[98px] md:h-[198px] md:w-[116px] xl:h-[224px] xl:w-[132px]",
  },
];

function wrapIndex(index: number, length: number) {
  return (index + length) % length;
}

export default function Home() {
  const [frontIndex, setFrontIndex] = useState(0);

  const arrangedPods = useMemo(
    () => [
      { slot: podSlots[0], specimen: specimens[wrapIndex(frontIndex, specimens.length)] },
      { slot: podSlots[1], specimen: specimens[wrapIndex(frontIndex + 1, specimens.length)] },
      { slot: podSlots[2], specimen: specimens[wrapIndex(frontIndex + 2, specimens.length)] },
      { slot: podSlots[3], specimen: specimens[wrapIndex(frontIndex + 3, specimens.length)] },
    ],
    [frontIndex],
  );

  function rotateLeft() {
    setFrontIndex((current) => wrapIndex(current + 1, specimens.length));
  }

  function rotateRight() {
    setFrontIndex((current) => wrapIndex(current - 1, specimens.length));
  }

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
                {arrangedPods.map(({ slot, specimen }) => (
                  <div key={`${slot.key}-${specimen.name}`} className={slot.wrapperClassName} style={slot.style}>
                    <a
                      href={`https://${specimen.name.toLowerCase()}.gamadynamics.com.au`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative flex items-center justify-center overflow-hidden rounded-[28px] text-white shadow-[0_0_40px_rgba(0,0,0,0.28)] backdrop-blur-sm transition duration-500 hover:scale-[1.03] ${slot.cardClassName} ${specimen.tone}`}
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

                <div className="pointer-events-none absolute inset-x-[20%] bottom-4 h-16 rounded-full bg-cyan-400/10 blur-[48px] md:bottom-8" />

                <button
                  type="button"
                  aria-label="Rotate specimens left"
                  onClick={rotateLeft}
                  className="absolute left-[28%] top-[88%] z-50 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl text-white shadow-[0_10px_28px_rgba(0,0,0,0.34)] backdrop-blur-md transition hover:scale-105 hover:bg-white/12 md:h-14 md:w-14 md:text-2xl"
                >
                  <span aria-hidden="true">←</span>
                </button>

                <button
                  type="button"
                  aria-label="Rotate specimens right"
                  onClick={rotateRight}
                  className="absolute left-[72%] top-[88%] z-50 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl text-white shadow-[0_10px_28px_rgba(0,0,0,0.34)] backdrop-blur-md transition hover:scale-105 hover:bg-white/12 md:h-14 md:w-14 md:text-2xl"
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
