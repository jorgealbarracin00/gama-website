

import Image from "next/image";
import Link from "next/link";

export type HomeSheetSpecimen = {
  id: string;
  name: string;
  subtitle: string;
  status: "live" | "incubating";
  href: string;
  incubationHref: string;
  summary: string;
  features: string[];
  principles: string[];
  difference: string;
  cardImage?: string;
  detailImages?: string[];
  videoSrc?: string;
  heroLine?: string;
  origin?: string;
  buildStory?: string;
  challenges?: string[];
  evolution?: string[];
  currentStage?: string;
  whatItDoes?: string;
  whoItHelps?: string;
  uniqueAdvantages?: string[];
};

type HomeSheetProps = {
  selectedSpecimen: HomeSheetSpecimen;
  selectPrevious: () => void;
  selectNext: () => void;
  canGoLeft: boolean;
  canGoRight: boolean;
};

export default function HomeSheet({
  selectedSpecimen,
  selectPrevious,
  selectNext,
  canGoLeft,
  canGoRight,
}: HomeSheetProps) {
  return (
    <section className="relative overflow-hidden bg-[#050b16] px-6 py-16 text-white md:px-10 md:py-20 xl:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0),rgba(5,11,22,0.9)_35%,rgba(5,11,22,1))]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Selected Specimen Briefing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-wide text-white md:text-5xl">
              {selectedSpecimen.name}
            </h2>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/48 md:text-sm">
              {selectedSpecimen.subtitle}
            </p>
            {selectedSpecimen.heroLine && (
              <p className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                {selectedSpecimen.heroLine}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={selectPrevious}
              disabled={!canGoLeft}
              className="rounded-full border border-white/18 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/78 transition hover:bg-white/14 disabled:cursor-not-allowed disabled:opacity-35"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={selectNext}
              disabled={!canGoRight}
              className="rounded-full border border-cyan-200/24 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100 transition hover:bg-cyan-300/16 disabled:cursor-not-allowed disabled:opacity-35"
            >
              Next
            </button>
          </div>
        </div>

        <div className="space-y-12">
          {selectedSpecimen.cardImage && (
            <div className="relative min-h-[360px] overflow-hidden rounded-[38px] border border-white/12 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,0.32)] md:min-h-[520px]">
              <Image
                src={selectedSpecimen.cardImage}
                alt={`${selectedSpecimen.name} main preview`}
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 1180px"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,9,20,0.18),rgba(3,9,20,0.02)_45%,rgba(3,9,20,0.34))]" />
              <div className="absolute left-6 top-6 rounded-full border border-white/18 bg-black/28 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/82 backdrop-blur-md">
                {selectedSpecimen.status === "live" ? "Deployed system" : "Incubating system"}
              </div>
            </div>
          )}

          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-200/25 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100">
                {selectedSpecimen.id}
              </span>
              <span className="rounded-full border border-white/16 bg-white/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
                {selectedSpecimen.status === "live" ? "Live" : "Incubating"}
              </span>
            </div>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/76 md:text-xl">
              {selectedSpecimen.summary}
            </p>

            {selectedSpecimen.origin && (
              <div className="mt-10 border-l border-cyan-200/24 pl-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200/90">
                  Why it was born
                </p>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/68 md:text-lg">
                  {selectedSpecimen.origin}
                </p>
              </div>
            )}

            {selectedSpecimen.buildStory && (
              <div className="mt-10 border-l border-white/14 pl-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/86">
                  How the process works
                </p>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/68 md:text-lg">
                  {selectedSpecimen.buildStory}
                </p>
              </div>
            )}

            {selectedSpecimen.detailImages?.[0] && (
              <div className="my-12 relative min-h-[720px] overflow-hidden rounded-[34px] border border-white/12 bg-white/[0.045] shadow-[0_18px_55px_rgba(0,0,0,0.24)] md:ml-[-4rem] md:mr-[12rem]">
                <Image
                  src={selectedSpecimen.detailImages[0]}
                  alt={`${selectedSpecimen.name} phone portrait screenshot`}
                  fill
                  className="object-contain bg-black/10"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>
            )}

            {selectedSpecimen.whatItDoes && (
              <div className="mt-10 border-l border-emerald-200/20 pl-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-100/90">
                  What it does
                </p>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/68 md:text-lg">
                  {selectedSpecimen.whatItDoes}
                </p>
              </div>
            )}

            {selectedSpecimen.detailImages?.[1] && (
              <div className="my-12 relative min-h-[420px] overflow-hidden rounded-[34px] border border-white/12 bg-white/[0.045] shadow-[0_18px_55px_rgba(0,0,0,0.24)] md:ml-[8rem] md:mr-[-4rem]">
                <Image
                  src={selectedSpecimen.detailImages[1]}
                  alt={`${selectedSpecimen.name} iPad landscape screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1100px"
                />
              </div>
            )}

            {selectedSpecimen.whoItHelps && (
              <div className="mt-10 border-l border-white/14 pl-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/86">
                  Who it helps
                </p>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/68 md:text-lg">
                  {selectedSpecimen.whoItHelps}
                </p>
              </div>
            )}

            {selectedSpecimen.detailImages?.[2] && (
              <div className="my-12 relative min-h-[420px] overflow-hidden rounded-[34px] border border-white/12 bg-white/[0.045] shadow-[0_18px_55px_rgba(0,0,0,0.24)] md:ml-[-6rem] md:mr-[6rem]">
                <Image
                  src={selectedSpecimen.detailImages[2]}
                  alt={`${selectedSpecimen.name} second iPad landscape screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1100px"
                />
              </div>
            )}

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/92">
                  Features
                </p>
                <ul className="mt-4 space-y-3 text-base leading-relaxed text-white/66">
                  {selectedSpecimen.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/92">
                  Principles
                </p>
                <ul className="mt-4 space-y-3 text-base leading-relaxed text-white/66">
                  {selectedSpecimen.principles.map((principle) => (
                    <li key={principle}>• {principle}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-l border-cyan-200/24 pl-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200/90">
                What makes us different
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/68 md:text-lg">
                {selectedSpecimen.difference}
              </p>
            </div>

            {selectedSpecimen.uniqueAdvantages && selectedSpecimen.uniqueAdvantages.length > 0 && (
              <div className="mt-10 rounded-[28px] border border-emerald-200/16 bg-emerald-300/8 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-100/90">
                  What we have that others usually do not
                </p>
                <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-white/68 md:grid-cols-2 md:text-base">
                  {selectedSpecimen.uniqueAdvantages.map((advantage) => (
                    <li key={advantage}>• {advantage}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedSpecimen.challenges && selectedSpecimen.challenges.length > 0 && (
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-[28px] border border-white/12 bg-white/[0.045] p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/92">
                    Problems we tried to solve
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/66 md:text-base">
                    {selectedSpecimen.challenges.map((challenge) => (
                      <li key={challenge}>• {challenge}</li>
                    ))}
                  </ul>
                </div>

                {selectedSpecimen.evolution && selectedSpecimen.evolution.length > 0 && (
                  <div className="rounded-[28px] border border-white/12 bg-white/[0.045] p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/92">
                      Evolution path
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/66 md:text-base">
                      {selectedSpecimen.evolution.map((step) => (
                        <li key={step}>• {step}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {selectedSpecimen.currentStage && (
              <div className="mt-10 rounded-[28px] border border-cyan-200/18 bg-cyan-300/8 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100/90">
                  Current stage
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
                  {selectedSpecimen.currentStage}
                </p>
              </div>
            )}

            {selectedSpecimen.name === "PVD Assistant" ? (
              <div className="mt-14 overflow-hidden rounded-[34px] border border-cyan-200/18 bg-black/24 p-3 shadow-[0_18px_50px_rgba(34,211,238,0.18)]">
                <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-black">
                  <Image
                    src="/PVDAssistant/PVD Assistant-VID.webp"
                    alt="PVD Assistant App Store preview"
                    width={1600}
                    height={900}
                    className="aspect-video w-full animate-pulse object-contain bg-[#020617]"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.08),transparent_44%)]" />
                  <div className="absolute bottom-4 left-4 rounded-full border border-emerald-200/30 bg-emerald-400/16 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-100 shadow-[0_0_28px_rgba(52,211,153,0.22)] backdrop-blur-md md:bottom-6 md:left-6 md:text-xs">
                    Now in App Store
                  </div>
                </div>
                <p className="mt-3 px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100/62">
                  Deployment status
                </p>
              </div>
            ) : (
              selectedSpecimen.videoSrc && (
                <div className="mt-14 overflow-hidden rounded-[34px] border border-white/12 bg-black/24 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                  <video
                    src={selectedSpecimen.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="aspect-video w-full rounded-[26px] bg-black object-cover"
                  />
                  <p className="mt-3 px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/48">
                    Deployment loop
                  </p>
                </div>
              )
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={selectedSpecimen.incubationHref}
                className="rounded-full border border-white/18 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/88 transition hover:bg-white/18"
              >
                Open incubation chamber
              </Link>
              <a
                href={selectedSpecimen.status === "live" ? selectedSpecimen.href : selectedSpecimen.incubationHref}
                target={selectedSpecimen.status === "live" ? "_blank" : undefined}
                rel={selectedSpecimen.status === "live" ? "noopener noreferrer" : undefined}
                className="rounded-full border border-cyan-200/24 bg-cyan-300/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100 transition hover:bg-cyan-300/16"
              >
                {selectedSpecimen.status === "live" ? "Open app site" : "View incubation notes"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}