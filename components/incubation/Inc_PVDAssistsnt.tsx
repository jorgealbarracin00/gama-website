

import Image from "next/image";
import Link from "next/link";

const incubationStats = [
  { label: "Core engine", value: "LIVE" },
  { label: "Machine logs", value: "M3 / M4" },
  { label: "Color Lab", value: "ΔE" },
  { label: "Status", value: "APP STORE" },
];

const incubationNotes = [
  {
    title: "Built from the factory floor",
    body: "PVD Assistant was shaped around real coating work: machine starts, run history, color checks, chamber conditions, cleaning events, and the small details operators usually keep in their head.",
  },
  {
    title: "Color Lab as the intelligence layer",
    body: "The system compares target LAB values against measured results, tracks ΔE, and helps operators think through nitrogen, acetylene, machine context, and historical matches before changing a recipe.",
  },
  {
    title: "History becomes memory",
    body: "Every saved run adds context. The goal is to make the app learn from previous runs, machine behaviour, acceptance bands, and process events instead of treating every color problem as a new mystery.",
  },
];

const featureCards = [
  "Machine workspace for M3 and M4",
  "Run history and time buckets",
  "Color Lab recommendations",
  "Acceptance thresholds",
  "Process events and resets",
  "Future timers and machine alerts",
];

export default function IncPVDAssistant() {
  return (
    <main className="min-h-screen bg-[#050b16] text-white">
      <section className="relative overflow-hidden px-5 py-8 md:px-10 md:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_12%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(59,130,246,0.16),transparent_32%),linear-gradient(180deg,rgba(5,11,22,0.2),#050b16_78%)]" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/incubation"
            className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/62 transition hover:border-cyan-200/30 hover:text-cyan-100"
          >
            ← Incubation Chamber
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-cyan-200/24 bg-cyan-300/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-100">
                Specimen 002 · Deployed
              </p>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[0.05em] text-white md:text-6xl">
                PVD Assistant
              </h1>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Industrial coating intelligence
              </p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/68 md:text-lg">
                A factory-floor assistant for PVD machine runs, color decisions, process history, and the quiet patterns that appear only after enough runs are recorded.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {incubationStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/12 bg-white/[0.055] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
                  >
                    <p className="text-xl font-semibold text-cyan-100">{item.value}</p>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/42">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-cyan-200/16 bg-white/[0.045] p-3 shadow-[0_24px_80px_rgba(34,211,238,0.16)]">
              <Image
                src="/PVDAssistant/pvd-hero.webp"
                alt="PVD Assistant hero"
                width={1600}
                height={1000}
                priority
                className="rounded-[26px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
          {incubationNotes.map((note) => (
            <article
              key={note.title}
              className="rounded-[28px] border border-white/12 bg-white/[0.045] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.24)]"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300">
                Incubation note
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{note.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/62">{note.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-12 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[34px] border border-white/12 bg-white/[0.045] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.28)] md:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-300">
                System modules
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Inside the chamber</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/58">
              The app is not just a form. It is a set of small engines that turn daily machine work into useful memory.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <div className="overflow-hidden rounded-[26px] border border-white/10 bg-black/24">
              <Image
                src="/PVDAssistant/pvd-phone.webp"
                alt="PVD Assistant phone workspace"
                width={900}
                height={1400}
                className="h-full max-h-[520px] w-full object-contain bg-[#020617]"
              />
            </div>
            <div className="space-y-4 md:col-span-2">
              <div className="overflow-hidden rounded-[26px] border border-white/10 bg-black/24">
                <Image
                  src="/PVDAssistant/pvd-colorlab.webp"
                  alt="PVD Assistant Color Lab"
                  width={1600}
                  height={1000}
                  className="w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[26px] border border-white/10 bg-black/24">
                <Image
                  src="/PVDAssistant/pvd-history-engine.webp"
                  alt="PVD Assistant History Engine"
                  width={1600}
                  height={1000}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-cyan-200/12 bg-cyan-300/[0.055] px-4 py-4 text-sm font-semibold text-cyan-50/82"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="rounded-[30px] border border-emerald-200/16 bg-emerald-300/[0.055] p-6 shadow-[0_20px_65px_rgba(16,185,129,0.12)]">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-200">
              Current status
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Now in App Store</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/62">
              PVD Assistant has moved beyond a prototype. It is now a deployed specimen, with the next evolution focused on stronger historical intelligence, timers, events, and machine-specific learning.
            </p>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-cyan-200/18 bg-black/24 p-3 shadow-[0_18px_50px_rgba(34,211,238,0.18)]">
            <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#020617]">
              <Image
                src="/PVDAssistant/PVD Assistant-VID.webp"
                alt="PVD Assistant App Store preview"
                width={1600}
                height={900}
                className="aspect-video w-full animate-pulse object-contain bg-[#020617]"
              />
              <div className="absolute bottom-4 left-4 rounded-full border border-emerald-200/30 bg-emerald-400/16 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-100 shadow-[0_0_28px_rgba(52,211,153,0.22)] backdrop-blur-md md:bottom-6 md:left-6 md:text-xs">
                Now in App Store
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}